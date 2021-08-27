import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import classes from './user.module.sass'

import { Text } from '../ui/text'
import { Span } from '../ui/span'
import { Card } from '../card'

import { BuyWax } from './buywax'

import { LOGOUT_USER } from '../../CONSTANT/redux'
import { ReactComponent as SvgDown }from '../../svg/drop.svg'

import { ReactComponent as SvgPlus }from '../../svg/plus.svg'

export const User = (props) => {
    const { userName, monets } = props
    const img = "/image/1.png"

    const width = useSelector(state => state.size.width)

    const dispatch = useDispatch()

    const [ info, setWaxInfo ] = useState(false)

    const [ status, setStatus ] = useState(false)
    const [ over, setOver ] = useState(false)

    const Logout = () => {
        dispatch({
            type: LOGOUT_USER
        })
    }

    useEffect(() => {
        if(over === false && status) {
            const Leave = () => {
                    setStatus(false)
                    window.removeEventListener("click", Leave)
            }
            window.addEventListener("click", Leave)
                
        }
    // eslint-disable-next-line
    }, [over])

    return (
        <div style={{paddingBottom: 3, paddingRight: width > 1200 ? 0 : 15,}}>
            <div style={{cursor: 'pointer', position: 'relative',  marginTop: width > 1200 ? 0 : 10, paddingLeft: 7, paddingRight: 2}}  id="drop_menu"
                onMouseOver={() => setOver(true)}
                onMouseLeave={() => setOver(false)}
            >
                <div>
                    <Text onClick={() => setStatus(!status)}>
                        <div style={{height: '100%', display: 'flex', alignItems: 'flex-start', paddingTop: 4}}>
                            &nbsp;
                            <div className={classes.img_cont}>
                                <img alt="" src={img} className={classes.img}/>&nbsp;
                            </div>
                            <div style={{ paddingTop: 3, paddingLeft: 2.5}}>
                                <Text padding={"2px px 0px 3px"} position="relative">
                                    {userName}
                                    <div style={{ position: "absolute", right: -20, top: -1 }}>
                                        <SvgDown width={22} height={22} fill={"white"}/>
                                    </div>
                                </Text>
                            </div>
                        </div>
                    </Text>
                </div>
                    {
                        status ?
                        <div className={classes.drop}>
                            <Card load>
                                <div  className={classes.drop_cont}>
                                    <div className={classes.logout_cont}>
                                        <a href={`https://wax.atomichub.io/profile/${userName}#auctions`}>
                                        <Text weight={500} line={"5px"}>
                                            <img alt="" src={"/image/inventory.png"} className={classes.img_drop}/>
                                            &nbsp;&nbsp;Inventory
                                        </Text>
                                        </a>
                                    </div>
                                    <div className={classes.logout_cont}>
                                        <a href={`https://wax.atomichub.io/profile/${userName}#listings`}>
                                        <Text weight={500} onClick={() => Logout()} line={"5px"}>
                                            <img alt="" src={"/image/offer.png"} className={classes.img_drop}/>
                                            &nbsp;&nbsp;My Listing
                                        </Text>
                                        </a>
                                    </div>
                                    <div className={classes.logout_cont}>
                                        <a href={`https://wax.atomichub.io/profile/${userName}#auctions`}>
                                        <Text weight={500} onClick={() => Logout()} line={"5px"}>
                                            <img alt="" src={"/image/auc.png"} className={classes.img_drop}/>
                                            &nbsp;&nbsp;My Auctions
                                        </Text>
                                        </a>
                                    </div>
                                    <div className={classes.logout_cont}>
                                        <Text weight={500} onClick={() => Logout()} line={"5px"}>
                                            <img alt="" src={"/image/logout.png"} className={classes.img_drop}/>
                                            &nbsp;&nbsp;Logout
                                        </Text>
                                    </div>
                                </div>
                            </Card>
                        </div>
                        : null
                    }
                
            </div>
            <div style={{display: "flex", width: "100%", marginBottom: 2, marginTop: 1, paddingLeft: 12, justifyContent: 'center', }}>
                <Text font={12} weight={700}>
                    <Span color={"#42ba67"}>{monets} WAX</Span>&nbsp;&nbsp;
                    <Span color={"white"} pointer><SvgPlus onClick={() => setWaxInfo(true)} fill="white" width={9} height={9}/></Span>
                </Text>
                {
                    info ? <BuyWax close={() => setWaxInfo(false)} /> : null
                }
            </div>
        </div>
    )
}