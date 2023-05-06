import React from 'react'
import background from "../assets/login.jpg"
import styled from 'styled-components'

function Background() {
  return (
    <Container>
      <img src={background} alt="background"/>
    </Container>
  )
}

export default Background

const Container = styled.div`
height :100vh;
width: 100vw;
img{
  height:100vh;
  width:100vw;
}`;