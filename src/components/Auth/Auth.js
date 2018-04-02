import React, { Component } from "react";
import axios from 'axios'
import {connect} from 'react-redux'
import {getUserInfo} from '../../ducks/reducer'
// import { Redirect } from 'react-router'

class Auth extends Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: '',
      profile_pic:''
    };
    this.addUser = this.addUser.bind(this)
    this.getUser = this.getUser.bind(this)
  
    
  }

  handleUsername(e) {
    this.setState({
      username: e.target.value,
      profile_pic: `https://robohash.org/${e.target.value}`
    });
  }
  handlePassword(e) {
    this.setState({
      password: e.target.value
    });
  }
  addUser(res){
    axios.post('/api/auth/register', this.state)
    .then(this.props.history.push("/dashboard")
   
  )
  }
  getUser(res){
    // let bla = 1+1
    axios.post('/api/auth/login', this.state )
    .then(this.props.history.push("/dashboard"))
    .then((res) => {
      this.props.getUserInfo(res.data[0].id, res.data[0].username, res.data[0].profile_pic)
    })
  }
  
    // .then(() => {
    //   return bla
    // })
    // .then(console.log(bla))

  render() {
    return (
      <div>
        <h1>Helo</h1>
        Username:<input onChange={e => this.handleUsername(e)} />
        Password:<input onChange={e => this.handlePassword(e)} />
        <div>
          <button onClick = {this.getUser}>Login</button>
          <button onClick = {this.addUser}>Register</button>
        </div>
      </div>
    );
  }
}

export default connect(null, {getUserInfo})(Auth);
