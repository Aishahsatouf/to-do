import React, { useContext, useState } from 'react';
import { ListGroup, Button, Col, Row, Container } from 'react-bootstrap';
import { SettingsContext } from '../../context/settings';
import { Card, Badge } from 'react-bootstrap';

function TodoList(props) {

  const [pageNumber, setpageNumber] = useState(0);
  const context = useContext(SettingsContext);

  console.log(context);
  let listNew = [...props.list];

  if (context.difficulty) {
    listNew = listNew.sort((a, b) => {
      if (a.difficulty < b.difficulty) {
        return 1;
      } else if (a.difficulty > b.difficulty) {
        return -1;
      } else {
        return 0;
      }
    });
  }

  if (!context.incomplete) {
    listNew = listNew.sort((a, b) => {
      if (a.complete > b.complete) {
        return 1;
      } else if (a.complete < b.complete) {
        return -1;
      } else {
        return 0;
      }
    });
  }

  let numberPages = listNew.length / Number(context.pages);
  let numPages = []
  for (let i = 0; i < numberPages; i++) {
    numPages.push(<span id='page' key={i} onClick={() => setpageNumber(i)}>{i + 1}</span>)
  }

  let start = pageNumber * Number(context.pages);
  let end = start + Number(context.pages);
  console.log(pageNumber, start, end)
  listNew = listNew.slice(start, end)

  const setVariation = (complete) => {
    console.log(complete);
    return complete ? 'danger' : 'success';
  };
  const handleValue = (complete) => {
    return complete ? 'Complete' : 'Pending';
  };
  return (
    <>
      {listNew.map((item) => (
        <Card key={item._id}>
          <Card.Header as="h5">
            <Badge
              className="badge-padding"
              pill
              onClick={() => props.handleComplete(item._id)}
              variant={setVariation(item.complete)}
            >
              {handleValue(item.complete)}{' '}
            </Badge>
            {item.assignee}
            <span
              onClick={() => props.handleDelete(item._id)}
              className="delete-btn"
              variant="outline-secondary"
            >

            </span>{' '}
            <button onClick={() => props.handleDelete(item._id)}> X</button>
          </Card.Header>
          <Card.Body>
            <Card.Title>{item.text}</Card.Title>

            <Card.Text className="right-text">

              Difficulty: {item.difficulty}
            </Card.Text>
          </Card.Body>
        </Card>
      ))}
      {numPages.map(item => {
        return item;
      })}

    </>
  )
}

export default TodoList;