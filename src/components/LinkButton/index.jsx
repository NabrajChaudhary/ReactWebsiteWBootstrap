import React from 'react'

const LinkButton = (props) => {
    return (
        <a href="/" className={`normal-button mx-1 ${props.cName}`}>{props.btnTitle}</a>
    )
}

export default LinkButton
