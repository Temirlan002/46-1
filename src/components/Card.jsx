import { Card } from "antd";
import style from "./components.module.css"
import {HeartOutlined, ShoppingCartOutlined} from "@ant-design/icons"


const CardBody = ({ image, title, price, rating, handleAddCart }) => {
  

  return (
    <Card
      className={style.card}
      cover={<img src={image} alt="" />}
      style={{width: 300 }}
    >
      <div style={{fontSize: "20px", display: 'flex', justifyContent: "space-between"}}>
        <HeartOutlined onClick={handleAddCart} style={{cursor: 'pointer'}} />
        <ShoppingCartOutlined style={{cursor: "pointer"}} />
      </div>
      <h2>{title.slice(0, 15)}...</h2>
      <p>Рейтинг: {rating}</p>
      <p style={{fontSize: "20px", fontWeight: '500'}}>Цена: {price}</p>
    </Card>
  )
}

export default CardBody;