import React, { useContext, useState } from 'react';
import moment from "moment"
import { Badge, Button, Row   } from 'react-bootstrap';
import {TrashFill} from 'react-bootstrap-icons'
import Pagination from "react-js-pagination";
import { Header, Container, Content, Footer, Sidebar, List, Tag, InputGroup, Input, Icon } from "rsuite";
import Modal from './modal'
function TodoList(props) {
  const [listNew, steListNew] = useState([...props.list]);
  const [currentPage,setCurrentPage]=useState(1)
  const selectPage = (pageNum) =>{
    setCurrentPage(pageNum);
      
    }
  const setVariation = (complete) => {

    return complete ? 'success' : 'danger';
  };
  const handleValue = (complete) => {
    return complete ? 'Complete' : 'Pending';
  };
  const selectColor = ( due) => {
    const today = moment(new Date()).format('YYYY-MM-DD')

    if (moment(today).isSame(due)) {
      return "red"
    } else {
      return "green"
    }
  }

  const handleFilterChange = (e) => {
    console.log("from search", e)
    const newList = props.list.filter(item => {
      return item.task.includes(e) || item.description.includes(e)
    });
    if (newList) {
      steListNew([...newList])
    }
  }
  return (
    <>
      <Row>
        <InputGroup style={{
          width: 300,
          marginBottom: 10
        }}>
          <Input placeholder="search according to task or description" onChange={handleFilterChange} />
          <InputGroup.Addon>
            <Icon icon="search" />
          </InputGroup.Addon>
        </InputGroup>
      </Row>
      {listNew
      .slice((currentPage - 1) * 3, currentPage * 3)
      .map((item, index) => (
        <Row>
          <Container id='card' key={item._id} style={{ border: "0.2% solid red", padding: "2.5%" }}>
            <Container style={{ fontSize: "20px" }}>
              <Header as="h5" style={{ fontWeight: "bold" }}>
                {item.task}{' '}
                <Badge
                  className="badge-padding"
                  pill
                  onClick={() => props.handleComplete(item._id)}
                  variant={setVariation(item.complete)}
                  style={{ cursor: "pointer" }}
                >
                  {handleValue(item.complete)}
                </Badge>
              </Header>
            </Container>
            <Container>
              <Content style={{ fontSize: "15px", padding: "2%" }}>
                {item.description}
              </Content>
              <Sidebar>
                <Modal id={item._id} />
                <TrashFill size={18} style={{cursor:'pointer',marginTop:"5%"}} onClick={() => props.handleDelete(item._id)} >Delete</TrashFill>
              </Sidebar>
            </Container >
            <Footer style={{ fontSize: "20px" }}>
              <List>
                <List.Item key={item._id} index={index + 1}>
                  <Tag color="yellow">Starting Date</Tag>{"         "}{moment(item.creationdate).format('YYYY-MM-DD')}{"       "}<Tag color={selectColor(moment(item.duedate).format('YYYY-MM-DD'))}>Due Date</Tag>{"   "}{moment(item.duedate).format('YYYY-MM-DD')}
                </List.Item>
              </List>
            </Footer>
          </Container>
        </Row>
      ))}
      <Pagination
            activePage={currentPage}
            itemsCountPerPage={3}
            totalItemsCount={props.list.length}
            pageRangeDisplayed={5}
            onChange={selectPage}
        />
       

    </>
  )
}

export default TodoList;
