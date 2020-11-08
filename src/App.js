import React, {Component} from 'react';
import Register from './Register'
import './App.css';
import { data } from './data';


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
  render() {
    const {email, password, user} = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <Register
            email={email}
            password={password}
            price={user}
            createUser={this.createUser.bind(this)}
            handleInputChange={this.handleInputChange.bind(this)}
          />        
        </header>
      </div>
    );
  }
}

export default App;
