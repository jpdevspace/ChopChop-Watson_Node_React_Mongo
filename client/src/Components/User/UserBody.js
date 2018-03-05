import React, { Component } from 'react';

// Components
import RecipeInstructions from '../Search/RecipeInstructions';
import CookCloseBtn from '../Search/CookCloseBtn';

class UserBody extends Component {
    state = { 
        active: false,
        alert: null
    };

    activeRecipe = () => {
        this.setState({ active: !this.state.active })
    }
 
    render() {


        const myRecipes = this.props.recipes.map(recipe => {
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
                            <CookCloseBtn onOpen={this.activeRecipe} isActive={this.state.active}/>
                            <button className="remove-btn">Remove &times;</button>
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
    
        return (
            <div>
                <h2>My Saved Recipes:</h2>
                <ul>{myRecipes}</ul>
            </div>
        );
    }
    
}

export default UserBody;