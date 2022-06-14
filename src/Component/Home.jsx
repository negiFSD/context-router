import React from 'react'
import { faker } from '@faker-js/faker';

function    Home() {
  const productArrays = [...faker.datatype.array(20)].map(()=>({
    id: faker.datatype.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: faker.image.imageUrl()
  }))
  console.log(productArrays);
  return (
    <div>Home</div>
  )
}

export default Home
