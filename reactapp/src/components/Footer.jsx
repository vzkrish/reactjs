import React from 'react'
// State Less Functional Component
export const Footer =(props) =>{
    return (
    <div className="bg-success text-center">
        <h4 >
        Copyright Reserved to Krishnam Raju {props.year} 
        </h4>
    </div>
    );
}