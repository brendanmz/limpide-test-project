import React, { useState } from 'react'
import data from './data'
import styled from 'styled-components'

const StyledTable = styled.table`
  width: 100%;
`

const Tr = styled.tr`
  border: 1px solid;
`

const TableWrapper = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;
`

const Button = styled.button`
  border: none;
  background-color: #d7d7fd;
  height: 2rem;
  cursor: pointer;
  font-size: 1rem;
  margin: 0 0.3rem;

  &:active {
    background-color: #bababf;
  }
`

const TableFilter = ({ setFilterValue }) => {
  return (
    <div>
      <span>Filter: </span>
      <Button value='all' onClick={() => setFilterValue('all')}>
        All
      </Button>
      <Button value='price>0' onClick={() => setFilterValue('price>0')}>
        Closing price &gt; 0
      </Button>
      <Button
        value='offexchtradevolumeeex>0'
        onClick={() => setFilterValue('offexchtradevolumeeex>0')}
      >
        Volume traded in OFF &gt; 0
      </Button>
      <Button
        value='onexchtradevolumeeex>0'
        onClick={() => setFilterValue('onexchtradevolumeeex>0')}
      >
        Volume traded in ON &gt; 0
      </Button>
    </div>
  )
}

const Table = () => {
  const items = data.results.items
  const [filterValue, setFilterValue] = useState('all')

  let filteredItems
  switch (filterValue) {
    case 'all':
      filteredItems = Object.keys(items)
      break
    case 'price>0':
      filteredItems = Object.keys(items).filter(item => {
        return items[item].close > 0
      })
      break
    case 'offexchtradevolumeeex>0':
      filteredItems = Object.keys(items).filter(item => {
        return items[item].offexchtradevolumeeex > 0
      })
      break
    case 'onexchtradevolumeeex>0':
      filteredItems = Object.keys(items).filter(item => {
        return items[item].onexchtradevolumeeex > 0
      })
      break
    default:
      filteredItems = Object.keys(items)
      break
  }

  return (
    <TableWrapper>
      <TableFilter setFilterValue={setFilterValue} filterValue={filterValue} />
      <StyledTable>
        <thead>
          <tr>
            <th>Closing price (€ / MWh)</th>
            <th>Volume traded in OFF</th>
            <th>Volume traded in ON</th>
            <th>Date of exhange</th>
          </tr>
        </thead>
        <tbody>
          {filteredItems.map(key => (
            <Tr key={key}>
              <td>{items[key].close}</td>
              <td>{items[key].offexchtradevolumeeex}</td>
              <td>{items[key].onexchtradevolumeeex}</td>
              <td>{items[key].tradedatetimegmt}</td>
            </Tr>
          ))}
        </tbody>
      </StyledTable>
    </TableWrapper>
  )
}

export default Table
