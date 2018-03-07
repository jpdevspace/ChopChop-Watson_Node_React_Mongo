import React, { Component } from 'react';

class CreateComponent extends Component {
    state = { comment: '' }
    
    handleCommentChange = e => {
        this.setState({ comment: e.target.value })
    }

    handleSaveComment = e => {
        e.preventDefault();
        this.props.onCreateComment(this.state.comment)
    }
    
    render() {
        return(
            <div className="comment-section">
                <form>
                    <div className="form-group">
                        <textarea onChange={this.handleCommentChange} className="form-control" id="addComment" cols="10" rows="10"></textarea>
                    </div>
                    <button onClick={this.handleSaveComment} className="comment-btn">Save Comment</button>
                </form>
            </div>
        );
    }
}

export default CreateComponent;