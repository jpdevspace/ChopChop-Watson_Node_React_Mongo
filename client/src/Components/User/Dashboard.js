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
        recipes: null,
    }

    componentDidMount () {
        API.getUserRecipes(this.props.userId)
            .then(response => {
                this.setState({
                    name: response.data.name,
                    recipes: response.data.recipes
                })
                console.log(response.data)
            })
            .catch(err => console.log(err))
    }

    render() {
        return (
            <div>
                {!this.state.name 
                    ? <Spooner />
                    :
                        <div>
                            <UserHeader name={this.state.name} recipesQ={this.state.recipes.length} />
                            <UserBody recipes={this.state.recipes} />
                        </div>
                }
                
            </div>
        );
    }
}

export default Dashboard;