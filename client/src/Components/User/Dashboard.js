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
    }

    componentDidMount () {
        API.getUserRecipes(this.props.userId)
            .then(response => {
                this.setState({
                    name: response.data.name,
                    userId: response.data._id,
                    recipes: response.data.recipes
                })
                console.log(response.data)
            })
            .catch(err => console.log(err))
    }

    render() {
        return (
            <div id="dashboard-section">
                {!this.state.name 
                    ? <Spooner />
                    :
                        <div>
                            <UserHeader name={this.state.name} recipesQ={this.state.recipes.length} />
                            <div className="container">
                                <UserBody userId={this.state.userId} recipes={this.state.recipes} />
                            </div>
                        </div>
                }
                
            </div>
        );
    }
}

export default Dashboard;