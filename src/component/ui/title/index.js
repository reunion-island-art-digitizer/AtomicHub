import React, { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import { Skeleton } from 'antd';

import classes from './title.module.sass'

export const TitleH1 = (props) => {
    const [ width, setWidth ] = useState(0)
    const [ load, setLoad ] = useState(props.load ? true : false)
    const w = useSelector(state => state.size.width)
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

    const size = w > 767 ? w / 3 : w / 2

    return <h1  ref={ref} className={classes.title} style={{ textAlign: props.center ? "center" : ""}}>
        {
            load === false ?
            <Skeleton.Input
            style={{ 
                width: width / 2 < 300 ? size :  width / 2 ,
                height: w > 767 ? 50 : 25,
                borderRadius: 20, 
                backgroundColor: "#14192e", 
                marginTop: 10,
            }} 
                active={true}
            />
            : props.children
        }
    </h1>
}