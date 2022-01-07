import React from 'react'

const StyleBtn = (props) => {
    return (
        <a href="/" className={`down-btn ${props.cName}`}>{props.linkTitle}</a>
    )
}

export default StyleBtn
