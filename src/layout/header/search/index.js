import React, { useState, useEffect } from 'react'
import { Input } from 'antd'

import { ButtonPrimary } from '../../../component/ui/button'
import { ReactComponent as SvgS }from '../../../svg/s.svg'

import classes from './search.module.sass'

export const Search = () => {
    const [ status , setStatus ] = useState(false)
    const [ over, setOver ] = useState(false)

    useEffect(() => {
        if(over === false && status) {
            const Leave = () => {
                    window.removeEventListener("click", Leave)
                    setStatus(false)
            }
            window.addEventListener("click", Leave)
                
        }
    // eslint-disable-next-line
    }, [over])

    return (
        <div className={classes.conteiner}
            style={{boxShadow: status? "0 0 0 0.2rem rgba(204, 130, 59 , 50%)" : ""}}
        >
            <Input
                onMouseLeave={() => setOver(false)}
                onMouseOver={() => setOver(true)}
                onClick={() => setStatus(true)}
                onChange={() => null}
                style={{color: "white", fontFamily: "'Montserrat', sans-serif", fontSize: 16, borderRadius: 15, opacity: status ? 1 : 0.5 }} 
                className={classes.input} 
                placeholder="Search..." 
                bordered={false}
            />
            <div className={classes.conteiner_b}>
                <ButtonPrimary padding="5px 1px">
                    <SvgS width={17} height={17} fill={"white"} style={{margin: '8px 12px' }}/>
                </ButtonPrimary>
            </div>
        </div>
    )
}