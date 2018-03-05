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
            return (
                <li key={recipe._id} recipe_id={recipe._id}>
                    <h3>{recipe.title}</h3>
                    <CookCloseBtn onOpen={this.activeRecipe} isActive={this.state.active}/>
                    <img src={recipe.src} alt="recipe" />
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