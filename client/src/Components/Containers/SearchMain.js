import React, { Component } from 'react';
import { connect } from 'react-redux';

// Components 
import SearchBar from '../Search/SearchBar';
import RecipesList from '../Search/RecipesList';

class SearchMain extends Component {

    render() {
        return(
            <div id="main-search">
                <h1>Cheff W</h1>
                <SearchBar onSearch={this.props.onSearch} />
                <RecipesList 
                    isAuthed={this.props.isAuthed} 
                    authedUser={this.props.authedUser}
                    recipes={this.props.rcpes} />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        rcpes: state.searchReducer.recipes,
        // Boolean to check if user is authenticated or not
        isAuthed: state.authReducer.token !== null,
        authedUser: state.authReducer.userId
    }
}


export default connect(mapStateToProps)(SearchMain);