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
            <div className="recipe-details">
                <div className="modal-content">
                    <div className="modal-body">
                        <h3 className="modal-title">Ingredients:</h3>
                        <ul>
                            {ingredient}
                        </ul>
                        <h3 className="modal-title">Instructions:</h3>
                        <ul>
                            {instruction}
                        </ul>
                    </div>
                    <button 
                        onClick={this.props.onClose} 
                        type="button" 
                        className="btn btn-secondary" 
                        data-dismiss="modal">Close</button>
                </div>
            </div>
        );
  }
}

export default RecipeInstructions;