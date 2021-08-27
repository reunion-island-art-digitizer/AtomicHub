import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ADD_WIDTH, ADD_MONEY, SET_DEVICE_PHONE } from './CONSTANT/redux'

import { GeTMoney } from './store/action/auth/register'

import { 
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'

import { RouterLink } from './pages'
import { Layout } from './layout'

const App = () => {
  const dispatch = useDispatch()

  const wax = useSelector(state => state.app.user.wax)
  const log = useSelector(state => state.app.user.login)

  useEffect(async() => {
    if(wax) {
      const money = await GeTMoney(log)
      dispatch({ type: ADD_MONEY, money: money.data.result })
    }
  }, [wax])

  useEffect(() => {
    dispatch({ // ширина екрана при запуске
      type: ADD_WIDTH,
      width: window.innerWidth
    })

    const result = navigator.userAgent.toLowerCase().match(/(ipad|iphone|android)/)
    if(!!result) {
      dispatch({ 
        type: SET_DEVICE_PHONE,
        phone: true
      })
    } else {
      dispatch({ 
        type: SET_DEVICE_PHONE,
        phone: false
      })
    }
  }, [true])

  useEffect(() => {
    window.addEventListener('resize', ()=>{
      dispatch({ // ширина екрана 
        type: ADD_WIDTH,
        width: window.innerWidth
      })

      const result = navigator.userAgent.toLowerCase().match(/(ipad|iphone|android)/)
      if(!!result) {
        dispatch({ 
          type: SET_DEVICE_PHONE,
          phone: true
        })
      } else {
        dispatch({ 
          type: SET_DEVICE_PHONE,
          phone: false
        })
      }
    })
  // eslint-disable-next-line
  }, [true])

  return (
    <Router>
      <Switch>
        
          {
            RouterLink.map((v, i) => {
              return (
                <Route key={i} path={v.path}>
                  <Layout>
                    <v.component />
                  </Layout>
                </Route>
              )
            })
          }

        <Redirect to="/404" />
      </Switch>
    </Router>
  );
}

export default App;
