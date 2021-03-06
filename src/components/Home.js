import React from 'react'
import styled from 'styled-components'
import ImgSlider from './ImgSlider'
import MoviesSlider from './movieRecs/MoviesSlider'
import Viewers from './Viewers'

function Home() {
  const MovieBarOne = {title: "Recomended for You",
                        images: {
                          img1: "/images/incredibles2.jfif",
                        }};

  return (
    <Container>
      <ImgSlider />

      <Viewers />

      <MoviesSlider title={MovieBarOne.title} image = {MovieBarOne.images} />
    </Container>
  )
}

export default Home


// Styled Components
const Container = styled.main`
  overflow-x: hidden;
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
  position: relative;

  &:before {
    background: url("/images/home-background.png") center center / cover 
    no-repeat fixed;
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
  }
`