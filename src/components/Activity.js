import axios from 'axios';
import React, { Component } from 'react'

export class Activity extends Component {
    state = {
        activity: ''
    }
    componentDidMount() {
        this.fetchActivity();
    }
    fetchActivity = () => {
        axios.get('https://www.boredapi.com/api/activity')
            .then((response) => {
                console.log(response.data.activity);
                this.setState({ activity: response.data.activity });
            }).catch((error) => {
                console.log(error);
            });

    }
    render() {
        return (

            <div className="card">
                <h1 className="heading">
                    {this.state.activity}
                </h1>
                <button className='button' onClick={this.fetchActivity}>
                    <span>Get Activity</span>
                </button>
            </div>
        )
    }
}

export default Activity