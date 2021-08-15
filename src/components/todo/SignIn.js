import React from "react";
import { Button, Form ,Col} from 'react-bootstrap';
class SignIn extends React.Component{
    constructor(props) {
        super(props);
    }
  
    render(){
        return(
            <>
             
            <Col md="4">
            <h3 style={{marginBottom:"5%"}}>Sign In </h3>
            <Form condition={this.props.condition} onSubmit={this.props.handleSubmit}>
            <Form.Group>
              <Form.Label>Email </Form.Label>
              <Form.Control onChange={this.props.handleChange} type="email" placeholder="Email" name="email" />
            </Form.Group>
    
            <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control onChange={this.props.handleChange} type="password" placeholder="Password" name="password" />
            </Form.Group>
            <Button variant="link" onClick={this.props.handleSwitch}>Does not have an account? Sign Up</Button>  <Button style={{float:"right"}} type="submit" variant="dark" >Sign In</Button>
          </Form>  
          </Col>
          </>
        )
    }

}

export default SignIn
