import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Card } from '../card'
import { Text } from '../ui/text'

import { OVERFLOW_HIDDEN, OVERFLOW_AUTO } from '../../CONSTANT/redux'

import classes from './modal.module.scss'

export const Modal = (props) => {
    const ixs = props.ixs
    const dispatch = useDispatch()
    const device = useSelector(state => state.size.phone)
    
    const [ when, setWhen] = useState(false)

    useEffect(() => {    
        dispatch({
            type: OVERFLOW_HIDDEN
        })

        setWhen(true)
    }, [true])

    const AnimationClose = () => {
        setWhen(false)

        window.setTimeout(() => {
            dispatch({
                type: OVERFLOW_AUTO
            })
            props.close()
        }, 400)
    }


    const CloseModal = (e) => {
        if(e.target.id === "close") {
            AnimationClose()
        }
    }
    console.log(device)
    return (
        <div className={device ? "conteiner_modal_mini" : "conteiner_modal"} id="close" onClick={e => CloseModal(e)}> 
            <div 
                className={classes.auth, when ? classes.start : classes.end}
                style={{
                    paddingRight: device ? 0 : 17
                }}
            >
                <Card  width={props.max} load>
                    {
                        ixs ? null :
                        <div className={classes.close_cont}>
                            <span onClick={() => AnimationClose()} className={classes.span}><Text font={24} weight={700}>×</Text></span>
                        </div>
                    }
                    {props.children}
                </Card>
            </div>
        </div>
    )
}