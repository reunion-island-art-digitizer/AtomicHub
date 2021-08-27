import React, { useState, } from 'react'
import { useSelector } from 'react-redux'
import Slider from "react-slick";

import { SmallCard } from '../../../../../component/smallCard'
import { Buy } from '../../../../../component/buy'
import { Modal } from '../../../../../component/modal'
import { Load } from '../../../../../component/load'
import { change } from '../../../../../lib/buy'

import { Auth } from '../../../../../component/auth'

import { settings } from './setting'

import classes from './slick.module.sass'

export const SlickSlider = ({ data }) => {

  const [ auth, setAuth ] = useState(false)
    
    const wax = useSelector(state => state.app.user.wax)
    const userName = useSelector(state => state.app.user.login)
    const monets = useSelector(state => state.app.user.monets)
    
    const [ load, setLoad ] = useState(false)
    const [ status, setStatus ] = useState(false)

    const Buyers = async () => {
        setStatus(false)
        setLoad(true)

        const res = await change(wax, monets, userName)
        if(res.status) {
            setStatus(true)
        } else {
            setLoad(res)
        }
    }

    const AuthLoad = () => {
        setStatus(false)
        setAuth(true)
    }

    const [ buyData, setBuyData ] = useState(false)
    const Desc = (v) => {
      setBuyData(v)
      setStatus(true)
    }
    return (
      <>
        {
          auth ? <Auth close={() => setAuth(false)}/> : null
        }
        {
          load ? <Modal close={() => setLoad(false)} ixs>
              <Load status={load} close={() => setLoad(false)} re={() => Buyers()}/>
            </Modal>
          : null
        }
       {
          status ? <Modal max={800} close={() =>setStatus(false)}>
              <Buy
                  buy={() =>  userName ? Buyers() : AuthLoad()}
                  desc={buyData} 
                  close={() =>setStatus(false)}
                />
            </Modal> : null
        }
        <div className={classes.padding}>
        <Slider {...settings} >
            {
                data.map((v, i) => {
                    return (
                      <div>
                        <div key={i} className={classes.conteiner}>
                            <SmallCard buy={() => Desc(v)} lip={75} color={"#ea923e"} width={205} imgSize={{ width: 127, height: 185 }} data={v} stasus/>
                        </div>
                      </div>
                    )
                })
            }
        </Slider>
        </div>
       </>
    )
}