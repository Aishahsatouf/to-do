import React from 'react';
import  useForm  from "../hooks/useForm"
import { Button, Form } from 'react-bootstrap';
function TodoForm(props) {
  const [handleSubmit, handleInputChange] = useForm(callback);
  function callback(data) {
    props.handleSubmit(data);
}
  return (
    <>
      <h3>Add New Item To</h3>

      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Task </Form.Label>
          <Form.Control onChange={handleInputChange} type="text" name="task" placeholder="Add The task name" />
        </Form.Group>

        <Form.Group>
          <Form.Label>Description</Form.Label>
          <Form.Control onChange={handleInputChange} name="description" rows={3} componentClass="textarea" />
        </Form.Group>

        <Form.Group>
          <Form.Label>Creation Date</Form.Label>
          <Form.Control appearance="default" oneTap name="creationdate" style={{ width: 280 }}type="date" onChange={ handleInputChange} />
        </Form.Group>

        <Form.Group>
          <Form.Label>Deu Date</Form.Label>
          <Form.Control appearance="default" block oneTap name="duedate" type="date" style={{ width: 280 }} onChange={handleInputChange} />
        </Form.Group>

        <Button appearance="primary" type="submit"> Add Item</Button>
      </Form>
    </>
  );

}

export default TodoForm;