import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <section className='home'>

        <div>
          <div className='beers'>
            <img src="" alt="" />
            <Link to='/beers'><button>All Beers</button></Link>
            </div> 
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam facere sequi cum officiis modi.</p>
        </div>

        <div>
          <div className='beers'>
            <img src="" alt="" />
            <Link to='/random'><button>Random Beer</button></Link>
            </div> 
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam facere sequi cum officiis modi.</p>
        </div>   
    </section>
    
  )
}

export default Home