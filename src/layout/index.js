import React , { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as waxjs from "@waxio/waxjs/dist";

import { Header } from './header'
import { Body } from './body'
import { Footer } from './footer'

import { ADD_REAUTH_DATA, LOGOUT_USER } from '../CONSTANT/redux'
import { linkWax } from '../CONSTANT/wax'

import classes from './Layout.module.sass';

export const Layout = (props) => {
    const { children } = props
    const dispatch = useDispatch()

    const tokens = useSelector((state) => state.app.user.tokens)
    const login = useSelector((state) => state.app.user.login)

    const overflow = useSelector((state) => state.size.overflow)
    const device = useSelector((state) => state.size.phone)

    useEffect(() => {
        window.addEventListener("load", function () {
            setTimeout(hideURLbar, 0);
        }, false);
        function hideURLbar() {
            window.scrollTo(0, 1);
        }
    }, [true])

    useEffect(() => {
        if(login) {
            try {
                const wax = new waxjs.WaxJS(linkWax, login, tokens);

                dispatch({
                    type: ADD_REAUTH_DATA,
                    wax: wax
                })
            } catch (e) {
                dispatch({
                    type: LOGOUT_USER,
                })
            }
           
        }
    // eslint-disable-next-line
    }, [true])

    document.getElementsByTagName("body")[0].style = `overflow: ${overflow ? 'hidden' : 'auto'}`

    return (
        <div className={classes.layout} style={{paddingRight: device === false && overflow  ? 17 : 0 }}>
            <Header overflow={overflow} device={device}/>
            <Body>
                {children}
            </Body>
            <Footer />
        </div>
    )
}