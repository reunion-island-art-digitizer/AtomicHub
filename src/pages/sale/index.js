import React from 'react'
import { useParams, useHistory } from 'react-router-dom'

import { Asset } from './comp/asset'
import { History } from './comp/history'
import { Graph } from './comp/graph'
import { Slider } from './comp/Slider'
import { Logs } from './comp/logs'

import { Back } from '../../component/back'
import { TitleH1 } from '../../component/ui/title'
import { Span } from '../../component/ui/span'

import { card, FetchFace } from '../../DATA/sale'
import { cardSlider, FetchSlider } from '../../DATA/card'

export const Sale = () => {
    const { id } = useParams()
    const history = useHistory()

    const data = FetchFace(card, id)

    if(!!data === false) {
        history.push('/404')
    }
    if(!!data === false) {
        return null
    }
    
    const creator = data.desc.creator
    const slider = FetchSlider(cardSlider, creator)

    return (
        <>
            <Back link="https://wax.atomichub.io/market" label="Market"/>
            <div style={{padding: "0px 15px"}}>
                <TitleH1>
                    Sale: <Span color={"#ea923e"}>#{id}</Span>  ({data.desc.asset})
                </TitleH1>
            </div>
            <Asset data={data}/>
            <History dataSource={data.history}/>
            <Graph dataSource={data.graph}/>
            <Slider data={slider}/>
            <Logs dataSource={data.logs}/>
        </>
    )
}