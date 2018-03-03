import React, { Component } from 'react';

class Signin extends Component {
    // state = {
    //     controls: {
    //         email: {
    //             elementType: 'input',
    //             elementConfig: {
    //                 type: 'email',
    //                 placeholder: 'Email',
    //             },
    //             value: '',
    //             validation: {
    //                 required: true,
    //                 isEmail: true
    //             },
    //             valid: false,
    //             touched: false
    //         },
    //         password: {
    //             elementType: 'input',
    //             elementConfig: {
    //                 type: 'password',
    //                 placeholder: 'Password',
    //             },
    //             value: '',
    //             validation: {
    //                 required: true,
    //                 minLength: 3
    //             },
    //             valid: false,
    //             touched: false
    //         }

    //     }
    // }

    render() {
        return (
            <div>
                <h2 className="text-center">Login</h2>
                <form>
                    <div className="form-group">
                        <label htmlFor="email">Email address</label>
                        <input type="email" className="form-control" id="email" placeholder="Enter email" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" className="form-control" id="password" placeholder="Password" />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
                        
        );
    }
}
                
export default Signin;