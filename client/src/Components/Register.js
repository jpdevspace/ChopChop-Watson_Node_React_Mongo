import React, { Component } from 'react';
import { Button, Modal, FormGroup, FormControl } from 'react-bootstrap';


// Utils
import API from '../utils/API';

class Register extends Component {
  state = {
    name: '',
    email: '', 
    password: '', 
    password2: ''
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault();
    if (this.props.task === 'register') {
      const userRegistration = {
        name: this.state.name,
        email: this.state.email, 
        password: this.state.password, 
        password2: this.state.password2
      }
      API.userRegistration(userRegistration)
        .then(response => {
          this.clearState();
          this.props.handleClose(); // Close modal
          this.props.msg(response.data);  // Alert user of any updates/errors
        })
        .catch(err => console.log(err))
    }
    else {
      const userLogin = {
        email: this.state.email,
        password: this.state.password
      }
      API.userLogin(userLogin)
        .then(response => {
          console.log(response)
          this.clearState();
          this.props.handleClose(); // Close modal
          this.props.msg('User logged in');  // Alert user of any updates/errors
          this.props.auth();   // Activate auth mode
        })
        .catch(err => console.log(err))
    }
  }

  clearState = () => {
    this.setState({
      name: '',
      email: '', 
      password: '', 
      password2: ''
    })
  }

  render() {

    return (
        <Modal show={this.props.show} onHide={this.props.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{this.props.task === 'register' ? 'Sign up' : 'Login'}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form action={this.props.task === 'register' ? "/register" : "/login"} method="POST">
              <FormGroup>
                <FormControl 
                  onChange={this.handleChange} 
                  value={this.state.email} 
                  name="email" 
                  type="email" 
                  placeholder="Enter email" />
                <FormControl 
                  onChange={this.handleChange} 
                  value={this.state.password} 
                  name="password" 
                  type="password" 
                  placeholder="Enter password" />

                {/* If user chose registration show following extra fields */}
                {this.props.task === 'register' 
                  ?
                    <span>
                      <FormControl 
                        onChange={this.handleChange} 
                        value={this.state.password2} 
                        name="password2" 
                        type="password" 
                        placeholder="Confirm password" />
                      <FormControl 
                        onChange={this.handleChange} 
                        value={this.state.name} 
                        name="name" 
                        type="text" 
                        placeholder="Enter name" />
                    </span>
                  : 
                    null
                }
                <FormControl.Feedback />
              </FormGroup>
              <hr />
              <Button onClick={() => { this.props.handleClose(); this.clearState() }}>Close</Button>
              <Button onClick={this.handleSubmit}>{this.props.task === 'register' ? 'Register' : 'Login'}</Button>
            </form> 
          </Modal.Body>
        </Modal>
    );
  }
}
 export default Register;