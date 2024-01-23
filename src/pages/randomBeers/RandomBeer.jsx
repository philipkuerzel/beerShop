import React, { useEffect, useState } from 'react'
import Nav from '../../components/nav/Nav'
import axios from 'axios'

const RandomBeer = () => {

  const [product, setProduct] = useState([])
  const api = "https://ih-beers-api2.herokuapp.com/beers/random"

  useEffect(() => {
    const fetchApi = async () => {
      const resp = await axios.get(api)
      console.log(resp);
      setProduct(resp.data)
    }
    fetchApi()
  }, [])
  
  return (
    <>
      <section className='details'>
        <img className='imgBeerDetail' src={product.image_url} />
        <h3>{product.name}</h3>
        <h4 className='yellow'>{product.tagline}</h4>
        <p>{product.first_brewed}</p>
        <p>{product.attenuation_level}</p>
        <p>{product.description}</p>
      </section>
      <Nav/>
    </>
  )
}

export default RandomBeer