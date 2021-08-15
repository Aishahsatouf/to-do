import React from 'react';
import base64 from 'base-64';
import jwt from 'jsonwebtoken';
import cookie from 'react-cookies';

const API = "https://backend-aisha.herokuapp.com";


export const AuthContext = React.createContext();


class AuthProvider extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            loggedIn: false, 
            login: this.login,
            logout: this.logout,
            signup:this.signup,
            user: {},
            isValidAction: this.isValidAction
        }
    }
    signup = async(email,password,username)=> {
        const object={email,password,username}
        const result = await fetch(`${API}/signup`, {
            method: 'post',
            mode: 'cors',
            headers: {'Content-Type': `application/json`},
            body:JSON.stringify(object)
        });
        let res = await result.json();
        this.validateToken(res.token,res.user);
    }
    login = async(email, password)=> {
        const encodedData = base64.encode(`${email}:${password}`)
        const result = await fetch(`${API}/signin`, {
            method: 'post',
            mode: 'cors',
            headers: {'Authorization': `Basic ${encodedData}`}
        });
        let res = await result.json();
        this.validateToken(res.token,res.user);
    }

    validateToken = (token,user) => {
   
        let decodedUser = jwt.decode(token); 
        
        if(decodedUser) {
            this.setAuthState(true, token, user);
        }
    }

    setAuthState = (loggedIn, token, user) => { 
        cookie.save('auth', token);
        this.setState({loggedIn, user});
    }

    logout = () => {
        this.setAuthState(false, null, {});
    }

    isValidAction = (action)=> {       
        return this.state.user.capabilities.includes(action);
    }

    componentDidMount = ()=> {
        const userCookie = cookie.load('auth');
        console.log("userCookie >>> ", userCookie);
        this.validateToken(userCookie);
    }

    render() {
        return (
            <AuthContext.Provider value={this.state}>
                {this.props.children}
            </AuthContext.Provider>
        )
    }
}

export default AuthProvider;