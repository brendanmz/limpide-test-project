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
  ResponsiveContainer,
} from 'recharts'
const SimpleLineChart = () => {
  const items = data['results']['items']

  return (
    <ResponsiveContainer width='90%' height={500}>
      <LineChart
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
          name='Closing price (€ / MWh)'
          stroke='#8884d8'
          activeDot={{ r: 8 }}
          dot={false}
        />
      </LineChart>
    </ResponsiveContainer>
  )
}

export default SimpleLineChart
