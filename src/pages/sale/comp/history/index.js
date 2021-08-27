import React from 'react'
import { useSelector } from 'react-redux'
import { Text } from '../../../../component/ui/text'

import { Table } from './table'

import classes from './history.module.sass'

export const History = ({ dataSource }) => {
    const width = useSelector(state => state.size.width)
    return (
        <div className={classes.conteiner}>
            <Text padding={"58px 0px 30px 0px"} font={width > 767 ? 36 : 24} weight={800}>
                Price History
            </Text>
            <Text padding={"0px 0px 16px 0px"} font={16} weight={400}>
                This price history is based on all NFT sales with the same template ID, but the price might fluctuate for specific NFTs
            </Text>
            <Table dataSource={dataSource}/>
        </div>
    )
}