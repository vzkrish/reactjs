import React from 'react'

export default class CompLifeCycle extends React.Component{

    constructor(props){
        //1. Initialization Phase
        super(props);
        this.state = {
            data : 0,
            msg: 'I Have Initial Data'
        }
        this.setNewNumber = this.setNewNumber.bind(this);
        this.updateState = this.updateState.bind(this);
    }
    setNewNumber(e){
        this.setState({data: this.state.data + 1})
    }
    updateState(e){
        this.setState({msg: e.target.value})
    }  
    
    //2 Initial Render

    render(){
        return(
            <div>
                <button onClick = {(event) => {this.setNewNumber(event)}}> Increment</button>
                <Content myNumber = {this.state.data}></Content>
                <br/>
                <input type="text" value={this.state.msg} onChange={(e)=>this.updateState(e)}></input>
                <h3> { this.state.msg}</h3>
            </div>
        );
    }// Parent Component is Completed
}

class Content extends React.Component{
    constructor(props){
        super(props);
        this.state = {name:'Murthy'}
        console.log("Working in Constructor:  " +props.myNumber)
        console.log("1. Content Constuctor Fired - Initialization phase")
        this.handleScroll = this.handleScroll.bind(this);
    }
    // Register the Handler
    handleScroll()
    {
        console.log("Hanlde Scroll Executed");
    }

// This ComponentwillMount() method is invoked only once before Initial Rendering
// It is also a good place to set initial state value inside ComponentWillMount()

componentWillMount(){
    // Load data from cache (Local Storage)
    console.log("1. ComponentwillMount  " +this.props.myNumber)
}

//Import Hook fires only once
componentDidMount(){
    console.log("2. Component DID mount - reset data or reintialize data ")
    console.log("componentDidMount " +this.props.myNumber)
}

componentWillReceiveProps(nextProps)
{
    console.log("3. Set Default props Here and validate props here")
    console.log("Props in Component will receive:  " + nextProps.myNumber)    
    // The old Props can be accessed via this.props
    this.setState({
        isPassed: nextProps.myNumber >= 60
    });
}

static getDerivedStateFromProps(props, state){
    console.log("getDerivedStateFromProps")    
    console.log(state.name)
    return {}
}

shouldComponentUpdate(nextProps, nextState){
    console.log("Decide Whether to re-render or not")
    console.log(nextState)

    if(nextProps.myNumber > 3) {
        return true;
    }else{
        return false;
    }


}

componentDidUpdate(prevProps, prevState){
    console.log("7. Component DID Update, You can rollback state here to previous state")
}


componentDidCatch(err){
    console.log("Some Error has occurred.. Log it in server in mongodb")
}

componentWillUnmount(){
    console.log("9. Component will Unmount - release the resouces here or cache data")
    window.removeEventListener('scroll',this.handleScroll);
}

render(){
    return(
        <div>
            <h3> {this.props.myNumber} </h3>
        </div>
    )
}
}