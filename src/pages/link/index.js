import React, { useState, useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom'

import { TitleComp } from './comp/title'
import { LinkCard } from './comp/linkCard'
import { Span } from '../../component/ui/span'

import { card, FetchFace } from '../../DATA/link'

export const Link = () => {
    const { id } = useParams()
    const history = useHistory()

    const data = FetchFace(card, id)

    const [ status, setStatus ] = useState(false)
    useEffect(() => {
        setTimeout(() => setStatus(true), 300)
    }, [true])

    if(!!data === false) {
        history.push('/404')
    }
    if(!!data === false) {
        return null
    }

    if(status === false) {
        return (
            <div style={{
                display: "flex",
                width: '100%',
                justifyContent: 'center'
            }}>
                <img alt="" src="/image/loading.gif" style={{ width: 200, marginTop: '10%'}}/>
            </div>
        )
    }

    return (
        <>
            <TitleComp>
                Claim Link <Span color={"#ea923e"}>#{id}</Span>
            </TitleComp>
            <LinkCard card={data}/>
        </>
    )
}