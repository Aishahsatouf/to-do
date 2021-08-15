import React from 'react';
import { AuthContext } from '../../context/authContext';
import SignIn from "./SignIn";
import SignUp from "./signUp"
import Show from '../show/show.js';
import { Avatar, Icon } from 'rsuite';
import ToDo from './todo'
import { Nav, Navbar, Form, FormControl, Button, Row, Col, Container } from 'react-bootstrap';

class Login extends React.Component {

  static contextType = AuthContext;
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      username: '',
      password: '',
      signup: false
    }
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit = e => {
    console.log(e.target)
    e.preventDefault();
    e.target.reset();
    if (!this.state.username && this.state.email && this.state.password) {
      this.context.login(this.state.email, this.state.password);
    } else if (this.state.username && this.state.email && this.state.password) {
      this.context.signup(this.state.email, this.state.password, this.state.username);
    }
  }
  handleSwitch = () => {
    this.setState({ signup: !this.state.signup })
  }

  render() {
    return (
      <>
        <Show condition={!this.context.loggedIn}>

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
        </Show>
        <Show condition={!this.context.loggedIn && !this.state.signup}>
          <Row style={{ padding: "5%" }} className="justify-content-md-center">

            <SignIn condition={!this.context.loggedIn} handleSubmit={this.handleSubmit} handleChange={this.handleChange} handleSwitch={this.handleSwitch} />
          </Row>
        </Show>
        <Show condition={!this.context.loggedIn && this.state.signup}>
          
        <Row style={{ padding: "5%" }} className="justify-content-md-center">

<SignUp condition={!this.context.loggedIn} handleSubmit={this.handleSubmit} handleChange={this.handleChange} handleSwitch={this.handleSwitch} />
</Row>
            {/* <Form id='signup' condition={!this.context.loggedIn} onSubmit={this.handleSubmit} inline>
              <FormControl onChange={this.handleChange} type="text" placeholder="Username" className="mr-sm-2" name="username" />
              <FormControl onChange={this.handleChange} type="password" placeholder="Password" className="mr-sm-2" name="password" />
              <FormControl onChange={this.handleChange} type="email" placeholder="Email" className="mr-sm-2" name="email" />
              <Button type="submit" variant="dark" >Sign Up</Button>
              <Button type="submit" variant="light" onClick={this.handleSwitch} >Sign In</Button>
            </Form> */}
          

        </Show>
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