import React, { useContext, useState } from 'react';
// import { ListGroup, Button, Col, Row, Container } from 'react-bootstrap';
// import { SettingsContext } from '../../context/settings';
import moment from "moment"
import { Badge,Button } from 'react-bootstrap';
import{Header,Container,Content,Footer,Sidebar,List,Tag} from "rsuite";
import Modal from './modal'
function TodoList(props) {

  // const [pageNumber, setpageNumber] = useState(0);
  // const context = useContext(SettingsContext);

  // console.log(context);
  let listNew = [...props.list];

  // if (context.difficulty) {
  //   listNew = listNew.sort((a, b) => {
  //     if (a.difficulty < b.difficulty) {
  //       return 1;
  //     } else if (a.difficulty > b.difficulty) {
  //       return -1;
  //     } else {
  //       return 0;
  //     }
  //   });
  // }

  // if (!context.incomplete) {
  //   listNew = listNew.sort((a, b) => {
  //     if (a.complete > b.complete) {
  //       return 1;
  //     } else if (a.complete < b.complete) {
  //       return -1;
  //     } else {
  //       return 0;
  //     }
  //   });
  // }
  // let numberPages = listNew.length / Number(context.pages);
  // let numPages = []
  // for (let i = 0; i < numberPages; i++) {
  //   numPages.push(<span id='page' key={i} onClick={() => setpageNumber(i)}>{i + 1}</span>)
  // }

  // let start = pageNumber * Number(context.pages);
  // let end = start + Number(context.pages);
  // console.log(pageNumber, start, end)
  // listNew = listNew.slice(start, end)
  // const showForm = (id) => {
  //   props.updateHandle(id);
  // };

  const setVariation = (complete) => {
    console.log(complete);
    return complete ? 'danger' : 'success';
  };
  const handleValue = (complete) => {
    return complete ? 'Complete' : 'Pending';
  };
  const selectColor=(creation,due)=>{
    const today=moment(new Date()).format('YYYY-MM-DD')
    
    if(moment(today).isSame(due)){
      return "red"
    }else{
      return "green"
    }
  }
  return (
    <>
      {listNew.map((item,index) => (
        <Container id='card' key={item._id} style={{border:"0.2% solid red" ,padding:"2.5%"}}>
          <Container style={{fontSize:"20px"}}>
          <Header as="h5" style={{fontWeight:"bold"}}>
             {item.task}{' '}
          <Badge
              className="badge-padding"
              pill
              onClick={() => props.handleComplete(item._id)}
              variant={setVariation(item.complete)}
              style={{cursor:"pointer"}}
              >
              {handleValue(item.complete)}
            </Badge>
          </Header>
          </Container>
          <Container>
          <Content style={{fontSize:"15px",padding:"2%"}}>
            {item.description}
          </Content>
          <Sidebar>
          <Modal id={item._id}/>
            <Button variant="dark" onClick={() => props.handleDelete(item._id)}size="sm">Delete</Button>
          </Sidebar>
          </Container >
          <Footer style={{fontSize:"20px"}}>
          <List>
          <List.Item key={item._id} index={index+1}>
          <Tag color="yellow">Starting Date</Tag>{"         "}{moment(item.creationdate).format('YYYY-MM-DD')}{"       "}<Tag color={selectColor(moment(item.creationdate).format('YYYY-MM-DD'))}>Due Date</Tag>{"   "}{moment(item.duedate).format('YYYY-MM-DD')}
         </List.Item>
           </List>
          </Footer>
        </Container>
      ))}
      {/* {numPages.map(item => {
        return item;
      })} */}

    </>
  )
}

export default TodoList;
