import { Swiper, SwiperSlide } from "swiper/react";
import CardBody from "./Card";
import { Navigation} from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'


const Slider = ({data, slidesPerView, sliceIndex}) => {

  return (
    <Swiper
      direction="horizontal"
      navigation
      modules={[Navigation]}
      slidesPerView={slidesPerView}
      className="mySwiper"
    >
      {data.slice(0, sliceIndex).map((product) => (
        <SwiperSlide key={product.id}>
          <CardBody
              image={product.thumbnail}
              title={product.title}
              description={product.description}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default Slider;