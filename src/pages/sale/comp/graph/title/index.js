import React from 'react'

import { Text } from '../../../../../component/ui/text'

import classes from './title.module.sass'

export const Title = ({ status, setStatus  }) => {

    const title = [
        {
            label: "Last Days"
        },
        {
            label: "Last Sales"
        }
    ]
    return (
        <div className={classes.conteiner}>
            <div className={classes.pos}>
            {
                title.map((v, i) => {
                    return (
                        <div 
                            key={i} 
                            className={classes.conteiner_title} 
                            style={{borderBottom: i === status ? "4px solid #ea923e" : "4px solid #14192e"}}
                            onClick={() => setStatus(i)}
                        >
                            <Text padding={"10px 0px 7px"}>{v.label}</Text>
                        </div>
                    )
                })
            }
            </div>
        </div>
    )
}