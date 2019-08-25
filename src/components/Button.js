import React from 'react'

const pStyle = {
    marginBottom: '40px',
};

const Button = (props) => {

    return(
            <button class="ui primary button" onClick = {props.action} style={pStyle}>{props.buttonTitle}</button>
    )
}

export default Button