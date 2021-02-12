import React from 'react';
import { useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap';
import useForm from '../hooks/useForm'

function TodoForm(props) { 

  return (
    <>
      <h3>Add Item</h3>
   
      <Form onSubmit={props.handleSubmit}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>To Do Item</Form.Label>
          <Form.Control  onChange={props.handleInputChange} type="text"  name="text" placeholder="Add To Do List Item" />
        </Form.Group>

        <Form.Group controlId="formBasicRange">
          <Form.Label>Difficulty Rating</Form.Label>
          <Form.Control defaultValue="1" type="range" min="1" max="5" name="difficulty" onChange={props.handleInputChange}type="range" />
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
          <Form.Label>Assigned To</Form.Label>
          <Form.Control  onChange={props.handleInputChange} type="text"  name="assignee" placeholder="Assigned To" />
        </Form.Group>

     
        <Button variant="primary" type="submit"> Add Item</Button>
      </Form>
    </>
  );

}

export default TodoForm;