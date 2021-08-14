import React, { useEffect, useState } from 'react';
import TodoForm from './form.js';
import TodoList from './list.js';
// import Settings from './settings.js';
import {Loader}from 'rsuite'
import './todo.scss';
import { Container, Row, Col, Badge,Form,Spinner } from 'react-bootstrap';
import useAjax from '../hooks/useAjax';
import Show from '../show/show';
// import useForm from '../hooks/useForm';
// import useList from '../hooks/list';


function ToDo(props) {
  const [_addItem, removeItem, updateItem, _toggleComplete, _getTodoItems,_getOneTodoItem, loading, list,item]= useAjax();
  // const [list,setList,handleInputChange,handleSubmit] = useForm();
  // const [FormID, setShowForm] = useState('');
  // const showForm=(id)=>{
  //   FormID ? setShowForm('') : setShowForm(id);
  // }

  const update = (e) => {
    e.preventDefault();
    const data = {};
    // if(e.target.text.value) data.text=e.target.text.value;
    // if(e.target.difficulty.value) data.difficulty=e.target.difficulty.value;
    // if(e.target.assignee.value) data.assignee=e.target.assignee.value;
    // updateItem(FormID,data)
    // setShowForm('');
    
  };
console.log( list)
  
 useEffect(_getTodoItems,[])
  // useEffect(() => {
  //   let completeNum = 0;
  //   list.forEach(item => {
  //     if (item.complete) { completeNum++ }
  //   })
  //   document.title = `${completeNum}/${list.length} Tasks `;
    
  // }, [list])

  return (
    <>
     

      <section className="todo">
        <Container>
          <Row>
            <Col>
            <Badge bg="secondary">
              {list.filter((item) => !item.complete).length}
            </Badge>
            </Col>
          </Row>
          <Row>
            <Col md="4">
              <div>
                <TodoForm handleSubmit={_addItem}/>
              </div>
            </Col>
            <Col md="8">
              <div>
              <Show condition={loading}>
              <Loader size="lg" content="Large" />
              {/* <Spinner animation="border" role="status">
              </Spinner> */}
                </Show>
                <Show condition={!loading}>
                <TodoList
                  list={list}
                  handleComplete={_toggleComplete}
                  handleDelete={removeItem}
                />
                </Show>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      
    </>
  );
}

export default ToDo;


