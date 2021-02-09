import React, { useEffect, useState } from 'react';
import TodoForm from './form.js';
import TodoList from './list.js';
import './todo.scss';
import { Container, Row, Col, Alert, Navbar, Nav } from 'react-bootstrap';
const todoAPI = 'https://todo-fatima.herokuapp.com/api/v1/todo';

function ToDo (props) {
  const [list,setList] = useState([]);

  const _addItem = async (item) => {
    item = { ...item, complete: false };
    console.log(item);

    fetch(todoAPI, {
      method: 'post',
      mode: 'cors',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(item),
    })
      .then((data) => data.json())
      .then((newItem) => setList([...list, newItem]))
      .catch(console.error);
  };

  const _toggleComplete = async (id) => {
    let item = list.filter((i) => i._id === id)[0] || {};
    item.complete = !item.complete;
  
    let url = `${todoAPI}/${item._id}`;
    fetch(url, {
      method: 'put',
      mode: 'cors',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(item),
    })
      .then((data) => data.json())
      .then((updatedItem) =>
        setList(
          list.map((listItem) =>
            updatedItem._id === listItem._id ? updatedItem : listItem
          )
        )
      )
      .catch(console.error);
  };

  const _deleteItem = (id) => {
    let url = `${todoAPI}/${id}`;
    fetch(url, {
      method: 'delete',
      mode: 'cors',
    })
      .then((data) => data.json())
      .then((deleteddItem) => {
        let result = [];
        list.forEach((listItem) => {
          if (listItem._id !== deleteddItem._id) result.push(listItem);
        });
        setList(result);
      })
      .catch(console.error);
  };

  const _getTodoData = () => {
    fetch(todoAPI, {
      method: 'get',
      mode: 'cors',
    })
      .then((data) => data.json())
      .then((data) => setList(data.result))
      .catch(console.error);
  };

  useEffect(_getTodoData, []);
  
  return (
    <>
      <section className="todo">
        <Container>
          <Row>
            <Col>
              <Alert className="black-alert">
                <h4>
                  There are {list.filter((item) => !item.complete).length} Items
                  To Complete
                </h4>
              </Alert>
            </Col>
          </Row>
          <Row>
            <Col md="4">
              <div>
                <TodoForm handleSubmit={_addItem} />
              </div>
            </Col>
            <Col md="8">
              <div>
                <TodoList
                  list={list}
                  handleComplete={_toggleComplete}
                  handleDelete={_deleteItem}
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}


export default ToDo;