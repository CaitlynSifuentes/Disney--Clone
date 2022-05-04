import React from 'react'
import styled from 'styled-components'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MovieImg from './MovieImg';

function MoviesSlider(props) {
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1, 
        autoplay: true
    }

  return (
    <Content>
        <h4>{props.title}</h4>
        <Carousel {...settings}>
          <MovieImg image={props.image}/>
        </Carousel>
    </Content>
  )
}

export default MoviesSlider

// STYLED
const Carousel = styled(Slider) `
    
`

const Content = styled.div `

`