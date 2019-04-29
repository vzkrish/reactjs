import React, {Fragment} from 'react'; 
import AddColorForm from './AddColorForm';


export default class RefsDemo extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            data : 'Hello'
        }

        this.updateState = this.updateState.bind(this);
        this.clearInput = this.clearInput.bind(this);
    }

    updateState(e)
    {
        this.setState({data : e.target.value})
    }

    clearInput(){
        this.setState({data:''});
        alert(this.refs.krishInput.value)
        this.refs.krishInput.focus()
    }

    render(){
        return(
            <div >
            <div className="input-group mt-4">
            <input type="text" value={this.state.inputText} 
                    ref="krishInput" id="txt1"
                    onChange={this.updateState}/>
              <button  className="btn-primary"  onClick={this.clearInput} >clear</button>
                <h4>{this.state.data}</h4>
                    <AddColorForm></AddColorForm>
             </div>       
             </div>
        )
    }
}