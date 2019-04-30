import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import {Data} from "./Data"

export default class Cars extends Component {
    constructor(props){
        super(props)
        this.state={cars:Data};
    }

    render(){        
        // Map through cars and return linked cars
        const carNode = this.state.cars.map((car) => {
            return (
                <div>
                <img src={car.media} width="100"/>
                <Link className="nav"
                    to={"/carDetails/"+car.id}
                     key={car.id}>
                    {car.name} - {car.model} - ( {car.price})
                </Link>
                </div>                
            )
        });
        return (
            <div>
                <h1>Choose your favorite Car</h1>
                <div className="list-group">
                    {carNode}
                </div>
            </div>
        );
    }
}
