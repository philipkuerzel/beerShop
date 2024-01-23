import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

const ProductDetails = () => {
  const getID = useParams()
  const [product, setProduct] = useState([])
  console.log(getID);

  let apiLinkProduct = `https://ih-beers-api2.herokuapp.com/beers/${getID.beerId}`

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
          <img className='imgBeerDetail' src={product.image_url} />
          <h3>{product.name}</h3>
          <h4>{product.tagline}</h4>

          <div>
            <p>first brewed:</p>
            <p>{product.first_brewed}</p>
          </div>

          <div>
            <p>Attenuation level:</p>
            <p>{product.attenuation_level}</p>
          </div>

          <p>{product.description}</p>
          <Link to='/beers'><button>Back</button></Link>
    </section>
  )
}

export default ProductDetails