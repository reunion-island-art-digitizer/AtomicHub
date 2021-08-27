import React from 'react'

import { Promo } from './promo'
import { Desc } from './description'
import { Attributes } from './attributes'

import classes from './asset.module.sass'

export const Asset = ({ data }) => {
    return (
        <>
        <div className={classes.conteiner}>
            <Promo promo={data.promo}/>
            <Desc desc={data.desc}/>
        </div>
        <div className={classes.conteiner2}>
            <Attributes desc={data.attr}/>
        </div>
        </>
    )
}