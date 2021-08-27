import React from 'react'

import { Card } from '../../../../../component/card'
import { Text } from '../../../../../component/ui/text'

import classes from './att.module.sass'

export const Attributes = (props) => {

    const attImmut = props.desc[0]
    const attMut = props.desc[1]

    return (
        <>
            <div className={classes.content}>
                <Card  height={460}>
                    <div className={classes.content_padd}>
                        <Text font={10} weight={500} padding={"0px 0px 12px 4px"}>
                            {attImmut.imm}
                        </Text>
                        {
                            attImmut.attr ? 
                            
                                attImmut.attr.map((v, i) => {

                                        return (
                                            <div className={classes.content_desc} key={i}>
                                                <div  className={classes.content_desc1}>
                                                    <Text weight={800}  padding={"3px 0px 0px 0px"}>
                                                        {v.title}
                                                    </Text>
                                                </div>
                                                <div  className={classes.content_desc2}>
                                                    <Text  weight={400} word={"break-word"}>
                                                        {v.desc}
                                                    </Text>
                                                </div>
                                            </div>
                                        )

                                })
                          
                            :
                            <div style={{display: 'flex', justifyContent: 'center'}}>
                                <Text weight={800} padding={"48px"}>
                                    No immutable attributes
                                </Text>
                            </div>
                        }
                    </div>
                </Card>
            </div>
            <div className={classes.content}>
                <Card height={460}>
                    <div className={classes.content_padd}>
                        <Text font={10} weight={500}  padding={"0px 0px 13px 5px"}>
                            {attMut.imm}
                        </Text>
                        {
                            attMut.attr? 
                            
                                attMut.attr.map((v, i) => {

                                        return (
                                            <div className={classes.content_desc} key={i}>
                                                <div  className={classes.content_desc1}>
                                                    <Text weight={800}  padding={"3px 0px 0px 0px"}>
                                                        {v.title}
                                                    </Text>
                                                </div>
                                                <div  className={classes.content_desc2}>
                                                    <Text  weight={400} word={"break-word"}>
                                                        {v.desc}
                                                    </Text>
                                                </div>
                                            </div>
                                        )

                                })
                          
                            :
                            <div style={{display: 'flex', justifyContent: 'center'}}>
                                <Text weight={800} padding={"48px"}>
                                    No mutable attributes
                                </Text>
                            </div>
                        }
                    </div>
                </Card>
            </div>
        </>
    )
}