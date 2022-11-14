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
        axios.get('https://ron-swanson-quotes.herokuapp.com/v2/quotes')
            .then((response) => {
                console.log(response.data[0]);
                this.setState({ advice: response.data[0] });
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