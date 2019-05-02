import React,{Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

import{selectTrainer} from '../actions/index'

class TrainerList extends Component{
    createListItems(){
        console.log("My Test")
        return this.props.trainers.map( (trainer) =>{
            return(
                <div key={trainer.id}>
                <h4 className="text-danger" 
                onClick={() => this.props.st(trainer)}>
                {trainer.first} {trainer.last}
                </h4>
                </div>
            )
        })
    }
render(){
    return(
        <div>
            {this.createListItems()}
        </div>
    )
}

}

function mapStateToProps(state){
    return{
        trainers: state.trainers
    }
}

function matchDispatchToProps(dispatch){
    console.log("Step 0")
    return bindActionCreators({st:selectTrainer},dispatch);
}

export default connect(mapStateToProps,matchDispatchToProps)(TrainerList)