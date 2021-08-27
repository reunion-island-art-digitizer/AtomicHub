import React from 'react'

import classes from './text.module.scss'

export const Text = (props) => {

    const { font, color, weight, padding, position, align, opacity, line, word, center, column, decor, flex, right, top, jc , bold} = props

    const f = font? font : 16
    const c = color? color : "white"
    const w = weight? weight : 600

    return (
        <p 
            {...props}
            className={classes.text}
            style={{
                fontSize: f,
                color: c,
                fontWeight: w,
                padding: padding,
                position: position,
                textAlign: align,
                opacity: opacity,
                lineHeight: line ? line: 1.5,
                wordBreak: word,
                justifyContent: jc,
                textAlign: center ? "center" : '',
                flexDirection: column ? "column" : '',
                textDecoration: decor ? "underline" : "",
                display: flex ? "inherit" : "flex",
                right: right,
                top: top,
                whiteSpace: props.nowrap ? "nowrap" : '',
            }}
        >
            {props.children}
        </p>
    )
}