import { connect } from 'react-redux'
import { CheckInBar } from '../cmps/CheckBar'
import { NearLocations } from '../cmps/NearLocations'

const _Home = (props) => {
  return (
    <div className="home main-container">
      <CheckInBar />
      <div className=" hero flex column align-center ">
        <img src="https://res.cloudinary.com/dxh5keaol/image/upload/v1614586429/samples/airbnb/types-of-homes-hero_mf7426.jpg" alt="" />
        <h3 className="white fs28">Made possible by Hosts.</h3>
      </div>
      <h2>Explore nearby</h2>
      <NearLocations />
      <h2>Live anywhere</h2>
      <div className="home-category flex space-between">
        <a href="/" className="flex column">
          <img src="https://res.cloudinary.com/dxh5keaol/image/upload/w_300/v1614589528/samples/airbnb/entire_home_ptdaei.jpg" alt="" />
          <span> Entire homes</span>
        </a>
        <a href="/" className="flex column">
          <img src="https://res.cloudinary.com/dxh5keaol/image/upload/w_300/v1614589525/samples/airbnb/uniquestay_x3ni2b.jpg" alt="" />
          <span> Unique stays</span></a>
        <a href="/" className="flex column">
          <img src="https://res.cloudinary.com/dxh5keaol/image/upload/w_400/v1614589526/samples/airbnb/cabin_xcfbsg.jpg" alt="" />
          <span> Cabins and cottages</span>
        </a>
        <a href="/" className="flex column">
          <img src="https://res.cloudinary.com/dxh5keaol/image/upload/w_400/v1614589525/samples/airbnb/pets_allowed_i0v1bq.jpg" alt="" />
          <span>Pets allowed</span></a>
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

