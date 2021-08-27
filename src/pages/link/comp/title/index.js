import React from 'react'

import { TitleH1 } from '../../../../component/ui/title'

import classes from './title.module.sass'

export const TitleComp = (props) => {
    return (
        <div className={classes.content}>
            <TitleH1>
                {props.children}
            </TitleH1>
        </div>
    )
}