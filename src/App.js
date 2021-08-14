// import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import ToDo from './components/todo/todo'
// import Show from './components/show/show';
// import { Nav, Navbar, Form, FormControl, Button } from 'react-bootstrap';
// import SettingsProvider from './context/settings';
// import Settings from './components/todo/settings';
// import  AuthProvider from './context/authContext';

// export default class App extends React.Component {
//   static contextType = AuthContext; // I have access to this.context

//   constructor(props) {
//       super(props);
//       this.state = {
//           username: '',
//           password: ''
//       }
//   }

//   handleChange = e => {
//       this.setState({ [e.target.name]: e.target.value });
//   }

//   handleSubmit = e => {
//       e.preventDefault();
//       e.target.reset();
//       // from the context do login
//       console.log("this context----> ", this.context);
//       this.context.login(this.state.username, this.state.password);
//   }
//   render() {
//     return (
//     < AuthProvider>
//       <SettingsProvider>
//         <Show condition={this.context.loggedIn}>
//           <Navbar bg="primary" variant="dark">
//             <Navbar.Brand href="#home">
//               <Nav className="mr-auto">
//                 <Nav.Link href="#home">Home</Nav.Link>
//               </Nav>
//             </Navbar.Brand>

//             <Form condition={!this.context.loggedIn} inline>
//               <FormControl onChange={this.handleChange} type="text" placeholder="Username" className="mr-sm-2" />
//               <FormControl onChange={this.handleChange}type="password" placeholder="Password" className="mr-sm-2" />
//               <Button type="submit" variant="dark">login</Button>
//             </Form>
//           </Navbar>
//           <ToDo />
//           <section>
//             <Settings />
//           </section>
//         </Show>
//         <Show condition={this.context.loggedIn}>
//         <Navbar bg="primary" variant="dark">
//             <Navbar.Brand href="#home">
//               <Nav className="mr-auto">
//                 <Nav.Link href="#home">Home</Nav.Link>
//               </Nav>
//             </Navbar.Brand>
//             <Form inline>
//               <Button variant="dark" onClick={this.context.logout}>logout</Button>
//             </Form>
//           </Navbar>
//         </Show>
//       </SettingsProvider>
//     </AuthProvider>
//     );
//   }
// }
import './App.scss';
import AuthProvider from './context/authContext';
import Login from './components/todo/login';
import 'rsuite/dist/styles/rsuite-default.css';
// import Auth from './components/todo/auth';

function App() {
  return (
    <AuthProvider>
      <Login/>

    </AuthProvider>
  );
}

export default App;

