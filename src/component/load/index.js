import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GeTMoney } from '../../store/action/auth/register'
import { ADD_MONEY, ADD_CLAIMED, OVERFLOW_AUTO } from '../../CONSTANT/redux'
import { Loading3QuartersOutlined } from '@ant-design/icons';

import { Text } from '../ui/text'
import { Span } from '../ui/span'

import classes from './load.module.sass'

export const Load = ({ status, close, re }) => {
    const [  load, setLaod ] = useState(false)
    const dispatch = useDispatch()
    const log = useSelector(state => state.app.user.login)

    useEffect(async() => {
        if(status?.status === false && typeof status === "object" && status?.err === false) {
            setTimeout(async () => {
                setLaod(true) 
            }, 10000)
            
            const money = await GeTMoney(log)
            dispatch({ type: ADD_MONEY, money: money.data.result })
            dispatch({ type: ADD_CLAIMED, claimed: "3m4cs.wam" })

        }
    },[status])

    const CLOSE = () => {
        dispatch({
            type: OVERFLOW_AUTO
        })
        close()
    }

    if(status?.status === false && typeof status === "object" && status?.err === false) {
        return (
            <div className={classes.cont_succses}>
                <div className={classes.cont_img_cont}>
                    <img alt="" src="/image/123.png"/>
                </div>
                <div>
                    <Text font={30} center weight={700}>
                        Transaction Successfull!
                    </Text>
                </div>
                <div  className={classes.text2}>
                    {
                        load ?
                        <Span>
                            <Text font={18} center weight={600} position={"relative"} flex>
                                View Transaction: <Span color="#ea923e">242f3fc5</Span>
                            </Text>
                        </Span>
                        :
                        <Span>
                            <Text font={18} center weight={600} position={"relative"} flex>
                                Executed locally. Waiting for confirmation
                                <Span><Text padding={"10px"} flex><Loading3QuartersOutlined style={{ fontSize: 24 }} spin/></Text></Span>
                            </Text>
                        </Span>
                    }
                </div>
                <div  className={classes.ok_button_cont}>
                    <div  className={classes.ok_button} onClick={() => CLOSE()}>
                        <Text font={18} center>
                            Close
                        </Text>
                    </div>
                </div>
            </div>
        )
    }


    if(status?.status === false && typeof status === "object" && status?.err === true) {
        return (
            <div className={classes.cont_err}>
                <div className={classes.cont_img_cont}>
                    <img alt="" src="/image/fail.png"/>
                </div>
                <div>
                    <Text font={30} center weight={700}>
                        Transaction Failed!
                    </Text>
                </div>
                <div  className={classes.text2}>
                    <Text font={18} center weight={600}>
                        {status.data}
                    </Text>
                </div>
                <div  className={classes.err_button_cont}>
                    <div  className={classes.err_button} onClick={() => re()}>
                        <Text font={18} center>
                            Try again
                        </Text>
                    </div>
                    <div className={classes.err_button_close} onClick={() => CLOSE()}>
                        <Text font={18} center>
                            close
                        </Text>
                    </div>
                </div>
            </div>
        )
    } 
    
    if(!!status === true && typeof status === "boolean") {
        return (
            <div className={classes.cont}>
                <div className={classes.cont_img_cont}>
                    <img alt="" src="/image/loading.gif" className={classes.cont_img}/>
                </div>
                <div className={classes.text}>
                    <Text font={30} center>
                        Creating your Transaction
                    </Text>
                </div>
                <div  className={classes.text2}>
                    <Text font={16} center weight={400}>
                        Please confirm the transaction in your Wallet.
                    </Text>
                </div>
            </div>
    
        )
    }
}