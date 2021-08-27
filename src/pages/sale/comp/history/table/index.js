import React from 'react'

import { Text } from '../../../../../component/ui/text'

import classes from './table.module.sass'

import { data } from './data'

export const Table = ({ dataSource }) => {

    return (
        <div className={classes.cont_table} >
        <div className={classes.conteiner}>
            {
                data.map((v, i) => {
                    return (
                        <tr key={i} className={classes.cell}>
                            <th className={classes.row}>
                                <Text weight={700} line={1.5} center>
                                    {v.label}
                                </Text>
                            </th>
                            {
                                dataSource.map(( d, j ) => {
                                    return ( 
                                        <th className={classes.row} line={1.5} key={j}>
                                            <Text weight={600} center width={"60%"}>
                                                {d[i].desc_1}&nbsp;
                                            </Text>
                                            {!!d[i].desc_2 ? <Text width={"40%"} center weight={400}>{`(${d[i].desc_2})`}</Text> : ''}
                                        </th>
                                    )
                                })
                            }
                        </tr>
                    )
                })
            }
        </div>
        </div>
    )
}