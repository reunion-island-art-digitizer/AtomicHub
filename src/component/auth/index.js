import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as waxjs from "@waxio/waxjs/dist";

import { Card } from '../card'
import { Text } from '../ui/text'
import { TitleH1 } from '../ui/title'

import { ReactComponent as SvgWorld }from '../../svg/world.svg'
import { Loading3QuartersOutlined } from '@ant-design/icons'

import { ADD_REGISER_DATA, LOGOUT_USER, OVERFLOW_AUTO, OVERFLOW_HIDDEN } from '../../CONSTANT/redux'
import { linkWax } from '../../CONSTANT/wax'

import classes from './auth.module.scss'

export const Auth = (props) => {
    const dispatch = useDispatch()

    const [ when, setWhen] = useState(false)

    useEffect(() => {
        dispatch({
            type: OVERFLOW_HIDDEN,
        })
        setWhen(true)
    }, [true])
    
    const AnimationClose = () => {
        setWhen(false)
        window.setTimeout(() => {
            dispatch({
                type: OVERFLOW_AUTO,
            })
            props.close()
        }, 400)
    }


    const width = useSelector(state => state.size.width)
    /////////////////// Login ////////////////
    const wax = new waxjs.WaxJS(linkWax, null, null, false);

    const [ login, setLogin ] = useState(false)

    const LogIn = async (log) => {
        setLogin(true)
        if(log === false) {
            try { 
                const userAccount = await wax.login();
                dispatch({
                    type: ADD_REGISER_DATA,
                    login: userAccount,
                    tokens: wax.pubKeys,
                    wax: wax
                })
                setLogin(false)
                AnimationClose()
            } catch(e) { 
                dispatch({
                    type: LOGOUT_USER,
                })
                setLogin(false)
                AnimationClose()
            }
        } else {
            setLogin(false)
        }
       
    }
    //////////////////////////////////////////

    const CloseModal = (e) => {
        if(e.target.id === "close") {
            AnimationClose()
        }
    }

    return (
        <div className={width > 767 ? "conteiner_modal" : "conteiner_modal_mini"} id="close" onClick={e => CloseModal(e)}>
            <div className={classes.auth, when ? classes.start : classes.end}>
                <Card load width={500}>
                    <div className={classes.close}>
                        <span onClick={() => AnimationClose()} className={classes.span}><Text font={24} weight={700}>×</Text></span>
                    </div>
                    <div className={classes.content}>
                        <div style={{ marginBottom: 30}}>
                            <TitleH1 load>Choose Wallet</TitleH1>
                        </div>
                        <Text weight={400} align={"center"} padding={"0px 16px"}>
                            A wallet lets you connect your blockchain account to AtomicHub
                        </Text>
                        <div className={classes.auth_button} onClick={() => LogIn(login)}>
                            <div className={classes.auth_button_name}>
                                <Text>
                                    {
                                        login ? "Cancel Login" : "WAX Cloud Wallet"
                                    }
                                    &nbsp;
                                    {
                                        login ? <Loading3QuartersOutlined style={{ fontSize: 18, color: 'white' }} spin /> : null
                                    }
                                </Text>
                            </div>
                            <div className={classes.auth_button_icon}>
                                <SvgWorld fill="white" height={16} width={16}/> 
                            </div>
                        </div>
                        <Text font={11} weight={300}>
                            ⓘ Recommended for new users
                        </Text>
                        <div className={classes.auth_button} onClick={() => LogIn()}
                            style={{backgroundColor: 'rgb(104, 130, 212)', borderColor: "rgb(104, 130, 212)"}}
                        >
                            <div className={classes.auth_button_name}
                                style={{backgroundColor: "rgb(54, 80, 162)"}}
                            >
                                <Text>
                                    Anchor
                                </Text>
                            </div>
                            <div className={classes.auth_button_icon}
                                style={{backgroundColor: "rgb(54, 80, 162)"}}
                            >
                                <SvgWorld fill="white" height={16} width={16}/> 
                            </div>
                        </div>
                        <div className={classes.auth_button} onClick={() => LogIn()}
                            style={{backgroundColor: 'rgb(57, 190, 255)', borderColor: "rgb(57, 190, 255)"}}
                        >   
                            <div className={classes.auth_button_name}
                                style={{backgroundColor: "rgb(7, 140, 233)"}}
                            >
                                <Text color={"#595959"}>
                                    Scatter
                                </Text>
                            </div>
                            <div className={classes.auth_button_icon}
                                style={{backgroundColor: "rgb(7, 140, 233)"}}
                            >
                                <SvgWorld fill="white" height={16} width={16}/> 
                            </div>
                        </div>
                    </div>
                </Card>
            </div>
        </div>
    )
}