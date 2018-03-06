import React from 'react';

const Alert = props => {
    return(
        <div>
            <div 
                data-main={props.mainPage ? 'mainPage' : null}
                className="custom-alert alert alert-warning alert-dismissible fade show" 
                  role="alert">
                    {props.msg}
                <button 
                    type="button" 
                    className="close" 
                    data-dismiss="alert" 
                    aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
        </div>
    );
}


export default Alert;