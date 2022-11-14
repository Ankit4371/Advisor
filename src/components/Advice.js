import React, { Component } from 'react'
import axios from 'axios';

export class Advice extends Component {
    state = {
        advice: ''
    }
    componentDidMount() {
        this.fetchAdvice();
    }
    fetchAdvice = () => {
        axios.get('https://api.adviceslip.com/advice')
            .then((response) => {
                const { advice } = response.data.slip;
                console.log(advice);
                this.setState({ advice: advice });
            })
            .catch((error) => {
                console.log(error);
            });
    }
    render() {
        return (

            <div className="card">
                <h1 className="heading">
                    {this.state.advice}
                </h1>
                <button className='button' onClick={this.fetchAdvice}>
                    <span>Get Advice</span>
                </button>
            </div>

        )
    }
}

export default Advice