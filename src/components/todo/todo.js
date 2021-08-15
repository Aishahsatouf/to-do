import React, { useEffect } from 'react';
import TodoForm from './form.js';
import TodoList from './list.js';
import './todo.scss';
import { Container, Row, Col, Badge, Spinner } from 'react-bootstrap';
import useAjax from '../hooks/useAjax';
import Show from '../show/show';
function ToDo(props) {
  const [_addItem, removeItem, updateItem, _toggleComplete, _getTodoItems, _getOneTodoItem, loading, list, item] = useAjax();

  useEffect(_getTodoItems, [])
  

    return (
      <><section className="todo">
        
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
                <TodoForm handleSubmit={_addItem} />
              </Col>
        <Show condition={list.length <= 0 && !loading}>
          <Col md="8" style={{
            display:"flex",
            justifyContent:"start",
            backgroundImage: `url("https://images.ctfassets.net/lzny33ho1g45/best-android-to-do-list-apps-p-img/501a7d8823758b5f40362191fe938dfe/file.png?w=1520&fm=jpg&q=30&fit=thumb&h=760")` ,
            backgroundSize:"cover",
            backgroundRepeat:"no-repeat"
        }}>
              <h1 style={{color:"#232323"}}>Add New Tasks</h1>
              </Col> 
        </Show>
        <Show condition={list.length > 0}>
              <Col md="8">
                <div>
                  <Show condition={loading}>
                    <Spinner animation="grow" variant="primary" />
                    <Spinner animation="grow" variant="secondary" />
                    <Spinner animation="grow" variant="success" />
                    <Spinner animation="grow" variant="danger" />
                    <Spinner animation="grow" variant="warning" />
                    <Spinner animation="grow" variant="info" />
                    <Spinner animation="grow" variant="light" />
                  </Show>
                  <Show condition={!loading&&list.length > 0}>
                    <TodoList
                      list={list}
                      handleComplete={_toggleComplete}
                      handleDelete={removeItem}
                    />
                  </Show>
                </div>
              </Col>
        </Show >
            </Row>
          </Container>
        </section>
      </>
    );
  }


export default ToDo;


