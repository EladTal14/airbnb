import React from 'react'
import { connect } from 'react-redux'
import { CheckBar } from '../cmps/CheckBar'
import { NearLocations } from '../cmps/NearLocations'

const _Home = (props) => {
  return (
    <div className="home">
      <CheckBar />
      <h2>Explore nearby</h2>
      <NearLocations />
      <h2>Live anywhere</h2>
      <div className="home-category">
        <a href="">Entire homes</a>
        <a href=""> Unique stays</a>
        <a href="">Cabins and cottages</a>
        <a href="">Pets allowed</a>
      </div>
      <div>
        <h2>Your world is worth sharing
Turn your extra space into your next opportunity.</h2>
        <img src="" alt="" />
        <button>Become a Host</button>
      </div>
      <h3>Experience the world
Activities to book with your upcoming stay.</h3>
    </div >

  )
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export const Home = connect(mapStateToProps, mapDispatchToProps)(_Home)

