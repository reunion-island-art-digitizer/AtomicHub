import React from 'react'
import { useSelector } from 'react-redux'

import classes from './err.module.sass'
import { Text } from '../../component/ui/text'

export const Page404 = () => {
    const width = useSelector(state => state.size.width)
    return (
        <div className={classes.conteiner}>
            <Text color={"#ea923e"} font={width > 767 ? 192 : 128} weight={700} center>404</Text>
            <Text font={18} center  weight={700} >Page Not Found</Text>
        </div>
    )
}