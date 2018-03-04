import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../../store/actions/index';

class Signin extends Component {

    state = {
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
        this.props.onAuth(this.state.email, this.state.password);
    }

    render() {
        return (
            <div>
                <h2 className="text-center">Login</h2>
                <form onSubmit={this.submitHandler}>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input 
                            onChange={this.onInputChange} 
                            name="email" 
                            type="email" 
                            className="form-control" 
                            placeholder="Email" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input 
                            onChange={this.onInputChange} 
                            name="password" 
                            type="password" 
                            className="form-control"  
                            placeholder="Password" />
                    </div>
                    <button type="submit" className="btn btn-primary">Login</button>
                </form>
            </div>
                        
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAuth: (email, password) => dispatch(actions.authSignIn(email, password))
    }
}
                
export default connect(null, mapDispatchToProps)(Signin);