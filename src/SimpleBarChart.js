import React from 'react'
import data from './data.json'
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Bar,
  BarChart,
  ResponsiveContainer,
} from 'recharts'
const SimpleBarChart = () => {
  const items = data['results']['items']

  // Items with volume traded at 0 or null do not need to be shown on the graph
  const filteredItems = items.filter(item => {
    return (
      (item['offexchtradevolumeeex'] !== null &&
        item['offexchtradevolumeeex'] !== 0) ||
      (item['onexchtradevolumeeex'] !== null &&
        item['onexchtradevolumeeex'] !== 0)
    )
  })

  return (
    <ResponsiveContainer width='90%' height={500}>
      <BarChart
        data={filteredItems}
        margin={{ top: 20, right: 40, bottom: 20, left: 40 }}
      >
        <CartesianGrid strokeDasharray='3 3' />
        <XAxis
          dataKey='tradedatetimegmt'
          label={{
            offset: -20,
            value: 'Date',
            position: 'insideBottom',
          }}
        />
        <YAxis
          label={{
            offset: -30,
            value: 'Trade Volume',
            angle: -90,
            position: 'insideLeft',
          }}
        />
        <Tooltip />
        <Legend verticalAlign='top' height={36} />
        <Bar
          dataKey='offexchtradevolumeeex'
          name='Volume traded in OFF'
          fill='#8884d8'
        />
        <Bar
          dataKey='onexchtradevolumeeex'
          name='Volume traded in ON'
          fill='#82ca9d'
        />
      </BarChart>
    </ResponsiveContainer>
  )
}

export default SimpleBarChart
