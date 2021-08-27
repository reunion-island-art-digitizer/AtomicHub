import React from 'react'

import classes from './body.module.sass'

export const Body = (props) => {
    const { children } = props
    
    return (
        <div className={classes.body}>
            <div className={classes.center}>
            {children}
            </div>
        </div>
    )
}