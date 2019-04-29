import React,{Component} from 'react'

export default class TextInput extends Component{
    constructor(props){
        super(props)
        this.state={inputText:'Hello Krish'}
    }

    handleChangeEvent(event){
        this.setState({
            inputText:event.target.value
        })
    }
    render(){
        return(
            <div >
            <div className="input-group mt-4">
                <input type="text" value="Uncontrolled"/>
                    <div div className="input-group mt-4"></div>
                    <input type="text" value={this.state.inputText} 
                    onChange={this.handleChangeEvent.bind(this)}/>
                    {this.state.inputText? console.log("valid"):console.log("Hey where is the data")}
                    {
                        this.state.inputText
                        ?<TextDisplay text={this.state.inputText}></TextDisplay>
                        :<TextDisplay text="Enter your Name please"></TextDisplay>
                    }
            </div>
            </div>
        );
    }
}

const TextDisplay = (props) =>{
    return (
    <div className="input-group mt-2">  <span className="input-group-text"> Welcome : {props.text} </span> </div>
    );
}    
