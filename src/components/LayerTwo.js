import React from 'react'
import Detail from './Detail'
import styled from 'styled-components'
import Blank from './Blank'

function LayerTwo() {
  return (
    <Container>
        <Blank />
        <Detail />
    </Container>
  )
}

const Container = styled.div`
    width: 100%;
    z-index: 1000;

`
export default LayerTwo