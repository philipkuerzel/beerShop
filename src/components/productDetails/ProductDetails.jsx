import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import "./details.css"

const ProductDetails = () => {
  const getID = useParams()
  const [product, setProduct] = useState([])
  console.log(getID);

  let apiLinkProduct =  `https://ih-beers-api2.herokuapp.com/beers/${getID.beerId}`

  useEffect(() => {
    const apiFetch = async () => {
      const resp = await axios.get(apiLinkProduct)
      console.log(resp);
      setProduct(resp.data)
    }
    apiFetch()
  }, [])


  return (
    <section className='details'>
        
          <img className='productDetails' src={product.image_url} />
          <h3>{product.name}</h3>
          <h4>{product.tagline}</h4>
          <p>{product.first_brewed}</p>
          <p>{product.attenuation_level}</p>
          <p>{product.description}</p>
          <Link to='/beers'><button>Back</button></Link>
        
    </section>
  )
}

export default ProductDetails