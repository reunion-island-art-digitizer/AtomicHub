import React, { useState } from 'react'

export const Span = (props) => {
    const [ status, setStatus ] = useState(false)
    const hover = props.hover
    return <span
        onMouseOver={() => setStatus(true)}
        onMouseLeave={() => setStatus(false)}
        style={{
            color: status && hover ? hover : props.color, 
            cursor: props.pointer ? "pointer" : '', 
            fontWeight: props.weight,
            fontFamily: "'Montserrat', sans-serif"
        }}
    >
        {props.children}
    </span>
}