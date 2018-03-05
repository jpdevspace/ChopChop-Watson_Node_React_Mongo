import React from 'react';

const CookCloseBtn = props => {
    return(
        <button onClick={props.onOpen} className="btn btn-info">
            {!props.isActive ? "Cook Recipe " : "Close Recipe "}
            <i className="fas fa-utensil-spoon"></i>
        </button>
    );
}

export default CookCloseBtn