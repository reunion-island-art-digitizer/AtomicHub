import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import ReCAPTCHA from "react-google-recaptcha";
 
import { Text } from '../../../component/ui/text'
import { ButtonPrimary } from '../../../component/ui/button'
import { ReactComponent as SvgDown }from '../../../svg/down.svg'
import classes from './buy.module.sass'

import { country } from './counry'

export const Buy = ({ transzaction, price, dollar }) => {
    const width = useSelector(state => state.size.width)

    const [ captcha, setCaptcha ] = useState(true)
    const [ loading, setLoading ] = useState(false)

    const [ status, setStatus ] = useState(false)

    const [ select, useSelect ] = useState({
        value: 'US',
        label: 'UNITED STATES'
    })
    
    useEffect(async() => {
        const request = await fetch("https://ipinfo.io/json?token=ba76b2fca6cc0a")
        const json = await request.json()

        country.forEach(v => {
            if(v.value === json?.country) {
                Select(v)
            }
        })
    },[true])

    const Select = (v) => {
        useSelect({
            value: v.value,
            label: v.label
        })
    }
    const SelectLabel = select.label[0].toUpperCase() + select.label.slice(1).toLowerCase()

    function onChange() {
        setLoading(true)
        setTimeout(() => {
            setCaptcha(false)
            setLoading(false)
        }, 1000)
    }

    return (

            <div className={classes.conteiner}>
    
                <div style={{marginBottom: 25}}>
                    <Text weight={700} font={width > 767 ? 36 : 24} center>
                        Confirm Purchase
                    </Text>
                </div>
                <div className={classes.content_card}>
                    <div className={classes.content_text} style={{width: "35%"}}>
                        <Text>Unit Price</Text>
                    </div>
                    <div className={classes.content_text} style={{width: "65%"}}>
                        <Text>{price} WAX<Text weight={400}>&nbsp;(${dollar})</Text></Text>
                    </div>
                </div>
                <div className={classes.content_card2}>
                    <div className={classes.content_text} style={{width: "35%"}}>
                        <Text>Quantity</Text>
                    </div>
                    <div className={classes.content_text} style={{width: "65%"}}>
                        <Text weight={400}>1</Text>
                    </div>
                </div>
                <div className={classes.content_card}>
                    <div className={classes.content_text} style={{width: "35%"}}>
                        <Text>Total</Text>
                    </div>
                    <div className={classes.content_text} style={{width: "65%"}}>
                        <Text weight={400}><Text color={"#42ba67"}  weight={600}>{price} WAX&nbsp;</Text>(${dollar})</Text>
                    </div>
                </div>
                {/*
                    <div className={classes.content_card3}>
                        <div className={classes.content_text} style={{width: "35%"}}>
                            <Text weight={400} center>Your Country</Text>
                        </div>
                        <div className={classes.content_text} style={{width: "65%"}}>
                            <div className={classes.select} onClick={() => setStatus(!status)}>
                                <Text weight={400} nowrap>
                                    {SelectLabel.slice(0, width > 767 ? 25 : 15)}
                                </Text>
                                <div className={classes.select_down} >
                                    <SvgDown fill="white" width={15} height={15}/>
                                </div>
                                {
                                    status ?
                                    <div className={classes.option}>
                                        {
                                            country.map((v, i) => {
                                                return (
                                                    <p key={i} className={classes.option_hover} onClick={() => Select(v)}>
                                                        {v.label[0].toUpperCase()}{v.label.slice(1).toLowerCase()}
                                                    </p>
                                                )
                                            })
                                        }
                                        
                                    </div>
                                    : null
                                }
                            </div>
                        </div>
                    </div>
                */}
                <div className={classes.captha}>
                    <ReCAPTCHA
                        theme="dark"
                        sitekey="6LcRQu0bAAAAAIHiPNL1iceMINQOR_V2QCoDhsu0"
                        onChange={onChange}
                    />
                </div>
                <ButtonPrimary width={'100%'} padding={"7px"} block={captcha} load={loading} onClick={() => transzaction()}>
                    Pay with WAX
                </ButtonPrimary>
                <div style={{margin: 10}}></div>
                <Text font={10} weight={400} center padding={'0px 48px'}>
                    You are buying digital goods from the creator of the collection rplanet. AtomicHub has no control over this collection or this drop.
                </Text>
            </div>
    )
}