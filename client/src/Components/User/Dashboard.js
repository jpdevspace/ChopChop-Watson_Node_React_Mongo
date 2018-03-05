import React, { Component } from 'react';

// Components
import UserBody from './UserBody';
import UserHeader from './UserHeader';

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
        recipesQ: 0
    }

    componentDidMount () {
        API.getUserRecipes(this.props.userId)
            .then(response => {
                this.setState({
                    name: response.data.name,
                    userId: response.data._id,
                    recipes: response.data.recipes,
                    recipesQ: response.data.recipes.length
                })
                this.countCompletedRecipes(response.data.recipes)
            })
            .catch(err => console.log(err))
    }

    countCompletedRecipes = recipes => {
        const completedCount = recipes.filter(recipe => recipe.completed )
        this.setState({ completedQ: completedCount.length })
    }

    updateCompletedCount = () => {
        console.log("running like the wind")
        this.setState({ completedQ: this.state.completedQ + 1 })
    }

    updateRemovedRecipe = () => {
        console.log('another one bites the dust')
        this.setState({ recipesQ: this.state.recipesQ - 1 })
    }

    render() {
        return (
            <div id="dashboard-section">
                {!this.state.name 
                    ? <Spooner />
                    :
                        <div>
                            <UserHeader 
                                name={this.state.name} 
                                completedQ={this.state.completedQ } 
                                recipesQ={this.state.recipesQ} 
                            />
                            <div className="container">
                                <UserBody 
                                    userId={this.state.userId} 
                                    recipes={this.state.recipes} 
                                    onCompleteRecipe={this.updateCompletedCount} 
                                    onRemovedRecipe={this.updateRemovedRecipe}
                                />
                            </div>
                        </div>
                }
                
            </div>
        );
    }
}

export default Dashboard;