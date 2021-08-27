import React from 'react'
import { useSelector } from 'react-redux'

import { Text } from '../../../../component/ui/text'
import { Tabs } from '../../../../component/tabs'

import classes from './logs.module.sass'

export const Logs = ({ dataSource }) => {
    const width = useSelector(state => state.size.width)
    return (
        <div className={classes.conteiner}>
            <Text padding={"48px 0px 30px 0px"} font={width > 767 ? 36 : 24} weight={800}>
                Sale Logs
            </Text>
            <Tabs dataSource={dataSource}/>
        </div>
    )
}