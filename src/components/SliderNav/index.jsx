import React from 'react'

const SliderNav = (props) => {
    return (
    <a href="/" className={`p-2 ${props.cName}`}>{props.SliderTitle}</a>
    )
}

export default SliderNav
