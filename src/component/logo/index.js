import React from 'react'

import classes from './logo.module.sass'

export const Logotip = () => {
    return (
        <div style={{paddingRight: 1}}>
        <a href="https://wax.atomichub.io/">
            <img
                alt=""
                src="/image/logo.png"
                className={classes.logo}
            />
        </a>
        </div>
    )
}