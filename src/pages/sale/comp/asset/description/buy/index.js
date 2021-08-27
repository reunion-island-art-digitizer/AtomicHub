import React, { useState } from 'react'
import { useSelector } from 'react-redux'

import classes from './buy.module.sass'

import { Text } from '../../../../../../component/ui/text'
import { Span } from '../../../../../../component/ui/span'
import { Auth } from '../../../../../../component/auth'
import { ButtonPrimary } from '../../../../../../component/ui/button'
import { SmallCard } from '../../../../../../component/smallCard'

import { ReactComponent as SvgOK }from '../../../../../../svg/ok.svg'

export const Buy = (props) => {
    const desc = props.desc
    const color = "#ea923e"
    const width = useSelector(state => state.size.width)

    return (
        <>
            <div className={classes.close}>
                
            </div>
            <div className={classes.cont}>
                <div className={classes.text}>
                    <Text font={width > 767 ? 36 : 24} weight={700}>
                        Buy Listing
                    </Text>
                </div>
                <div className={classes.content}>
                    <div className={classes.card}>
                        <SmallCard color={"#ea923e"} width={165} imgSize={{ width: 100, height: 147 }} data={props.desc} block/>
                    </div>
                    <div className={classes.conteiner}>
                        <div>
                            <Text font={20} weight={600}>
                                Summary
                            </Text>
                            <div style={{margin: "0px 0px 8px"}}></div>
                            <div className={classes.conteiner2}>
                                <div style={{maxWidth: 168, width: '100%', padding: '4.8px'}}>
                                    <Text font={16} weight={600}>
                                        Sale ID
                                    </Text>
                                </div>
                                <div style={{padding: '4.8px', minWidth: '60%'}}>
                                    <Text font={16} weight={600}>
                                        #{desc.id}
                                    </Text>
                                </div>
                            </div>
                            <div className={classes.conteiner2}>
                                <div style={{width: 168, padding: '4.8px'}}>
                                    <Text font={16} weight={600}>
                                        Collection
                                    </Text>
                                </div>
                                <div style={{padding: '4.8px', minWidth: width < 676 ? '60%' : ""}}>
                                    <Text font={16} weight={600} position={"relative"}>
                                    <a href={`https://wax.atomichub.io/explorer/collection/${desc.collection}`}>
                                        <Span color={color} hover={"#fd7e14"}>{desc.collection}&nbsp;
                                        {
                                            width > 767 ?
                                            <div style={{position: "absolute", right: -20, top: 3}}>
                                                <SvgOK fill={color} height={16} width={16}/>
                                            </div>
                                            :<SvgOK fill={color} height={16} width={16}/>
                                            
                                        }
                                        </Span>
                                    </a>
                                    </Text>
                                </div>
                            </div>
                            <div className={classes.conteiner2}>
                                <div style={{width: 168, padding: '4.8px'}}>
                                    <Text font={16} weight={600}>
                                        Asset Name
                                    </Text>
                                </div>
                                <div style={{padding: '4.8px', minWidth: '60%'}}>
                                    <Text font={16} weight={400}>
                                        {desc.asset}
                                    </Text>
                                </div>
                            </div>
                            <div className={classes.conteiner2}>
                                <div style={{maxWidth: 168, width: '100%', padding: '4.8px'}}>
                                    <Text font={16} weight={600}>
                                        Asset ID
                                    </Text>
                                </div>
                                <div style={{padding: '4.8px', minWidth: '60%'}}>
                                <a href={`https://wax.atomichub.io/explorer/asset/${desc.number}`}>
                                    <Text font={16} weight={400}>
                                        <Span color={color}>#{desc.number}</Span>
                                    </Text>
                                    </a>
                                </div>
                            </div>
                            <div className={classes.conteiner2}>
                                <div style={{maxWidth: 168, width: '100%', padding: '4.8px'}}>
                                    <Text font={16} weight={600}>
                                        Mint Number
                                    </Text>
                                </div>
                                <div style={{padding: '4.8px', minWidth: '60%'}}>
                                <Text font={16} weight={600}>
                                    <Text font={16} weight={600}>
                                        <Span color={color}>{desc.mint}&nbsp;</Span>
                                    </Text>
                                        of&nbsp;
                                    <Text font={16} weight={600}>
                                        {desc.maxMint}&nbsp;
                                    </Text>
                                    <Text font={16} weight={400}>
                                        (max: ?)&nbsp; - &nbsp; 
                                    </Text>
                                    <Text font={16} weight={400} position={"relative"}>
                                        {desc.fire}🔥
                                    </Text>
                                </Text>
                                </div>
                            </div>
                            <div className={classes.conteiner2}>
                                <div style={{maxWidth: 168, width: '100%', padding: '4.8px'}}>
                                    <Text font={16} weight={600}>
                                        Backed Tokens
                                    </Text>
                                </div>
                                <div style={{padding: '4.8px', minWidth: '60%'}}>
                                    <Text font={16} weight={400}>
                                        {desc.token}
                                    </Text>
                                </div>
                            </div>
                            <div className={classes.conteiner2} style={{marginTop: 33}}>
                                <div style={{width: 168, padding: '4.8px'}}>
                                    <Text font={16} weight={600}>
                                        Seller
                                    </Text>
                                </div>
                                <div style={{padding: '4.8px'}}>
                                <a href={`https://wax.atomichub.io/explorer/account/${desc.seller}`}>
                                    <Text font={16} weight={400} position={"relative"}>
                                        <Span color={color}>
                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                            {desc.seller}<img alt="" src="/image/1.png" style={{width: 25, position: "absolute", left: 0, top: 0}}/>
                                        </Span>
                                    </Text>
                                    </a>
                                </div>
                            </div>
                            <div className={classes.conteiner2}>
                                <div style={{width: 168, padding: '4.8px'}}>
                                    <Text font={16} weight={600}>
                                        Price
                                    </Text>
                                </div>
                                <div style={{padding: '4.8px'}}>
                                    <Text font={16} weight={700}>
                                        <Span color={"#42ba67"}>{desc.price.toFixed(8)} WAX</Span>&nbsp;
                                        <Text font={16} weight={400}>
                                            (${desc.dollars})
                                        </Text>
                                    </Text>
                                </div>
                            </div>
                        </div>

                        <div className={classes.button_conteiner}>
                            <ButtonPrimary width={'100%'}  onClick={() =>props.buy()}>
                                <Text font={16} weight={700}>
                                    Buy for {desc.price.toFixed(2)} WAX
                                </Text>
                            </ButtonPrimary>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}