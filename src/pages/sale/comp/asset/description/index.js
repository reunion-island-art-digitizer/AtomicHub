import React, { useState } from 'react'
import { useSelector } from 'react-redux'

import { ReactComponent as SvgTele }from '../../../../../svg/telegram.svg'
import { ReactComponent as SvgTwiter }from '../../../../../svg/twitter.svg'
import { ReactComponent as SvgLink }from '../../../../../svg/link.svg'
import { ReactComponent as SvgOk }from '../../../../../svg/ok.svg'

import { Card } from '../../../../../component/card'
import { Text } from '../../../../../component/ui/text'
import { Span } from '../../../../../component/ui/span'
import { Modal } from '../../../../../component/modal'
import { Load } from '../../../../../component/load'
import { Auth } from '../../../../../component/auth'
import { change } from '../../../../../lib/buy'

import { Buy } from './buy'

import { ButtonPrimary } from '../../../../../component/ui/button'

import classes from './desc.module.sass'

export const Desc = (props) => {
    const {
        id,
        asset,
        collection,
        schema,
        mint,
        maxMint,
        fire,
        owner,
        token,
        templateID,
        seller,
        offerId,
        price,
        dollar,
        temp,
        number,
    } = props.desc

    const [ status, setStatus ] = useState(false)
    const [ auth, setAuth ] = useState(false)
    const color = "#ea923e"

    const userName = useSelector(state => state.app.user.login) 
    const monets = useSelector(state => state.app.user.monets)

    const width = useSelector(state => state.size.width)

    const wax = useSelector(state => state.app.user.wax)
    const [ load, setLoad ] = useState(false)

    const AuthLoad = () => {
        setStatus(false)
        setAuth(true)
    }

    const Buyers = async () => {
        setStatus(false)
        setLoad(true)

        const res = await change(wax, monets, userName, price)
        if(res.status) {
            setStatus(true)
        } else {
            setLoad(res)    
        }
    }
    
    return (
        <div className={classes.conteiner}>
            {
                auth ? <Auth close={() => setAuth(false)}/> : null
            }
            {
                load ? <Modal max={500} close={() => setLoad(false)} ixs>
                    <Load status={load} close={() => setLoad(false)} re={() => Buyers()}/>
                </Modal>
                : null
            }
            <Card  height={525}>
                <div style={{ padding: width > 767 ? "30px 5px 35px 40px" : "30px 40px 35px 40px"}}>
                    <div className={classes.conteiner_desc}>
                        <div className={classes.conteiner_cont} style={{padding: "0px 0px 0px 0px"}}>
                            <Text color={"#bfbebe"} font={10} opacity={0.6} weight={400}>
                                Asset Name
                            </Text>
                            <Text font={ width > 572 ? 30 : 24} weight={700} line={"45px"}>
                                {asset}
                            </Text>
                            <Text color={"#bfbebe"} font={10} opacity={0.6} weight={400} padding={"7px 0px 0px 0px"}>
                                ID
                            </Text>
                            <a href={`https://wax.atomichub.io/explorer/asset/${number}`}>
                            <Text font={18} weight={700} line={"26px"} padding={"0px 0px 9px 0px"}>
                                #{number}
                            </Text>
                            </a>
                            <Text color={"#bfbebe"} font={10} opacity={0.6} weight={400}>
                                Owner
                            </Text>
                            <Text font={18} weight={700} line={"26px"} padding={"0px 0px 9px 0px"}>
                                <a href={`https://wax.atomichub.io/explorer/account/${owner}`}>
                                    <Span color={color}>{owner}</Span>
                                </a>
                            </Text>
                            <Text color={"#bfbebe"} font={10} opacity={0.6} weight={400}>
                                Mint number
                            </Text>
                            <Text font={18} weight={700} line={"26px"} padding={"0px 0px 9px 0px"}>
                                <Text font={18} weight={600}>
                                    <Span color={color}>{mint}&nbsp;</Span>
                                </Text>
                                    of&nbsp;
                                <Text font={18} weight={600}>
                                    {maxMint}&nbsp;
                                </Text>
                                <Text font={18} weight={400}>
                                    (max: ?)&nbsp; - &nbsp; 
                                </Text>
                                <Text font={18} weight={400} position={"relative"}>
                                    {fire}🔥<img alt="" style={{width: 20, position: "absolute", right: -20, top: 1}}/>
                                </Text>
                            </Text>    
                            <Text color={"#bfbebe"} font={10} opacity={0.6} weight={400}>
                                Backed Tokens
                            </Text>
                            <Text font={18} weight={700} line={"26px"} padding={"0px 0px 9px 0px"}>
                                {token}
                            </Text>
                        </div>
                        <div className={classes.conteiner_cont} style={{paddingLeft: width > 572 ? 15 : 0, width: width > 572 ?"53%" : "100%"}}>
                            <Text color={"#bfbebe"} font={10} opacity={0.6} weight={400}>
                                Collection Name
                            </Text>
                            <Text font={18} weight={700} line={"35px"} padding={"0px 0px 4px 0px"}>
                                <a href={`https://wax.atomichub.io/explorer/collection/${collection}`}>
                                    <Span color={color} hover={"#fd7e14"}>{collection}&nbsp;</Span>
                                </a>
                                    <Text>
                                        <SvgOk fill={color} height={20} width={15}/>
                                    </Text>
                                
                            </Text>
                            <Text color={"#bfbebe"} font={10} opacity={0.6} weight={400}>
                                Schema Name
                            </Text>
                            <Text font={18} weight={700} line={"35px"} padding={"0px 0px 4px 0px"}>
                                <a href={`https://wax.atomichub.io/explorer/schema/${collection}/${schema}`}>
                                    <Span color={color}>{schema}</Span>
                                </a>
                            </Text>
                            <Text color={"#bfbebe"} font={10} opacity={0.6} weight={400}>
                                Template ID
                            </Text>
                            <Text font={18} weight={700} line={"35px"} padding={"0px 0px 4px 0px"}>
                                <a href={`https://wax.atomichub.io/explorer/template/${collection}/${templateID}`}>
                                    <Span color={color}>#{templateID}</Span>
                                </a>
                            </Text>
                            <Text color={"#bfbebe"} font={10} opacity={0.6} weight={400}>
                                Properties
                            </Text>
                            <Text font={18} line={"35px"} padding={"0px 0px 4px 0px"}>
                                <img alt="" src="/image/arr.png" className={classes.imgIcon}/>Transferable
                            </Text>
                            <Text font={18} line={"20px"} padding={"0px 0px 4px 0px"}>
                                <img alt="" src="/image/f.png" className={classes.imgIcon2}/>Burnable
                            </Text>
                        </div>
                    </div>
                    <div className={classes.buttomCont}>
                        <div className={classes.conteiner_cont2}>
                            <div className={classes.seti}>
                                <div className={classes.auth_button_icon}>
                                <a href={`#`}>
                                    <SvgTele fill={color} height={17} width={17}/>
                                </a>
                                </div>&nbsp;&nbsp;&nbsp;&nbsp;
                                <div className={classes.auth_button_icon}>
                                <a href={`#`}>
                                    <SvgTwiter fill={color} height={20} width={20}/> 
                                </a>
                                </div>&nbsp;&nbsp;&nbsp;&nbsp;
                                <div className={classes.auth_button_icon}>
                                <a href={`#`}>
                                    <SvgLink fill={color} height={20} width={20}/> 
                                </a>
                                </div>
                            </div>
                        </div>
                        <div className={classes.conteiner_cont2} style={{width: width > 767 ? "53%": "100%"}}>
                            <div className={classes.conteiner_seller}>
                            <a href={`https://wax.atomichub.io/explorer/account/${seller}`}>
                                <Text column={width > 992 < 767 ? false : true}>
                                    Seller:&nbsp;&nbsp;<img alt="" src="/image/1.png" style={{width: 23}}/>
                                    <Text weight={400}><Span color={color}>&nbsp;&nbsp;{seller}</Span></Text>
                                </Text>
                                </a>
                                <Text column={width > 992 < 767 ? false : true}>
                                    Offer&nbsp;<Text weight={400}><Text>ID:</Text>&nbsp;&nbsp;<Span color={color}>#{id}</Span></Text>
                                </Text>
                            </div>
                        </div>
                    </div>
                    <div className={classes.buttomCont}>
                        <div className={classes.conteiner_cont2}>
                            <div className={classes.conteiner_price}>
                                <Text font={ width > 767 ? 24 : 18 } weight={700}>
                                    Price:&nbsp;<Span color={"#42ba67"}>{String(price.toFixed(2))}</Span>
                                </Text>
                                <Text font={ width > 767 ? 24 : 18 } weight={700}>
                                    <Span color={"#42ba67"}>&nbsp;WAX</Span>&nbsp;<Text font={ width > 767 ? 24 : 18 } weight={400}>(${dollar})</Text>
                                </Text>
                            </div>
                        </div>
                        <div className={classes.conteiner_cont3} >
                            <div className={classes.conteiner_price}>
                                <ButtonPrimary padding={"6px 12px"} width={"100%"} onClick={() => setStatus(true)}>
                                    Buy
                                </ButtonPrimary>
                                {
                                    status ? <Modal max={800} close={() =>setStatus(false)}>
                                        <Buy
                                            buy={() => userName ? Buyers() : AuthLoad()}
                                            desc={props.desc} 
                                            close={() =>setStatus(false)}
                                        />
                                    </Modal> : null
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </Card>
        </div>
    )
}