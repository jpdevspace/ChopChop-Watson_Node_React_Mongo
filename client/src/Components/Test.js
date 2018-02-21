import React, { Component } from 'react';

class Test extends Component {

    speech() {
        window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

        const recognition = new window.SpeechRecognition();
        recognition.interimResults = true;

        recognition.addEventListener('result', event => console.log(event))
        recognition.start();
    }

    render() {


        return (
            <div className="container mt-3">
                <div className="card text-white bg-info mb-3">
                    <div className="card-header">Test</div>
                    <div className="card-body">
                        <h5 className="card-title">Info card title</h5>
                        <p className="card-text">
                            <button onClick={this.speech} className="btn btn-light">Start</button>
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Test;