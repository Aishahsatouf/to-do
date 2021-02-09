import React from 'react';
import { Card, Badge } from 'react-bootstrap';
function TodoList(props) {
  const setVariation = (complete) => {
    console.log(complete);
    return complete ? 'danger' : 'success';
  };
  const handleValue = (complete) => {
    return complete ? 'Complete' : 'Pending';
  };
  return (
    <>
      {props.list.map((item) => (
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
              X
            </span>{' '}
          </Card.Header>
          <Card.Body>
            <Card.Title>{item.text}</Card.Title>
            <Card.Text className="right-text">
              Difficulty: {item.difficulty}
            </Card.Text>
          </Card.Body>
        </Card>
      ))}
    </>
  );
}

export default TodoList;