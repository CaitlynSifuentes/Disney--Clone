import React from 'react'
import styled from 'styled-components'

function MovieImg(props) {
  return (
    <Wrap>
        <img src={props.image.img1} />
    </Wrap>
  )
}

export default MovieImg

// STYLED
const Wrap = styled.div `

`