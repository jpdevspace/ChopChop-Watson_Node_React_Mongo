import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

// Components
import UserBody from './UserBody';
import UserHeader from './UserHeader';
import Alert from '../Alert';

// Component
import Spooner from '../Search/Spooner';

// Axios
import API from '../../utils/API';

class Dashboard extends Component {
    state = {
        name: null,
        userId: null,
        recipes: null,
        completedQ: 0,
        recipesQ: 0,
        alert: null
    }

    componentDidMount () {
        // When the component mounts, get all this user's specific recipes
        API.getUserRecipes(this.props.userId)
            .then(response => {
                // Count how many are marked as completed 
                const completedCount = response.data.recipes.filter(recipe => recipe.completed )
                this.setState({
                    name: response.data.name,
                    userId: response.data._id,
                    recipes: response.data.recipes,
                    recipesQ: response.data.recipes.length,
                    completedQ: completedCount.length,
                    
                    alert: `Welcome back ${response.data.name}!`
                })
                this.clearAlert();
            })
            .catch(err => console.log(err))
    }

    // Function to handle recipes marked as completed
    handleRecipeCmpl = (recipeTitle) => {
        const userId = this.state.userId
        const recipeInfo = { userId, recipeTitle };
        // Generate request to backend
        API.completeRecipe(recipeInfo)
            // Update recipes completed count and list of recipes state with the response from MongoDB
            .then(response => { 
                this.setState({ 
                    recipes: response.data.recipes, 
                    completedQ: this.state.completedQ + 1,
                    alert: 'Recipe completed. Congratulations!'
                })
                this.clearAlert();

            })
            .catch(err => console.log(err))
    }

    // Function to handle recipes removals from user dashboard
    handleRecipeRmv = (recipeTitle) => {
        const userId = this.state.userId
        const recipeInfo = { userId, recipeTitle };
        // Generate request to backend
        API.removeRecipe(recipeInfo)
            .then(response => {
                // Update my state to filter out the removed recipe using the recipeTitle
                const newRecipeList = this.state.recipes.filter(recipe => recipe.title !== recipeTitle );
                this.setState({ 
                    recipes: newRecipeList,
                    recipesQ: this.state.recipesQ - 1, 
                    alert: 'Recipe removed'
                });
                this.clearAlert();
            })
            .catch(err => console.log(err))
    }

    // Clear alert after 3 secs
    clearAlert = () => setTimeout(() => this.setState({alert: null}), 3000)

    render() {
        // Check if user is already authenticated
        let authRedirect = null;
        if (this.props.userId === null) {
            authRedirect = <Redirect to="/signin" />
        }

        return (
            <div id="dashboard-section">
                {this.state.alert ? <Alert mainPage={false} msg={this.state.alert} /> : null }
                {!this.state.name 
                    ? <span>{authRedirect}<Spooner /></span>
                    :
                        <div>
                            
                            <UserHeader 
                                name={this.state.name} 
                                completedQ={this.state.completedQ } 
                                recipesQ={this.state.recipesQ} 
                            />
                            <div className="container">
                                <UserBody 
                                    recipes={this.state.recipes} 
                                    userId={this.state.userId}
                                    onCompleteRecipe={this.updateCompletedCount}
                                    onRecipeRmv={this.handleRecipeRmv}
                                    onRecipeCmpl={this.handleRecipeCmpl}
                                />
                            </div>
                        </div>
                }
            </div>
        );
    }
}

export default Dashboard;