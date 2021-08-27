import React from 'react'
import { Card } from '../card'
import { Text } from '../ui/text'

import classes from './tabs.module.sass'

export const Pagg = () => {
    return (
        <div className={classes.pagg}>
            <div>
            <Card>
                <div className={classes.pagg_cont}>
                    <Text color={"#bfbebe"}>
                        Prev
                    </Text>
                    <div className={classes.pagg_num}>
                        <Text weight={700}>
                            1
                        </Text>
                    </div>
                    <Text color={"#bfbebe"}>
                        Next
                    </Text>
                </div>
            </Card>
            </div>
        </div>
    )
}