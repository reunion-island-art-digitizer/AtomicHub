import React from 'react'
import { useSelector } from 'react-redux'

import { Text } from '../../../../component/ui/text'

import { SlickSlider } from './slick'

import classes from './slider.module.sass'

export const Slider = ({ data }) => {
    const width = useSelector(state => state.size.width)
    return (
        <div className={classes.conteiner}>
            <Text padding={width > 767 ? "25px 0px 30px 0px" : "25px 0px 30px 15px"} font={width > 767 ? 36 : 24} weight={800}>
                Suggested Sales
            </Text>
            <SlickSlider data={data}/>
        </div>
    )
}