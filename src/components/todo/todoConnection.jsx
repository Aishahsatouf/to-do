import React from 'react';
import { AuthContext } from '../../context/authContext';
import Show from '../show/show.jsx';
import { Avatar, Icon } from 'rsuite';
import ToDo from './todo'
import { Nav, Navbar, Form, Button, Row, Col, Container } from 'react-bootstrap';

class Login extends React.Component {

  static contextType = AuthContext;
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <>
        <Show condition={this.context.loggedIn}>
          <Navbar bg="primary" variant="dark">
            <Navbar.Brand href="#home">
              <Nav className="mr-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Avatar>
                  <Icon icon="user" />
                </Avatar>
              </Nav>
            </Navbar.Brand>
            <Form inline>
              <Button variant="danger" onClick={this.context.logout} id='logout'>logout</Button>
            </Form>

          </Navbar>
          <Container>

            <Row >
              <Col sm>
                <ToDo />
              </Col>
            </Row>
          </Container>
        </Show>

      </>
    )
  }
}

export default Login;