import React, { Component } from 'react';

class RecipeInstructions extends Component {
  render() {

    const ingredient = this.props.ingredients.map(
        (value, index) => { 
            return <li key={index}>{value}</li> 
        })

    const instruction = this.props.instructions.map(
        (value, index) => { 
            return <li key={index}>{value}</li> 
        })

    return (
        <div className="modal-dialog" role="document">
            <div className="modal-content">
                <div className="modal-body">
                    <h3>Ingredients:</h3>
                    <ul>
                        {ingredient}
                    </ul>
                    <h3>Instructions:</h3>
                    <ul>
                        {instruction}
                    </ul>
                </div>
                <div className="modal-footer">
                    <button 
                        onClick={this.props.onClose} 
                        type="button" 
                        className="btn btn-secondary" 
                        data-dismiss="modal">Close</button>
                    {this.props.showSaveBtn 
                        ?
                            <button 
                            className="btn btn-info">Save Recipe 
                                <i className="far fa-bookmark"></i>
                            </button>
                        : null
                    }
                </div>
            </div>
        </div>
    );
  }
}

export default RecipeInstructions;