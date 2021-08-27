import React, { useEffect, useRef, useState } from 'react'
import { Skeleton } from 'antd';

import classes from './card.module.sass'

export const Card = (props) => {
    const [ width, setWidth ] = useState(0)
    const [ load, setLoad ] = useState(props.load ? true : false)

    const ref = useRef(null);

    useEffect(() => {
        const width = ref.current ? ref.current.offsetWidth : 0;
        setWidth(width);
    }, [ref.current]);

    useEffect(() => {
        setTimeout(() => {
            setLoad(true)
        }, [1000])
    }, [true]);

    return (

        <div
            {...props}  
            ref={ref}
            style={{maxWidth: props.width, height: load ? "" : props.height}} 
            className={load ? classes.card : classes.load, props.grad && !!load ? classes.back1 : classes.back2 }
        >
            {
                load === false ?
                <Skeleton.Input
                    style={{ 
                        width: width ,
                        height:  props.height ? props.height : 300,
                        borderRadius: 20, 
                        backgroundColor: "#14192e", 
                        position: "absolute",
                        top: 0
                    }} 
                    active={true}
                />
                : props.children
            }
        </div>

    )
}