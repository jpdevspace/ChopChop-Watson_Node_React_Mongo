import React, { Component } from 'react';

class Recipe extends Component {
  render() {

    return (
        // <div className="card">
        //     <h3>{this.props.title}</h3>
        //     <img src={this.props.image} alt="recipe" />
        //     <h3>Ingredients:</h3><ul>{this.props.ingredients.map((value, index) => { return <li key={index}>{value}</li> })}</ul>
        //     <h3>Instructions:</h3><ul>{this.props.instructions.map((value, index) => { return <li key={index}>{value}</li> })}</ul>
            
            <div className="modal fade" id="recipe-modal" tabIndex="-1" role="dialog" aria-labelledby="recipe-modalTitle" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="recipe-modalTitle">{this.props.title}</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <img src={this.props.image} alt="recipe" />
                            <h3>Ingredients:</h3><ul>{this.props.ingredients.map((value, index) => { return <li key={index}>{value}</li> })}</ul>
                            <h3>Instructions:</h3><ul>{this.props.instructions.map((value, index) => { return <li key={index}>{value}</li> })}</ul>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button className="btn btn-info">Save Recipe <i className="far fa-bookmark"></i></button>
                        </div>
                    </div>
                </div>
            </div>
        // </div>
    );
  }
}

export default Recipe;