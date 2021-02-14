import React from 'react';
import {AuthContext} from '../../context/authContext';
import Show from '../show/show.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import ToDo from './todo'
import { Nav, Navbar, Form, FormControl, Button } from 'react-bootstrap';
import SettingsProvider from '../../context/settings';
import Settings from './settings';

class Login extends React.Component {

    static contextType = AuthContext; // I have access to this.context

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    }

    handleSubmit = e => {
        e.preventDefault();
        e.target.reset();
        // from the context do login
        console.log("this context----> ", this.context);
        this.context.login(this.state.username, this.state.password);
    }


    render() {
        return (
            <>
            <SettingsProvider>
            <Show condition={!this.context.loggedIn}>
             <Navbar bg="primary" variant="dark">
            <Navbar.Brand href="#home">
              <Nav className="mr-auto">
                <Nav.Link href="#home">Home</Nav.Link>
              </Nav>
            </Navbar.Brand>

            <Form id='login'condition={!this.context.loggedIn} onSubmit={this.handleSubmit} inline>
              <FormControl onChange={this.handleChange} type="text" placeholder="Username" className="mr-sm-2" name="username" />
              <FormControl onChange={this.handleChange}type="password" placeholder="Password" className="mr-sm-2" name="password" />
              <Button type="submit" variant="dark" >login</Button>
            </Form>
          </Navbar>
         
        </Show>
        <Show condition={this.context.loggedIn}>
        <Navbar bg="primary" variant="dark">
            <Navbar.Brand href="#home">
              <Nav className="mr-auto">
                <Nav.Link href="#home">Home</Nav.Link>
              </Nav>
            </Navbar.Brand>
            <Form inline>
              <Button variant="danger" onClick={this.context.logout} id='logout'>logout</Button>
            </Form>
          </Navbar>
          <ToDo />
          <section>
            <Settings />
          </section>
        </Show>
      </SettingsProvider>
      </>
     )
    }
}

export default Login;