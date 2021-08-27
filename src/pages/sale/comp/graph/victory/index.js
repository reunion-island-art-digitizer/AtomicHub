import React from 'react';
import {
  ResponsiveContainer,
  ComposedChart,
  Line,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
import classes from './victory.module.sass'

import { Text } from '../../../../../component/ui/text'
import { Span } from '../../../../../component/ui/span'

import { dataSort } from './date'

export const Victory = ({ dataSource }) => {

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
                  tick={{fontSize: 16}} 
                  dataKey="name"
                  padding={{ right: 40 }}
                  interval="preserveStart"
                  scale="band" 
                  stroke="rgb(191, 190, 190)"
                  minTickGap={20} 
                />
                <YAxis  
                  ticks={dataSource.gr_1.yax}
                  tick={{fontSize: 16, fontFamily: `'Montserrat', sans-serif'`}}
                  tickFormatter={(label) => `${label}\nUSD`}
                  width={80}
                  yAxisId="left" 
                  stroke="rgb(191, 190, 190)"
                  padding={{ bottom: 5 }} 
                  tickCount={5} 
                  allowDataOverflow={true} 
                />
                <YAxis
                  width={40}
                  ticks={dataSource.gr_2.yax} 
                  tick={{fontSize: 17, fontFamily: `'Montserrat', sans-serif'`}}
                  yAxisId="right" 
                  orientation='right' 
                  stroke="rgb(191, 190, 190)"
                />
                <Tooltip 
                  content={<CustomizedTooltip />}
                />
                <Bar yAxisId="right" dataKey="pv" barSize={15} minPointSize={1} fill="rgb(68, 40, 60)" />
                <Line yAxisId="left" type="monotone" dataKey="uv" stroke="#ea923e" dot={false} activeDot={false} strokeWidth={2}/>
              </ComposedChart>
            </ResponsiveContainer>
        </div>
    )
}

const CustomizedTooltip = ({ active, payload, label }) => {
  if(active) {
    return <div style={{
      background: '#1a203c',
      padding: "30px",
      width: '100%',
      maxWidth: 400,
      border: 0,
      borderRadius: 20,
      boxShadow: "0 3px 20px rgba(0, 0, 0, 0.4)",
    }}>
      <Text  weight={400}>Date:&nbsp;&nbsp;<Text weight={800}>{label}</Text></Text>
      <Text  weight={400}>Sales:&nbsp;&nbsp;<Text weight={800}>{payload[0].payload.pv}</Text></Text>
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
  