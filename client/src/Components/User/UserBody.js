import React, { Component } from 'react';

// Components
import RecipeInstructions from '../Search/RecipeInstructions';
import CookCloseBtn from '../Search/CookCloseBtn';
import Spooner from '../Search/Spooner';


class UserBody extends Component {
    state = { 
        active: false,
    };
    
    // Function to open/close cooking instructions
    activeRecipe = () => this.setState({ active: !this.state.active })

    render() {
        let myRecipes = '';
        // If recipes have not loaded yet
        if (this.props.recipes == null) {
            return myRecipes = <Spooner />
        } else {    // As soon as recipes are loaded into state
            myRecipes = this.props.recipes.map(recipe => {
                // Variable to hold each recipes background image and CSS styling
                const recipeImg = {
                    background: `url(${recipe.src}) no-repeat center`,
                    backgroundSize: "cover"
                }
            
                return (
                    <div>
                        <li key={recipe._id} recipe_id={recipe._id}>
                            <div className={`recipe-prev-card
                                ${recipe.completed ? "recipe-completed" : ""} `}>
                                <div className="recipe-prev-img">
                                    <div style={recipeImg}></div>
                                </div>
                                <div className="recipe-prev-text">
                                    <h5>{recipe.title}</h5>
                                    <CookCloseBtn 
                                        onOpen={this.activeRecipe} 
                                        isActive={this.state.active}/>
                                    <button 
                                        onClick={() => this.props.onRecipeCmpl(recipe.title)}
                                        className="complete-btn">Complete 
                                        <i className="fas fa-check"></i>
                                    </button>
                                    <button 
                                        onClick={() => this.props.onRecipeRmv(recipe.title)} 
                                        className="remove-btn">Remove 
                                        <i className="far fa-trash-alt"></i>
                                    </button>
                                </div>
                                {!this.state.active ? null
                                    :
                                        <RecipeInstructions
                                            onClose={this.activeRecipe}
                                            ingredients={recipe.ingredients}
                                            instructions={recipe.instructions} />
                                }
                            </div>
                        </li>
                    </div>
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