import React, {Component} from 'react'
import StatefulApp from "./props_states/StatefullApp"
import Textinput from "./props_states/Textinput"
import ChildParentinvoke from "./parent-child/ChildParentinvoke"
import RefsDemo from "./parent-child/RefsDemo"


// import {MyComponent} from './LodableComponent'
// Stateful Functional Component

export default class Dashboard extends Component{
    constructor(props){
        super(props)
        this.state={}
    }

    render() {
        return (
            <form>
            <div className="container" >
                {/* <StatefulApp/> */}
                {/* <h3>Put your Business Components Tree Here</h3> */}
                {/* <Textinput className="input-group"/>
                <ChildParentinvoke></ChildParentinvoke> */}
                <RefsDemo></RefsDemo> 
                
                
                </div>    
            </form>
        )

    }
}