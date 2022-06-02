import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { SliderProps } from './Slider.props'
import { Mousewheel } from "swiper";

import 'swiper/css'

export const Slider: React.FC<SliderProps> = ({children, classname}):JSX.Element => {
  return (
    <Swiper
      className={classname} 
      slidesPerView={"auto"}
      centeredSlides={true}
      spaceBetween={30}
      loop={true}
      mousewheel={false}
      modules={[Mousewheel]}
      onSlideChange={() => console.log()}
      onSwiper={(swiper) => console.log()}
    >
      {children?.map((slide, index) => (
        <SwiperSlide style={{width: 'min-content'}} key={index}> {slide} </SwiperSlide>)
      )}
    </Swiper>
  )
}