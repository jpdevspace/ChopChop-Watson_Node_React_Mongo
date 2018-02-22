import React, { Component } from 'react';
import { Button, Modal, FormGroup, FormControl } from 'react-bootstrap';

class Register extends Component {
  

  render() {
    return (
        <Modal show={this.props.show} onHide={this.props.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{this.props.task === 'register' ? 'Sign up' : 'Login'}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form action={this.props.task === 'register' ? "/register" : "/login"} method="POST">
              <FormGroup>
                <FormControl name="email" type="email" placeholder="Enter email" />
                <FormControl name="password" type="password" placeholder="Enter password" />
                {this.props.task === 'register' 
                  ?
                    <span>
                      <FormControl name="password2" type="password" placeholder="Confirm password" />
                      <FormControl name="name" type="text" placeholder="Enter name" />
                    </span>
                  : 
                    null
                }

                <FormControl.Feedback />
              </FormGroup>
            </form> 
            <hr />
            <Button onClick={this.props.handleClose}>Close</Button>
            <Button>{this.props.task === 'register' ? 'Register' : 'Login'}</Button>
          </Modal.Body>


        </Modal>
    );
  }
}
 export default Register;