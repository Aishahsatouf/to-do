import React from "react";
import { Button, Form ,Col} from 'react-bootstrap';
class SignUp extends React.Component{
    constructor(props) {
        super(props);
    }
  
    render(){
        return(
            <>
             
            <Col md="4">
            <h3 style={{marginBottom:"5%"}}>Sign Up </h3>
            <Form condition={this.props.condition} onSubmit={this.props.handleSubmit}>
            <Form.Group>
              <Form.Label>Name</Form.Label>
              <Form.Control onChange={this.props.handleChange} type="text"  placeholder="User Name" name="username" />
            </Form.Group>

            <Form.Group>
              <Form.Label>Email</Form.Label>
              <Form.Control onChange={this.props.handleChange} type="email" placeholder="example@example.com" name="email" />
            </Form.Group>
    
            <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control onChange={this.props.handleChange} type="password" placeholder=" please add a password with more than 8 charecters" name="password" />
            </Form.Group>
            <Button variant="link" onClick={this.props.handleSwitch} >Already have account ? Sign In</Button> <Button style={{float:"right"}} type="submit" variant="dark" >Sign Up</Button>
          </Form>
          
          </Col>
          </>
        )
    }

}

export default SignUp
