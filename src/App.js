import React from 'react'
import SimpleLineChart from './SimpleLineChart'
import Table from './Table'
import SimpleBarChart from './SimpleBarChart'
import styled from 'styled-components/macro'

const StyledMain = styled.main`
  max-width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

function App() {
  return (
    <div>
      <header></header>
      <StyledMain>
        <SimpleLineChart />
        <SimpleBarChart />
        <Table />
      </StyledMain>
      <footer></footer>
    </div>
  )
}

export default App
