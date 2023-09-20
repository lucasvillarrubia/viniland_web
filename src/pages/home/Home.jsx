import React from 'react'
import Hero from '../../components/hero/Hero'
import Categories from '../../components/categories/Categories'
import Products from '../../components/products/Products'
import Recommendations from '../../components/recommendations/Recommendations'

const Home = () => {
  return (
        <>
                <Hero />
                <Recommendations />
                <Categories />
                <Products />
        </>
  )
}

export default Home