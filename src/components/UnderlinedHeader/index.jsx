import React from 'react'

const UnderlinedHeader = (props) => {
    return (
        <div className={`underlinedHeader ${props.cName}`}>
            <h2>{props.HeaderTitle}</h2>
        </div>
    )
}

export default UnderlinedHeader
