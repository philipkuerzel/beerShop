import React from 'react'
import { Link } from 'react-router-dom'
import beers from "../../assets/img/beers.jpg"
import randombeer from "../../assets/img/randombeer.png"


const Home = () => {
  return (

    <>
    <h1>The HomeBrewery</h1>
    <section className='home'>
        <div>
          <div className='beersHome'>
            <img src={beers} alt="" />
            <Link className='showBeers' to='/beers'>All Beers</Link>
            </div> 
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam facere sequi cum officiis modi.</p>
        </div>

        <div>
          <div className='beersHome'>
            <img src={randombeer} alt="" />
            <Link className='showBeers' to='/random'>Random Beer</Link>
            </div> 
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam facere sequi cum officiis modi.</p>
        </div>   
    </section>
    </>
  )
}

export default Home