import React from 'react'
import data from './data'

const Table = () => {
  const items = data['results']['items']
  return (
    <table>
      <thead>
        <tr>
          <th>Closing price (€ / MWh)</th>
          <th>Volume traded in OFF</th>
          <th>Volume traded in ON</th>
          <th>Date of exhange</th>
        </tr>
      </thead>
      <tbody>
        {Object.keys(items).map(key => (
          <tr key={key}>
            <td>{items[key]['close']}</td>
            <td>{items[key]['offexchtradevolumeeex']}</td>
            <td>{items[key]['onexchtradevolumeeex']}</td>
            <td>{items[key]['tradedatetimegmt']}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default Table
