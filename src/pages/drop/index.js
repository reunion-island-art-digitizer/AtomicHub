import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'

import { useParams, useHistory } from 'react-router-dom'

import { Auth } from '../../component/auth'
import { Card } from '../../component/card'
import { SmallCard } from '../../component/smallCard'
import { Text } from '../../component/ui/text'
import { Span } from '../../component/ui/span'
import { ButtonPrimary } from '../../component/ui/button'

import { Modal } from '../../component/modal'
import { Load } from '../../component/load'

import { change } from '../../lib/buy'

import { Buy } from './buy'

import classes from './drop.module.sass'

import { drops, FetchFake } from '../../DATA/drops'

export const Drops = () => {
    const width = useSelector(state => state.size.width)
    const login = useSelector(state => state.app.user.login)
    const monets = useSelector(state => state.app.user.monets)
    const wax = useSelector(state => state.app.user.wax)

    const [ status, setStatus ] = useState(false)
    useEffect(() => {
        setTimeout(() => setStatus(true), 300)
    }, [true])

    const { id } = useParams()
    const data = FetchFake(drops, id)

    const [ auth, setAuth ] = useState(false)
    const [ buy, setBuy ] = useState(false)

    const Click = () => {
        if(login) {
            setBuy(true)
        } else {
            setAuth(true)
        }
    }



    const [ transzaction, setTranszaction ] = useState(false)
    const Transaction = async () => {
        setBuy(false)
        setTranszaction(true)
  
        const res = await change(wax, monets, login, data.price)

        if(res.status) {
            setTranszaction(res)
        } else {
            setTranszaction(res)    
        }
    }

    const history = useHistory()

    if(!!data === false) {
        history.push('/404')
        return null
    }

    if(status === false) {
        return (
            <div style={{
                display: "flex",
                width: '100%',
                justifyContent: 'center'
            }}>
                <img alt="" src="/image/loading.gif" style={{ width: 150, marginTop: '10%'}}/>
            </div>
        )
    }

    const price = Number(data.price)

    return (
        <>
        {
            auth ? <Auth close={() => setAuth(!auth)}/> : null
        }
        {
            buy ? <Modal max={500} close={() => setBuy(!buy)}><Buy transzaction={() => Transaction()} price={data.price} dollar={data.dollar}/></Modal> : null
        }
        {
            transzaction ? 
                <Modal max={500} close={() => setTranszaction(false)} ixs>
                    <Load status={transzaction} close={() => setTranszaction(false)} re={() => Transaction()}/>
                </Modal>
            : null
        }
        <div className={classes.drop_conteiner}>
            <Card width={width > 1200 || width < 767 ? 540 : 450} height={800}>
                <div className={classes.content}>
                    <div className={classes.content_card}>
                        <SmallCard lipBlock={true} color={"#ea923e"} width={163} imgSize={{ width: 110, height: 147 }} data={data} block/>
                    </div>
                    <div style={{ display: 'flex', marginTop: 20 }}>
                        <div className={classes.text1}>
                            <Text font={17.6}>Name</Text>
                        </div>
                        <div className={classes.text2}>
                            <Text font={17.6}>{data.name}</Text>
                        </div>
                    </div>
                    <div style={{ display: 'flex' }}>
                        <div className={classes.text1}>
                            <Text font={17.6}>Seller</Text>
                        </div>
                        <div className={classes.text2}>
                            <a href={`https://wax.atomichub.io/explorer/collection/${data.seller}`}>
                            <Text font={17.6} color={"#ea923e"}>{data.seller}</Text>
                            </a>
                        </div>
                    </div>
                    <div style={{ display: 'flex' }}>
                        <div className={classes.text1}>
                            <Text font={17.6}>Min mint</Text>
                        </div>
                        <div className={classes.text2}>
                            <Text font={17.6}>{data.mint}</Text>
                        </div>
                    </div>
                    <div style={{ display: 'flex', marginBottom: 30 }}>
                        <div className={classes.text1}>
                            <Text font={17.6}>Available</Text>
                        </div>
                        <div className={classes.text2}>
                            <Text font={17.6} >{data.available} / {data.mint - 1}</Text>
                        </div>
                    </div>
                    <div className={classes.content_card2}>
                        <Text weight={400}>{data.desc} </Text>
                        <ul style={{ color: 'white', margin: '16px 0px'}}>
                            {
                                data.rarityDesc.map((v, i) => {
                                    return (
                                        <li key={i}><Text weight={400}>{v.per}% on {v.label}</Text></li>
                                    )
                                })
                            }
                            <li style={{
                                    marginTop: 16,
                                    listStyleType: 'none'
                                }}
                            >
                                <a href="https://rplanet.io/collection">
                                <Text weight={400} color={"#ea923e"}>Unpacking Site</Text>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className={classes.content_price} >
                        <Text font={width > 767 ? 20 : 18} width={"50%"}>Price:<Span color={"#42ba67"}>&nbsp;{price.toFixed(2)}</Span></Text>
                        <Text font={width > 767 ? 20 : 18} width={"50%"}><Span color={"#42ba67"}>&nbsp;WAX&nbsp;</Span>(${data.dollar})</Text>
                    </div>
                    <ButtonPrimary width={'100%'} onClick={() => Click()}>
                        {login ? "Buy" : "Login"}
                    </ButtonPrimary>
                </div>
            </Card>
        </div>
        </>
    )
}