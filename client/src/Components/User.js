import React, { Component } from 'react';

class User extends Component {
    render() {
        return(
            <div>
                {!this.props.isAuth ? <h2>Please Log in first</h2> :
                <h1>User</h1>
            
            }
            </div>
            
        )
    }
}

export default User;