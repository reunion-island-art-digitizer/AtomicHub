import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import moment from 'moment'

import { Card } from '../../../../component/card'
import { Span } from '../../../../component/ui/span'
import { Text } from '../../../../component/ui/text'

import { Content } from './content'

import classes from './link.module.sass'

export const LinkCard = ({ card }) => {
    const claim = useSelector((state) => state.size.claimed)
    const by = claim

    const {
        creator, date, linkid, Memo
    } = card

    return (
        <div className={classes.content}>
            <Card width={!!by ? 1110 : 730} height={550}>
                {
                    !!by ?
                        <div className={classes.card}>
                            <Text>
                                The link was claimed by <Link to="/">
                                <Span color={"rgba(0,0,0,.5)"}>&nbsp;
                                {by}&nbsp;</Span></Link> on {moment(date).format("DD.MM.YYYY")}, {moment(date).format("HH:mm")}
                            </Text>
                        </div>
                    : null
                }
               
                <Content 
                    linkid={linkid}
                    date={date}
                    by={by}
                    Memo={Memo}
                    creator={creator}
                    card={card}
                />
            </Card>
        </div>
    )
}