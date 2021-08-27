import React from 'react'

import classes from './title.module.sass'

export const TitleCard = (props) => {
    return (
        <div className={classes.card}>
            {props.children}
        </div>
    )
}