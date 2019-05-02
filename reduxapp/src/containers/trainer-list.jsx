import React,{Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

import{selectTrainer} from '../actions/index'

class TrainerList extends Component{
    createListItems(){
        return this.props.trainers.map((trainer) =>{
            return(
                <div>
                <h4 className="text-danger" key={trainer.id}
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
            {this.createListItems}
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
    return bindActionCreators({st:selectTrainer},dispatch;);
}

export default connect(mapStateToProps,matchDispatchToProps)(TrainerList)