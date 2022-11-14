import React, { Component } from 'react'
import './App.css';
import Activity from './components/Activity';
import { Advice } from './components/Advice';
import MathFacts from './components/MathFacts';



export class App extends Component {

    render() {
        return (
            <div className='app'>
                <Advice></Advice>
                <Activity></Activity>
                <MathFacts></MathFacts>
            </div>
        )
    }
}

export default App