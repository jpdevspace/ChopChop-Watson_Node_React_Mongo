import React, { Component } from 'react';

// Components
import RecipeInstructions from '../Search/RecipeInstructions';
import CookCloseBtn from '../Search/CookCloseBtn';
import Spooner from '../Search/Spooner';

// Axios
import API from '../../utils/API';

class UserBody extends Component {
    state = { 
        active: false,
        alert: null,
        userId: this.props.userId,
        recipes: this.props.recipes
    };
    // Function to open/close cooking instructions
    activeRecipe = () => {
        this.setState({ active: !this.state.active })
    }
    // Function to remove recipe from user's profile
    removeRecipe = (userId, recipeTitle) => {
        const recipeInfo = { userId, recipeTitle };
        API.removeRecipe(recipeInfo)
            .then(response => this.updateRecipesCount(recipeTitle))
            .catch(err => console.log(err))
    }

    // Function to update recipe as complete
    completeRecipe = (userId, recipeTitle) => {
        const recipeInfo = { userId, recipeTitle };
        API.completeRecipe(recipeInfo)
            .then(response => console.log(response))//this.updateRecipesCount(recipeTitle))
            .catch(err => console.log(err))
         
    }

    // Function to update state and re-render component with new recipes list
    updateRecipesCount = recipeTitle => {
        // Filter recipe list to remove the recently removed recipe
        const newRecipeList = this.state.recipes.filter(recipe => recipe.title !== recipeTitle );
        this.setState({ recipes: newRecipeList });
    }

    


    render() {
        let myRecipes = '';
        // If recipes have not loaded yet
        if (this.state.recipes == null) {
            return myRecipes = <Spooner />
        } else {    // As soon as recipes are loaded into state
            myRecipes = this.state.recipes.map(recipe => {
                // Variable to hold each recipes background image and CSS styling
                const recipeImg = {
                    background: `url(${recipe.src}) no-repeat center`,
                    backgroundSize: "cover"
                }
                return (
                    <li key={recipe._id} recipe_id={recipe._id}>
                        <div className="recipe-prev-card">
                            <div className="recipe-prev-img">
                                <div style={recipeImg}></div>
                            </div>
                            <div className="recipe-prev-text">
                                <h5>{recipe.title}</h5>
                                <CookCloseBtn 
                                    onOpen={this.activeRecipe} 
                                    isActive={this.state.active}/>
                                <button 
                                    onClick={() => this.completeRecipe(this.state.userId, recipe.title)}
                                    className="complete-btn">Complete 
                                    <i className="fas fa-check"></i>
                                </button>
                                <button 
                                    onClick={() => this.removeRecipe(this.state.userId, recipe.title)} 
                                    className="remove-btn">Remove 
                                    <i className="far fa-trash-alt"></i>
                                </button>
                            </div>
                            {this.state.active
                                ?
                                <RecipeInstructions
                                    showSaveBtn={false}
                                    onClose={this.activeRecipe}
                                    ingredients={recipe.ingredients}
                                    instructions={recipe.instructions} />
                                :
                                null
                            }
                        </div>
                    </li>
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