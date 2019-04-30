import React, { Component } from 'react';

export default class CarsDetails extends Component{
    // Params is a built in property of router
    componentDidMount(){
        const{match:{params}} = this.props;
        alert("Details of car for ID: " + this.props.match.params.carId)
    }

    render() {
        return (
          <div>
           <h1>Display the car Details after making ajax calls </h1>
          </div>
        );
      }

}