import React, { Component } from 'react';
import { connect } from 'react-redux';

// Components 
import SearchBar from './SearchBar';
import RecipesList from './RecipesList';

class SearchMain extends Component {

    render() {
        return(
            <div>
                <h1>Cheff W</h1>
                <SearchBar onSearch={this.props.onSearch} />
                <RecipesList recipes={this.props.rcpes} />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        rcpes: state.recipes,
    }
}


export default connect(mapStateToProps)(SearchMain);