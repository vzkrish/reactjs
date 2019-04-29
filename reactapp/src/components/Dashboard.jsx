import React, {Component} from 'react'
import StatefulApp from "./props_states/StatefullApp"


// import {MyComponent} from './LodableComponent'
// Stateful Functional Component

export default class Dashboard extends Component{
    constructor(props){
        super(props)
        this.state={}
    }

    render() {
        return (
            <div>
                <StatefulApp/>
                <h3>Put your Business Components Tree Here</h3>
            </div>    
            
        )

    }
}