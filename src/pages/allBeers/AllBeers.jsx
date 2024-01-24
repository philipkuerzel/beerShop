import React, { useEffect, useState } from 'react'
import Nav from '../../components/nav/Nav'
import axios from 'axios'
import ProductCard from '../../components/productCard/ProductCard'

const AllBeers = () => {

  const [products, setProducts] = useState([])

  const api = "https://ih-beers-api2.herokuapp.com/beers"

  useEffect(() => {
    const fetchApi = async () => {
      const resp = await axios.get(api)
      setProducts(resp.data)
    }
    fetchApi()
  }, [])
  
  return (
    <>
          {products.map((product, index) => {
            return(
              <div className='getAllBeers' key={index}>
                <ProductCard
                  product={product}
                  />
              </div>
            )
          })}
        
      <Nav/>
    </>
  )
}

export default AllBeers