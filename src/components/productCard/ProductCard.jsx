import React from 'react'
import { Link, useParams } from 'react-router-dom'

const ProductCard = ({product}) => {

  

  return (
    <>
        
          <article className='listBeer'>
            <img className='imgBeers' src={product.image_url} />
  
            <div className='infoBeers'>
              <h3>{product.name}</h3>
              <h4 className='yellow'>{product.tagline}</h4>
              <p>{`contributed by: ${product.contributed_by.slice(0, product.contributed_by.indexOf("<"))}`}</p>
              <Link to={`/beers/${product._id}`}><button className='btnDetails'>Details</button></Link>
            </div>
          </article>
        
    </>
  )
}

export default ProductCard