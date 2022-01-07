import React from 'react'

const LinedHeader = (props) => {
    return (
        <div className={`lineFixed ${props.cName}`}>
             <h4>{props.lineHeaderText}</h4>
            
        </div>
    )
}

export default LinedHeader