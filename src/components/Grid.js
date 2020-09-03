import React from 'react'
import styled from 'styled-components'

const Wrap = styled.div`
  display: grid;
  height: 100vh;
  grid-template-columns: repeat(auto-fit, minmax(10%, 1fr));
`

const Grid = ({ children, className }) => {
  return (
    <Wrap className={className}>
      {children}
    </Wrap>
  )
}

export default Grid
