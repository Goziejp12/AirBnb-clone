import React from 'react'
import data from './data'
import Navbar from './Navbar'
import Hero from './Hero'
import Card from './Card'
import Footer from '../Footer'

export default function App() {
  let cardData = data.map(info => {
    return (
    /* info={info} grabs all the properties and their respective values in the data object */
      <Card
        info={info}
      />
    )
  })
  return (
    <div>
      <Navbar />
      <Hero />
      <div className='main'>
        {cardData}
      </div>
      <Footer />
    </div>
  )
}
