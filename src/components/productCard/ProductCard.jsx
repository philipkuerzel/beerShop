import React from 'react'
import { Link, useParams } from 'react-router-dom'

const ProductCard = ({product}) => {

  

  return (
    <>
        
          <img src={product.image_url} />
          <h2>{product.name}</h2>
          <h4 className='yellow'>{product.tagline}</h4>
          <p>{`created by: ${product.name}`}</p>
          <Link to={`/beers/${product._id}`}><button>Details</button></Link>
        
    </>
  )
}

export default ProductCard