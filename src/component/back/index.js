import React from 'react'
import { Link } from 'react-router-dom'

import { LeftOutlined } from '@ant-design/icons'

import { Text } from '../ui/text'

import classes from './back.module.sass'

export const Back = (props) => {
    return (
        <div className={classes.conteiner}>
            <a href={props.link}>
                <Text font={18} opacity={0.6} color={"#bfbebe"} padding={"1px 16px"} weight={"700"}>
                    <LeftOutlined style={{ fontSize: 24}} />&nbsp;{props.label}
                </Text>
            </a>
        </div>
    )
}