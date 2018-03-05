import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../../store/actions/index';

class Signup extends Component {

    state = {
        name: '',
        email: '',
        password: ''
    }

    // Function to update both email or password when the input is changed
    onInputChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    // Submit the user typed email and password for authentication 
    submitHandler = e => {
        e.preventDefault();
        this.props.onAuth(this.state.name, this.state.email, this.state.password);
    }

    render() {
        return (
            <div id="signup-section">
                <div className="container">
                    <h1 className="text-center">Sign up</h1>
                    <form onSubmit={this.submitHandler}>
                        <div className="form-group">
                            <input 
                                onChange={this.onInputChange} 
                                name="name" 
                                type="text" 
                                className="form-control" 
                                placeholder="Name" />
                        </div>
                        <div className="form-group">
                            <input 
                                onChange={this.onInputChange} 
                                name="email" 
                                type="email" 
                                className="form-control" 
                                placeholder="Email" />
                        </div>
                        <div className="form-group">
                            <input 
                                onChange={this.onInputChange} 
                                name="password" 
                                type="password" 
                                className="form-control"  
                                placeholder="Password" />
                        </div>
                        <button type="submit" className="btn btn-primary">Sign up</button>
                    </form>
                </div>
            </div>
                        
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAuth: (name, email, password) => dispatch(actions.authSignUp(name, email, password))
    }
}
                
export default connect(null, mapDispatchToProps)(Signup);