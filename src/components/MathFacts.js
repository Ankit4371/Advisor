import axios from 'axios';
import React, { Component } from 'react'

export class MathFacts extends Component {
    state = {
        mathFact: ''
    }
    componentDidMount() {
        this.fetchMatchFacts();
    }
    fetchMatchFacts = () => {
        axios.get('http://numbersapi.com/random/math')
            .then((response) => {
                console.log(response.data);
                this.setState({ mathFact: response.data });
            })
            .catch((error) => {
                console.log(error);
            });
    };
    render() {
        return (
            <div className="card">
                <h1 className="heading">
                    {this.state.mathFact}
                </h1>
                <button className='button' onClick={this.fetchMatchFacts}>
                    <span>Get Math Facts</span>
                </button>
            </div>
        )
    }
}
export default MathFacts