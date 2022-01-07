import React from 'react'

const TestimonialArrowControlller = (props) => {
    return (
       <a href="/" className={`px-3 py-2 ${props.cName} `}>{props.ControllerIcon}</a>
    )
}

export default TestimonialArrowControlller
