import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Register from './Register';
import './App.css';
import { data } from './data';
import Home from './Home';
import Login from './Login';




class App extends Component {
  state = {
    email:'',
    password:'',
    user:'',
    users: data
}

handleInputChange = e =>{
    const {name, value, id, type} = e.target
    this.setState({[name]: type === 'radio' ? id : value})
}   

createUser = e =>{
  e.preventDefault();

  const {email, password, user} = this.state
  const newUser = {
      email,
      password,
      user
  };

  this.setState({
    users: [ ...this.state.users, newUser ]
    //users: this.users.concat(newUser),
  })
  console.log(this.state.users);
}

UserValidation = e =>{
  e.preventDefault();
  const {email, password, user} = this.state
  const {eEmail, ePassword, eUser} = e.target
  const resultado =   this.state.useres.filter(user => email !== eEmail)
  console.log(resultado);

  
}
  render() {
    const {email, password, user} = this.state;
    return (
      <BrowserRouter>
        <div className="App">
          <header className="App-header">
            <Switch>
              <Route
                path='/home'
                component={Home}
              />
              <Route
              path = '/register' 
              render = {() => 
                <Register
                  email={email}
                  password={password}
                  price={user}
                  createUser={this.createUser}
                  handleInputChange={this.handleInputChange}
                />
              }/>
              <Route
              path = '/login' 
              render = {() => 
                <Login
                  email={email}
                  password={password}
                  price={user}
                  createUser={this.UserValidation}
                  handleInputChange={this.handleInputChange}
                />
              }/>
            </Switch>
          </header>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
