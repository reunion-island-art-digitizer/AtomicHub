import React, { useState, useEffect } from 'react'

import { CaretDownOutlined } from '@ant-design/icons'

import classes from './wax.module.sass'

export const Wax = () => {
    const [ status , setStatus ] = useState(false)
    const [ over, setOver ] = useState(false)

    useEffect(() => {
        if(over === false && status) {
            const Leave = () => {
                    setStatus(false)
                    window.removeEventListener("click", Leave)
            }
            window.addEventListener("click", Leave)
                
        }
    // eslint-disable-next-line
    }, [over])

    return (
        <div className={classes.conteiner} 
            onMouseOver={() => setOver(true)}
            onMouseLeave={() => setOver(false)}
        >
            <div className={classes.content} onClick={() => setStatus(!status)} style={{boxShadow: status? "0 0 0 0.2rem rgba(204, 130, 59 , 50%)" : ""}}>
                <div className={classes.img} style={{ backgroundImage: `url("/image/wax/wax.png")`}}>

                </div>
                <CaretDownOutlined style={{fontSize: 12, marginTop: 3, marginLeft: 3}} />
            </div>
            {
                status ?
                <div className={classes.pop}>
                    <div className={classes.img2_padd}>
                        <div className={classes.img2} style={{ backgroundImage: `url("/image/wax/eos.png")`}}/>
                    </div>
                    <div className={classes.img2_padd}>
                        <div className={classes.img2} style={{ backgroundImage: `url("/image/wax/wax_kogs.png")`}}/>
                    </div>
                    <div className={classes.img2_padd}>
                        <div className={classes.img2} style={{ backgroundImage: `url("/image/wax/wax_bcheroes.png")`}}/>
                    </div>
                    <div className={classes.img2_padd}>
                        <div className={classes.img2} style={{ backgroundImage: `url("https://wax.atomichub.io/images/chains/wax_topps.svg")`}}/>
                    </div>
                    <div className={classes.img2_padd}>
                        <div className={classes.img2} style={{ backgroundImage: `url("/image/wax/wax_r2.png")`}}/>
                    </div>
                    <div className={classes.img2_padd}>
                        <div className={classes.img2} style={{ backgroundImage: `url("/image/wax/wax_splinterlands.png")`}}/>
                    </div>
                </div>
                :null
            }
        </div>
    )
}