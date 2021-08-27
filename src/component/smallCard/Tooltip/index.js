import React from 'react'
import { useSelector } from 'react-redux'
import { Tooltip } from 'antd';
import { ReactComponent as SvgOk }from '../../../svg/ok.svg'

import { Card } from "../../card"
import { Text } from "../../ui/text"
import { Span } from "../../ui/span"

import classes from './too.module.sass'

export const TooltipComp = (props) => {
    const {
        name,
        id,
        img,
        collection,
        schema,
        mint,
        maxMint,
        fire,
        owner,
        token,
        image,
        imgSize,
        attr
    } = props.data

    const color = "#ea923e"
    const width = useSelector(state => state.size.width)

    return (
        <Tooltip
            {...props}
            placement="right"
            mouseEnterDelay={1}
            autoAdjustOverflow
            color={"#1a203c"} 
            overlayStyle={{
                width: "100%",
                maxWidth: 600,
            }}
            overlayInnerStyle={{
                borderRadius: 20,
            }}
            mouseLeaveDelay={0}
            title={
                <div>
                    <div className={classes.conteiner_desc}>
                        <div className={classes.conteiner_icon}>
                            <img alt="" src="/image/arr.png" className={classes.imgIcon}/>
                            <img alt="" src="/image/f.png" className={classes.imgIcon2}/>
                        </div>
                        <div className={classes.conteiner_img}> 
                            <Card load>
                                <div className={classes.img_cont}>
                                    <img
                                        style={{ width: imgSize === "vertical" ? props.width: '100%' }}
                                        className={classes.img}
                                        alt=""
                                        src={img}
                                    />                               
                                </div>
                            </Card>
                        </div>
                        <div className={classes.desc}>
                            <Text font={width > 767 ? 22 : 18} padding={"10px 10px 0px 10px"} ><Span color={color}>{name}</Span></Text>
                            <Text font={14} padding={"0px 17px"}weight={400}>ID: #{id}</Text>
                            <Text font={13} padding={"10px 10px 0px 10px"}>Collection:&nbsp;
                                <Text font={13} weight={400}><Span color={color}>{collection}&nbsp;</Span>
                                    <Text>
                                        <SvgOk fill={"#ea923e"} height={12} width={12}/>
                                    </Text>
                                </Text>
                            </Text>
                            <Text font={13} padding={"5px 5px 0px 10px"}>Shema:&nbsp;
                                <Text font={13} weight={400}>{schema}</Text>
                            </Text>
                            <Text font={13} padding={"5px 5px 0px 10px"}>MInt:&nbsp;
                                <Text font={14} weight={400}>
                                    <Span color={color}>{mint}&nbsp;</Span>
                                </Text>
                                    of&nbsp;
                                <Text font={14} weight={400}>
                                    {maxMint}&nbsp;
                                </Text>
                                <Text font={13} weight={400}>
                                    (max: ?)&nbsp; - &nbsp; 
                                </Text>
                                <Text font={14} weight={400} position={"relative"}>
                                    {fire}<img alt="" src="/image/fm.png" style={{width: 15, position: "absolute", right: -15, top: 1.5}}/>
                                </Text>
                            </Text>    
                            <Text font={13} padding={"5px 5px 0px 10px"}>Owner:&nbsp;
                                <Text font={13} weight={400}>{owner}</Text>
                            </Text>
                            <Text font={13} padding={"5px 5px 0px 10px"}>Backed Tokens:&nbsp;
                                <Text font={13} weight={400}>{token}</Text>
                            </Text>           
                        </div>
                    </div>
                    <div style={{paddingTop: 30, paddingBottom: 20}}>
                        {
                            attr.map((v, i) => {
                                return (
                                    <div className={classes.other} key={i}>
                                        <div style={{ width: '33%' }}>
                                            <Text font={13} weight={700} padding={"0px"}>
                                                {v.title}&nbsp;
                                            </Text>
                                        </div>
                                        <div style={{ width: '67%' }}>
                                            <Text font={13} weight={400} padding={"0px"}>
                                                {v.desc}
                                            </Text>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            }
        >
            {props.children}
        </Tooltip>
    )
}