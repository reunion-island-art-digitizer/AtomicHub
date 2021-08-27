import React, { useState } from 'react'

import { Card } from '../../../../../component/card'

import { ReactComponent as Svgfilm }from '../../../../../svg/film-roll.svg'
import { ReactComponent as SvgDel }from '../../../../../svg/delete.svg'

import classes from './promo.module.sass'

export const Promo = (props) => {
    const { promo } = props

    const [ active, setActive ] = useState(0)
    const [ status, setStatus ] = useState(false)

    return (
        <>
        {
            status ?
            <div className={classes.full} onClick={() => setStatus(false)}>
                <div className={classes.content}>
                    <div className={classes.close}>
                        <SvgDel fill={"white"} width={13} height={13}/>
                    </div>
                    <img alt="" src={promo[active]?.src} style={{ maxHeight: "96vh" }}/>
                </div>
            </div>
            :null
        }
      
        <div className={classes.conteiner}>
            <Card height={525} grad>
                <div style={{padding: 20}}>
                    <div className={classes.conteiner_img} onClick={() => setStatus(true)}>
                        {
                            promo[active]?.type === "video" ?
                                <video autoplay loop controls playsinline className={classes.img}>
                                    <source src="https://ipfs.atomichub.io/ipfs/QmcnWk1Knb7nWwx6HVRFHQWVgeXTgRjtF5XiikJecKx4HY"/>
                                </video>
                            :
                                <img alt="" 
                                    src={promo[active]?.src}
                                    className={classes.img} 
                                    style={{width: promo[active].imgSize === "vertical" ? 214 : "100%"}}
                                />
                        }
                    </div>
                    <div className={classes.paggination}>
                        {
                            promo.map((v, i) => {
                                return (
                                    <div key={i} className={classes.paggination_img_cont} style={{borderColor: active === i ? '#ea923e' : "white"}} onClick={() => setActive(i)}>
                                        {
                                            v.type === "video" ?
                                                <Svgfilm fill="white" width={30}/>
                                            :
                                                <img alt="" src={v.src} style={{width: v.imgSize === "vertical" ? '80%' : '100%'}} />
                                        }
                                        
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </Card>
        </div>
        </>
    )
}