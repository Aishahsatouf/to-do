
import React ,{useState,useEffect}from "react";
import {Modal,Button,ButtonToolbar} from "rsuite"
import { PencilFill} from "react-bootstrap-icons"
import { Form } from 'react-bootstrap';
import useAjax  from "../hooks/useAjax";
import moment from 'moment'

function Model(props) {
  const [_addItem, removeItem, updateItem, _toggleComplete, _getTodoItems,_getOneTodoItem, loading, list,item]=useAjax();
    const [show,setShow]=useState(false)
    const [values, setValues] = useState({});
    const handleInputChange=(e)=>{
      setValues({ ...values, [e.target.name]: e.target.value });
    }
    const handleSubmit=()=>{
      console.log(values) 
      updateItem(props.id,values);

    }
    const close=()=> {
      setShow(false );
    }

    useEffect(() => {
      _getOneTodoItem(props.id)
    
  }, [])

    const open=()=> {
      if(props.id){
        _getOneTodoItem(props.id);
      }
      setShow(true);
    }
  
      return (
        <div className="modal-container">
         <ButtonToolbar>
          <PencilFill  onClick={open}  size={18} style={{cursor:'pointer',margin:'0 5px'}} >Edit</PencilFill >
        </ButtonToolbar>
        <Form onSubmit={handleSubmit}>
          <Modal show={show} onHide={close}>
            <Modal.Header>
              <Modal.Title>Modal Title</Modal.Title>
            </Modal.Header>
            <Modal.Body>
           
        <Form.Group>
          <Form.Label>Task </Form.Label>
          <Form.Control  defaultValue={item.task} onChange={handleInputChange} type="text" name="task" placeholder="Add The task name" />
        </Form.Group>

        <Form.Group>
          <Form.Label>Description</Form.Label>
          <Form.Control  defaultValue={item.description}onChange={handleInputChange} name="description" rows={3} componentClass="textarea" />
        </Form.Group>

        <Form.Group>
          <Form.Label>Creation Date</Form.Label>
          <Form.Control  defaultValue={moment(item.creationdate).format('YYYY-MM-DD')}appearance="default" oneTap name="creationdate" style={{ width: 280 }}type="date" onChange={ handleInputChange} />
        </Form.Group>

        <Form.Group>
          <Form.Label>Deu Date</Form.Label>
          <Form.Control defaultValue={item.duedate} appearance="default" block oneTap name="duedate" type="date" style={{ width: 280 }} onChange={handleInputChange} name="duedate" />
        </Form.Group>
      
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={() =>{
                handleSubmit();
                close();
              }} appearance="primary" type="submit">
                Ok
              </Button>
              <Button onClick={close} appearance="subtle">
                Cancel
              </Button>
            </Modal.Footer>
          </Modal>
          </Form>
        </div>
      );
   
  }
  
  export default Model;