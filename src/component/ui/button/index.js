import React, { useState } from 'react'
import { Button } from 'antd';
import { Text } from '../text'

import { Loading3QuartersOutlined } from '@ant-design/icons';

export const ButtonPrimary = (props) => {
    const second = props.second
    const [status , setStatus ] = useState(false)


    const color = second && status ? "#fd7e14" : "#fff"

    const back = second ? "#14192e" : status && !!second === false? "#fd7e14" : "#ea923e" 

    const block = props.block ? "#A0693D" : back
    const blockColor = props.block ? "#212529" : color
    console.log(blockColor)
    return (
        <Button
            disabled={props.block}
            onMouseOver={() => setStatus(true)}
            onMouseLeave={() => setStatus(false)}
            {...props}
            style={{
                width: props.width,
                padding: props.padding ? props.padding : '8.0px 50px',
                backgroundColor: block,
                borderColor: second ? "#ea923e" : block,
                height: 'auto',
                color: color,
                borderRadius: 100,
                display: "flex",
                justifyContent: "center",
                margin: props.margin,
                borderWidth: 2
            }}
        >
            {
                props.load ? 
                    <Loading3QuartersOutlined style={{ fontSize: 24, color: blockColor }} spin />
                :
                    <Text weight={700} color={blockColor}>{props.children}</Text>
            }
        </Button>
    )
}