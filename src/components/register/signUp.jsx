import React from "react";
import { Button, Form, Col, Navbar, Nav, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
class SignUp extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <Row>
          <Col>
            <Navbar bg="primary" variant="dark">
              <Navbar.Brand href="#home">
                <Nav className="mr-auto">
                  <Nav.Link href="#home">Home</Nav.Link>
                </Nav>
              </Navbar.Brand>
            </Navbar>
          </Col>
        </Row>
        <Row style={{ padding: "5%" }} className="justify-content-md-center">
          <Col md="4">
            <h3 style={{ marginBottom: "5%" }}>Sign Up </h3>
            <Form condition={this.props.condition} onSubmit={this.props.handleSubmit}>
              <Form.Group>
                <Form.Label>Name</Form.Label>
                <Form.Control onChange={this.props.handleChange} type="text" placeholder="User Name" name="username" />
              </Form.Group>

              <Form.Group>
                <Form.Label>Email</Form.Label>
                <Form.Control onChange={this.props.handleChange} type="email" placeholder="example@example.com" name="email" />
              </Form.Group>

              <Form.Group>
                <Form.Label>Password</Form.Label>
                <Form.Control onChange={this.props.handleChange} type="password" placeholder=" please add a password with more than 8 charecters" name="password" />
              </Form.Group>
              <Link style={{ fontSize: "15px" }} to="/">Already have account ? Sign In</Link> <Button style={{ float: "right" }} type="submit" variant="dark" >Sign Up</Button>
            </Form>

          </Col>
        </Row>
      </>
    )
  }

}

export default SignUp
