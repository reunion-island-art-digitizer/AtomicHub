import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

import { ReactComponent as SvgOk }from '../../svg/ok.svg'

import { Card } from '../card'
import { Text } from '../ui/text'
import { Span } from '../ui/span'
import { ButtonPrimary } from '../ui/button'
import { TooltipComp } from './Tooltip'

import classes from './small.module.sass'

export const SmallCard = (props) => {
    const history = useHistory()

    const {
        id,
        img,
        mint,
        collection,
        creator,
        name,
        price,
        dollars,
        imgSize
    } = props.data

    const {
        width, height
    } = props.imgSize

    const status = props.stasus

    const LickPush = () => {
        history.push("/market/sale/" + id)
        window.location.reload()
    }

    const [ colorSec, serColorSec ] = useState("white")
    
    return (
        <>
        <div className={classes.padding} style={{ cursor:  props.block ? "" : 'pointer' }}>
            <TooltipComp overlayInnerStyle={{ opacity: props.lipBlock ? 0 : 1 }} {...props} width={props.lip ? props.lip : 75}>
            <Card width={props.width} load>
                <div style={{width: props.width}} className={classes.card_body}>
                    <div style={{ position: 'relative',display: 'flex', justifyContent: 'center', width: "100%"  }}>
                        <div className={classes.num_body}>
                            {
                                props.lipBlock ? null :
                                <div className={classes.number}><Text font={10}>#{mint}</Text></div>
                            }
                        </div>
                        <div style={{ width: imgSize === "vertical" ? width : '100%', height: height, display: 'flex', alignItems: 'center',  boxSizing: 'border-box'}}>
                            <img
                                className={classes.img}
                                alt=""
                                src={img}
                            />
                        </div>
                        
                    </div>
                </div>
                <div className={classes.card_footer}>
                    <div className={classes.create} style={{justifyContent: !!status ? 'flex-start' : 'center' }}>
                        <div className={classes.create_content} style={{ borderColor: props.color}}>
                            <Text font={8} weight={700}>
                                {collection}&nbsp;&nbsp;
                                <Text>
                                    <SvgOk fill={"#ea923e"} height={12} width={12}/>
                                </Text>
                            </Text>
                        </div>
                    </div>
                    {
                        status ?
                        <div style={{padding: '10px', paddingBottom: 0}}>
                            <Text font={15} weight={700}>
                                {name.slice(0, 16)}{name.length > 16 ? "..." : ""}
                            </Text>
                            <Text font={12} weight={700}>
                                <Span color={"#42ba67"}>{price.toFixed(2)} WAX</Span>
                                <Text font={12} weight={400}>
                                    &nbsp;&nbsp;(${dollars})
                                </Text>
                            </Text>
                            <div className={classes.button}>
                                <div style={{padding: 5, paddingLeft: 0}}>
                                    <ButtonPrimary
                                        onMouseOver={() => serColorSec("#ea923e")}
                                        onMouseLeave={() => serColorSec("white")}
                                        onClick={() => props.block ? null : LickPush()} 
                                        padding={"8px 22px"} 
                                        second
                                    >
                                        <Text color={colorSec} font={9} weight={700}>Details</Text>
                                    </ButtonPrimary>
                                </div>
                                <div style={{padding: 5, paddingRight: 0}}>
                                    <ButtonPrimary padding={"8px 29px"} onClick={() =>props.buy()}>
                                        <Text font={9} weight={700} >Buy</Text>
                                    </ButtonPrimary>
                                </div>
                            </div>
                        </div>
                        :
                            props.lipBlock ?
                                <Text font={12} weight={700} jc={"center"} width={"100%"}>
                                    {name}
                                </Text>
                            :
                                <Text font={12} weight={700} jc={"center"} width={"100%"}>
                                    {name.slice(0, 17) }{name.length > 17 ? "..." : ""}
                                </Text>
                    }
                </div>
               
            </Card>
            </TooltipComp>
        </div>
        </>
    )
}