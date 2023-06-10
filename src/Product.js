import React from 'react'
import { useState } from 'react'

const Product = () => {
    const [data, setData] = useState([])
  
    fetch('https://fakestoreapi.com/products?limit=12')
      .then((res) => res.json())
      .then((datas) => setData(datas))
  
    return (
      <div id="Product">
  
  
        {
          data.map((dat) => {
            const { id, title, price, description, category, image } = dat
            return <div>
              <img src={image}  />
              <h1>{title}</h1>
              <p>{description}</p>
              <h4>{price}</h4>
            </div>
          })
        }
  
      </div>
    )
  }
  

export default Product