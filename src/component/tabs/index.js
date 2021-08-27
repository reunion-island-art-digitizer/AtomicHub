import React from 'react'

import { Card } from '../card'
import { Text } from '../ui/text'

import { Pagg } from './pagg'

import { Title } from './data'

import classes from './tabs.module.sass'



export const Tabs = ({ dataSource }) => {
    const len = []

    dataSource.map((v, i) => {
        v.data.forEach(j => {
            const length = len[i] ? len[i] : 0
            if(length < j.title.length * 14) {
                len[i] = j.title.length * 14
            }
        });
    });

    return (
        <>
        <div className={classes.conteiner_card}>
        <Card>
            <div style={{padding: "28px 20px"}}>
            <div className={classes.conteiner}>
                <div className={classes.title_cont}>
                    {
                        Title.map((v, i) => {
                            return (
                                <div key={i} className={classes.title} style={{ maxWidth: v.width }}>
                                    <Text>
                                        {v.title}
                                    </Text>
                                </div>
                            )
                        })
                    }
                </div>
                {
                    dataSource.map((v, i) => {
                        return (
                            <div key={i} className={classes.cell} > 
                                <div className={classes.row} style={{ maxWidth: Title[0].width, minWidth: 150 }}>
                                    <tr className={classes.rows}>
                                        <th  className={classes.button} >
                                            <Text color={"#ea923e"} weigh={700}>
                                                {v.event}
                                            </Text>
                                        </th>
                                    </tr>
                                </div>
                                <div className={classes.row} style={{ maxWidth: Title[1].width, minWidth: 420 }}>
                                    <table className={classes.row_list}>
                                        {
                                            v.data.map((v, j) => {
                                                return (
                                                    <tr className={classes.list} key={j}>
                                                        <th  className={classes.list_cell} style={{ maxWidth: len[i] }}>
                                                            <Text  weight={400}>
                                                                {v.title}
                                                            </Text>
                                                        </th>
                                                        <th  className={classes.list_cell2}>
                                                            <Text  weight={400}>
                                                                {v.desc}
                                                            </Text>
                                                        </th>
                                                    </tr>
                                                )
                                            })
                                        }
                                    </table>
                                </div>
                                <div className={classes.row} style={{ maxWidth: Title[2].width }}>
                                    <Text weight={400} center>
                                        {v.date}
                                    </Text>
                                </div>
                                <div className={classes.row} style={{ maxWidth: Title[3].width }}>
                                    <a href="https://wax.bloks.io/transaction/d8f3da38f3f8ab6fd4387de371c1aac75cbbf0e957f8e56521a8fc5769608d73">
                                        <img alt="" src="/image/eye.png" style={{width: 36, height: 24}}/>
                                    </a>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            </div>
           
        </Card>
        </div>
        <Pagg />
        </>
    )
}