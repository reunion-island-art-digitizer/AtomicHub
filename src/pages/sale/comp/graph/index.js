import React, { useState, useEffect }  from 'react'
import { Skeleton } from 'antd';

import { Title } from './title'
import { Victory } from './victory'
import { Victory2 } from './victory2'
import classes from './graph.module.sass'

export const Graph = ({ dataSource }) => {
    const [ status, setStatus ] = useState(0)
    const [ load, setLoad ] = useState(false)

    useEffect(() => {
        setLoad(true)
        window.setTimeout(() => {
            setLoad(false)
        }, 250)
    }, [status])

    return (
        <div className={classes.conteiner}>
            <Title status={status} setStatus={setStatus}/>
            {
                load ? 
                <div className={classes.loader}>
                    <Skeleton.Input className={classes.cover} style={{  width: 1100 , borderRadius: 20, backgroundColor: "#14192e", marginTop: 20 }} active={true} size={360}/>
                </div>
                :
                    status === 0 ? <Victory dataSource={dataSource}/> : <Victory2 dataSource={dataSource}/>
            }
        </div>
    )
}