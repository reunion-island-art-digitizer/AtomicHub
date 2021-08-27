import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'

import { Logotip } from '../../component/logo'
import { ButtonPrimary } from '../../component/ui/button'
import { Auth } from '../../component/auth'
import { User } from '../../component/user'

import { Wax } from './wax'
import { Search } from './search'
import { List } from './list'

import { ReactComponent as SvgMenu }from '../../svg/menu.svg'

import classes from './header.module.sass'

export const Header = ({ overflow, device }) => {
    const [ status, setStatus ] = useState(false)
    const [ menu, setMenu ] = useState(false)

    const userName = useSelector(state => state.app.user.login) 
    const monets = useSelector(state => state.app.user.monets)

    const width = useSelector(state => state.size.width)
    
    useEffect(() => {
        if(width >= 1200) setMenu(true)
    }, [width])
    
    return (
        <div className={classes.header_layout}  style={{paddingRight: device === false && overflow  ? 33 : 16 }}>
            {
                status ? <Auth close={() => setStatus(!status)}/> : null
            }
            <div className={classes.header_content}>
                <div  className={classes.header_logo}>
                    <div className={classes.header_logo_cont}>
                        <Logotip />
                    </div>
                    
                    {
                        width < 1200 ?
                            <div className={classes.menu} onClick={() => setMenu(!menu)}>
                                <SvgMenu fill="rgba(255,255,255,.5)" width={25} height={25}/>
                            </div>
                        : null
                    }
                </div>
                {
                    menu ?
                    <div className={classes.content_button}>
                        <List />
                        <Search />

                        <div className={classes.wax}>
                            <Wax />
                            <div className={classes.content_bell}>
                                <ButtonPrimary padding="5px 1px">
                                    <img alt="" src="/image/bell.png" style={{width: 17, margin: '8px 12px' }}/>
                                </ButtonPrimary>
                            </div>
                        </div>
                       
                        {
                            userName ? 
                                <User userName={userName} monets={monets}/>
                            :
                            <div style={{paddingLeft: 15, paddingTop: 10, paddingBottom: 10}}>
                                <ButtonPrimary onClick={() => setStatus(!status)}>
                                    Login
                                </ButtonPrimary>
                            </div>
                        }
                    </div>
                    : null
                }
            </div>
        </div>
    )
}