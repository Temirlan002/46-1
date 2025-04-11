import { Col, Spin } from "antd";
import { useProducts } from "../api/useProducts";
import CardBody from "./Card";
import Swiper from "swiper/react";
import Slider from "./Slider";
import { useStore } from "../features/store";



const Products = () => {
  const { data, isLoading } = useProducts()
  const {addToCart} = useStore()

  if (isLoading) return <Spin />

  return (
    <>
      <div style={{display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center'}}>
        {data.products.map((product) => (
          <Col span={6} key={product.id}>
            <CardBody
              image={product.thumbnail}
              title={product.title}
              description={product.description}
              price={product.price}
              rating={product.rating}
              handleAddCart={() => addToCart(product)}
            />
          </Col>
          ))
        }
      </div>
    
      <p style={{fontSize: "50px", marginTop: "100px"}}>Популярные товары</p>
      <div style={{display: 'flex'}}>
        <Slider
          data={data.products}
          slidesPerView={3}
          sliceIndex={5}
        />
      </div>
    </>
  )
}

export default Products;