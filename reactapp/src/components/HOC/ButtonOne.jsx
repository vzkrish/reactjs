import React from 'react';
import stylesWrapper from './../HOC/StylesWrapper';

const ButtonOne = (props) => {
    return( <button style={props.styles}> Click Me</button>)
}

export default stylesWrapper(ButtonOne);