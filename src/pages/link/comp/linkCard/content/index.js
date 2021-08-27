import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import moment from 'moment'

import { ButtonPrimary } from '../../../../../component/ui/button'
import { Text } from '../../../../../component/ui/text'
import { Span } from '../../../../../component/ui/span'
import { SmallCard } from '../../../../../component/smallCard'
import { Modal } from '../../../../../component/modal'
import { Load } from '../../../../../component/load'

import { Auth } from '../../../../../component/auth'

import { change } from '../../../../../lib/buy'

import classes from './content.module.sass'

export const Content = (props) => {
    const [ status, setStatus ] = useState(false)

    const [ auth, setAuth ] = useState(false)

    const { linkid, date, memo, creator, price} = props.card
    const by = props.by

    const color = "#ea923e"
    const wax = useSelector(state => state.app.user.wax)
    const user = useSelector(state => state.app.user.login)
    const monets = useSelector(state => state.app.user.monets)

    const Buy = async () => {
        setStatus(true)
        const res = await change(wax, monets, user, price)
        if(res.status) {
            setStatus(true)
        } else {
            setStatus(res)
        }
    }
    // View Transaction:242f3fc5
    return (
        <div className={classes.content}>
            {
                auth ? <Auth close={() => setAuth(!auth)}/> : null
            }
            {
                by ?
                <>
                    <div className={classes.link}>
                        <Text weight={700}>
                            Link ID:&nbsp;&nbsp;<Text weight={400}><Span color={color}>#{linkid}</Span></Text>
                        </Text>
                        <div></div>
                        <Text weight={700}>
                            Created:&nbsp;&nbsp;<Text weight={400}><Span color={color}>{moment(date).format("DD.MM.YYYY")}, {moment(date).format("HH:mm")}</Span></Text>
                        </Text>
                    </div>
                    <div className={classes.link2}>
                        <Text weight={600}>
                            Created by:&nbsp;&nbsp;<Link to="/"><Span color={color}>{creator}</Span></Link>
                        </Text>
                    </div>
                </>
                : null
            }
            <div style={{marginTop: !by? 28 : 0}} className={classes.conteiner}>
                <SmallCard lip={75} color={"#ea923e"} width={163} imgSize={{ width: 110, height: 147 }} data={props.card} block/>
            </div>
            <div className={classes.conteiner_user} style={{minHeight: by ?  '' : 127 }}>
                {
                    !by ?
                    <>
                    <div className={classes.user}>
                        <Text font={17.6} weight={600}>
                            Creator
                        </Text>
                        <Text font={17.6} weight={600}>
                            <a href={`https://wax.atomichub.io/explorer/account/${creator}`}>
                                <Span color={color}>{creator}</Span>
                            </a>
                        </Text>
                    </div>
                    <div className={classes.user}>
                        <Text font={17.6} weight={600}>
                            Memo
                        </Text>
                        <Text font={17.6} weight={600}>
                            {memo}
                        </Text> 
                    </div>
                    </>
                    :
                    <div>
                        <Text font={20} weight={700} padding={"20px 0px"} color={'#ea923e'}>
                            Memo:&nbsp;<Text font={20} weight={700}>{memo}</Text>
                        </Text>
                    </div>
                }
               
            </div>
            <div style={{display: "flex", paddingBottom:  by ? 0 : 16}}>
                {
                    by ? null
                    :
                    <ButtonPrimary width={'100%'} padding={".345rem .75rem"} onClick={() => user ? Buy() : setAuth(true)}>
                        Claim
                    </ButtonPrimary>
                }
                {
                    status ?
                        <Modal max={500} close={() => setStatus(false)} ixs>
                            <Load  status={status} close={() => setStatus(false)} re={() => Buy()}/>
                        </Modal>
                    : null
                }
            </div>
        </div>
    )
}