import React, { Component } from 'react';

class SearchForm extends Component {
    state = { query: '' }

    render() {
        return (
            <div className="form-group">
                <input
                    onChange={event => this.setState({ ingredient: event.target.value })}
                    type="text"
                    className="form-control"
                    placeholder="Look for chicken, pasta, beef or fish recipes"
                />
                <button
                    onClick={() => this.props.onSearch(this.state.ingredient)}
                    type="submit"
                    className="btn btn-primary mt-3">
                    Listen
        </button>
            </div>
        );
    }
}

export default SearchForm;