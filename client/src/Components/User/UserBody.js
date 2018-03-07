import React, { Component } from 'react';

// Components
import UserRecipe from './UserRecipe';
import Spooner from '../Search/Spooner';


class UserBody extends Component {
    render() {
        let myRecipes = '';
        // If recipes have not loaded yet
        if (this.props.recipes == null) {
            return myRecipes = <Spooner />
        } else {    // As soon as recipes are loaded into state
            myRecipes = this.props.recipes.map((recipe, index) => {
                // Variable to hold each recipes background image and CSS styling
                const recipeImg = {
                    background: `url(${recipe.src}) no-repeat center`,
                    
                }
            
                return (
                    <UserRecipe 
                        key={index}
                        userId={this.props.userId}
                        comments={recipe.comments}
                        recipeIngredients={recipe.ingredients}
                        recipeInstructions={recipe.instructions}
                        recipeId={recipe._id}
                        recipeCmpled={recipe.completed}
                        imgBg={recipeImg}
                        recipeTitle={recipe.title}
                        onRecipeCmpl={this.props.onRecipeCmpl}
                        onRecipeRmv={this.props.onRecipeRmv}
                    />
                )
            })
        }
    
        return (
            <div>
                <h2>My Saved Recipes:</h2>
                <ul>{myRecipes}</ul>
            </div>
        );
    }
    
}

export default UserBody;