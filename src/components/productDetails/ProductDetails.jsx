import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Nav from '../nav/Nav'
import backBtn from "../../assets/img/Back.png"

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
    <>
    <section className='details'>
          <img className='imgBeerDetail' src={product.image_url} />
          <h2>{product.name}</h2>
          <h4>{product.tagline}</h4>

          <div className='divDetails'>
            <div className='fb'>
              <p>first brewed:</p>
              <p>{product.first_brewed}</p>
            </div>
  
            <div className='AL'>
              <p>Attenuation level:</p>
              <p>{product.attenuation_level}</p>
            </div>
          </div>

          <p>{product.description}</p>
          <Link className='backToBeersBtn' to='/beers'><img src={backBtn}/></Link>
    </section>
    <Nav/>
    </>
  )
}

export default ProductDetails