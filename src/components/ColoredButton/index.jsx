import React from 'react'

const ColoredButton = (props) => {
    return (
        <a href="/" className={`coloredButton mr-2 ${props.cName}`}>
            {props.Icon}<span> &nbsp;{props.linkTitle}</span>
        </a>
    )
}

export default ColoredButton
