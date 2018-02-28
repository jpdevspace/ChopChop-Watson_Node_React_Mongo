import React, { Component } from 'react';

import API from '../utils/API';

class User extends Component {
    state = {
        userRecipes: []
    }
    
    render() {
        const userId = this.props.user._id;
        API.getUserRecipes(userId)
            .then(recipes => this.setState({ userRecipes: recipes.data.recipes }))
            .catch(err => console.log(err));

        const userRecipes = this.state.userRecipes.map(recipe => {
            return <li key={recipe._id}>{recipe.title}</li>
        })
        
        return(
            <div>
                {console.log(this.props.user)}
                {!this.props.isAuth ? <h2>Please Log in first</h2> :
                <div>
                    <h1>Hi {this.props.user.name}</h1>
                    <h2>List of all your saved recipes</h2>
                    <ul>{userRecipes}</ul>
                </div>
                    
            }
            </div>
            
        )
    }
}

export default User;