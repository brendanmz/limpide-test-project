import React from 'react'
import data from './data.json'
import {
  LineChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Line,
} from 'recharts'
const SimpleLineChart = () => {
  const items = data['results']['items']

  return (
    <>
      <LineChart
        width={1100}
        height={600}
        data={items}
        margin={{ top: 5, right: 30, left: 20, bottom: 20 }}
      >
        <XAxis
          dataKey='tradedatetimegmt'
          label={{
            offset: -20,
            value: 'Date',
            position: 'insideBottom',
          }}
        />
        <YAxis
          dataKey='close'
          label={{
            value: 'Closing price (€ / MWh)',
            angle: -90,
            position: 'insideLeft',
          }}
        />
        <CartesianGrid strokeDasharray='3 3' />
        <Tooltip />
        <Legend verticalAlign='top' height={36} />
        <Line
          type='monotone'
          dataKey='close'
          stroke='#8884d8'
          activeDot={{ r: 8 }}
        />
      </LineChart>
    </>
  )
}

export default SimpleLineChart
