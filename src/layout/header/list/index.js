import React from 'react'
import { Link } from 'react-router-dom'

import { Text } from '../../../component/ui/text'

import classes from './list.module.sass'

export const List = () => {
    return (
        <div className={classes.conteiner}>
            <div className={classes.cont}>
                <a href="https://wax.atomichub.io/explorer">
                    <Text color={"rgba(255,255,255,.75)"} weight={700}>
                        Explorer
                    </Text>
                </a>
            </div>
            <div className={classes.cont}>
                <a href="https://wax.atomichub.io/market">
                <Text color={"white"} weight={700}>
                    Market
                </Text>
                </a>
            </div>
            <div className={classes.cont}>
                <a href="https://wax.atomichub.io/trading">
                <Text color={"rgba(255,255,255,.75)"} weight={700}>
                    Trading
                </Text>
                </a>
            </div>
            <div className={classes.cont}>
                <a href="https://wax.atomichub.io/creator">
                <Text color={"rgba(255,255,255,.75)"} weight={700}>
                    NFT Creator
                </Text>
                </a>
            </div>
        </div>
    )
}