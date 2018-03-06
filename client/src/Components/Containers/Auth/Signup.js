import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import * as actions from '../../../store/actions/index';

//Components
import Spooner from '../../Search/Spooner';

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
        // Check if user is authenticated after registration and redirect user
        let authRedirect = null;
        if (this.props.isAuthed) {
            authRedirect = <Redirect to="/dashboard" />
        }

        return (
            <div id="signup-section">
                {this.props.isLoading ? <Spooner />
                :
                <div className="container">
                    {authRedirect}
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
                }
            </div>
                        
        );
    }
}

const mapStateToProps = state => {
    return {
        isLoading: state.authReducer.loading,
        isAuthed: state.authReducer.token !== null
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAuth: (name, email, password) => dispatch(actions.authSignUp(name, email, password))
    }
}
                
export default connect(mapStateToProps, mapDispatchToProps)(Signup);