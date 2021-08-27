import React from 'react';
import {
  ResponsiveContainer,
  ComposedChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
import classes from './victory.module.sass'
import moment from 'moment'

import { Text } from '../../../../../component/ui/text'
import { Span } from '../../../../../component/ui/span'

import { dataSort } from './date'

export const Victory2 = ({ dataSource }) => {
    
  const data = dataSort(dataSource)
    
    return (
        <div className={classes.conteiner}>
            <ResponsiveContainer>
              <ComposedChart
                data={data}
                margin={{
                  top: 20,
                  right: 20,
                  bottom: 20,
                  left: 20,
                }}
              >
                <CartesianGrid stroke="#f5f5f5" strokeDasharray="0.1" />
                <XAxis
                  interval="preserveStart"
                  tick={{fontSize: 17}} 
                  dataKey="name" 
                  scale="band" 
                  stroke="rgb(191, 190, 190)"
                  minTickGap={20}
                />
                <YAxis  
                  ticks={dataSource.gr_3.yax} 
                  tick={{fontSize: 17, fontFamily: `'Montserrat', sans-serif'`, wordWrap: "break-word"}}
                  tickFormatter={(label) => `${label}\nWAX`}
                  width={80}
                  yAxisId="left" 
                  stroke="rgb(191, 190, 190)"
                  padding={{ bottom: 5 }} 
                  tickCount={5} 
                  allowDataOverflow={true} 
                />
                <Tooltip
                  content={<CustomizedTooltip />}
                />
                <Line yAxisId="left" type="monotone" dataKey="uv" stroke="#ea923e" fill={"#ea923e"} activeDot={false} strokeWidth={2}/>
              </ComposedChart>
            </ResponsiveContainer>
        </div>
    )
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
}

const CustomizedTooltip = ({ active, payload }) => {
  if(active) {
    const data = payload[0].payload.name
    const date = data.split(".")
    const time = new Date(date[2], date[1], date[0],getRandomInt(0, 23), getRandomInt(0, 60))

    return <div style={{
      background: '#1a203c',
      padding: "30px",  
      width: '100%',
      maxWidth: 400,
      border: 0,
      borderRadius: 20,
      boxShadow: "0 3px 20px rgba(0, 0, 0, 0.4)",
    }}>
      <Text weight={800}>{moment(time).format("DD.MM.YYYY, HH:MM")}</Text>
      <Text  weight={400}>Mint:&nbsp;&nbsp;<Text weight={800}>#{getRandomInt(50, 1000)}</Text></Text>
      <Text  weight={400}>Median:&nbsp;&nbsp;
        <Text weight={600}>
          <Span color={"#42ba67"}>{(payload[0].payload.uv * 5.43).toFixed(2)} WAX</Span>
        </Text>&nbsp;&nbsp;
        <Text weight={400}>
          (${payload[0].payload.uv}.{Math.round(Math.random() * 100)})
        </Text>
      </Text>
    </div>
  } else {
    return null
  }
}