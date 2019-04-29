import React from 'react';

export const Header =(props)=> {
    return (
        <div>
            <h2 className = "text-info text-center">
                {props.title}
            </h2>
        </div>    
    );
}

//Specifies the default valule of the props:

Header.defaultProps = {
    title: 'Welcome to Krish React Project'
}