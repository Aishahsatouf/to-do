import React, { useEffect } from 'react';
import TodoForm from './form.jsx';
import TodoList from './list.jsx';
import './todo.scss';
import { Container, Row, Col, Badge, Spinner } from 'react-bootstrap';
import useAjax from '../hooks/useAjax';
import Show from '../show/show';
function ToDo(props) {
  const [_addItem, removeItem, updateItem, _toggleComplete, _getTodoItems,_getOneTodoItem, loading, list,item,updatedItem] = useAjax();

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
              
              </Col> 
        </Show>
        <Show condition={list.length > 0}>
              <Col md="8">
                <div>
                  <Show condition={loading}>
                    <Spinner animation="grow" variant="info" />
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


