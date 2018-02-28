import React, { Component } from 'react';

class User extends Component {
    
    render() {
        // const savedRecipes = this.props.user.recipes;

        return(
            <div>
                {console.log(this.props.user)}
                {!this.props.isAuth ? <h2>Please Log in first</h2> :
                <div>
                    <h1>Hi {this.props.user.name}</h1>
                    <h2>List of all your saved recipes</h2>
                    {/* <ul>{savedRecipes}</ul> */}
                </div>
                    
            }
            </div>
            
        )
    }
}

export default User;