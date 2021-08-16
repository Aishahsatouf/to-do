import './App.scss';
import React, { useContext } from 'react';
import Signin from './components/register/SignIn';
import Signup from './components/register/signUp';
import { AuthContext } from './context/authContext';
import { Route, Switch, Redirect, BrowserRouter } from 'react-router-dom';
import Login from './components/todo/todoConnection';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'rsuite/dist/styles/rsuite-default.css';

class App extends React.Component {
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
    e.preventDefault();
    e.target.reset();
    if (!this.state.username && this.state.email && this.state.password) {
      this.context.login(this.state.email, this.state.password);
    } else if (this.state.username && this.state.email && this.state.password) {
      this.context.signup(this.state.email, this.state.password, this.state.username);
    }
  }
  render() {

    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {!this.context.loggedIn ? <Signin condition={!this.context.loggedIn} handleSubmit={this.handleSubmit} handleChange={this.handleChange} /> : <Login />}
          </Route>
          <Route exact path="/signup">
            {this.context.loggedIn ? <Redirect to="/" /> : <Signup condition={!this.context.loggedIn} handleSubmit={this.handleSubmit} handleChange={this.handleChange} />}
          </Route>
        </Switch>
      </BrowserRouter>

    );
  }
}

export default App;

