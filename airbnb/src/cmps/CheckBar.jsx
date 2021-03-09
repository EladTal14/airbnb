

export function CheckInBar() {
  return (
    <div className="check-in-bar flex" >
      <button className="check-in-bar-btn"><p> Location</p><p>Where are you going?</p></button>
      <button className="check-in-bar-btn"><p>Check in</p><p>Add dates</p></button>
      <button className="check-in-bar-btn"><p>Check out</p><p>Add dates</p> </button>
      <button className="check-in-bar-btn"><p>Guests</p><p>Add guests</p></button>
      <button className="check-in-bar-search-btn flex"><img src={require('../assets/img/search-icon.svg').default} alt="" /></button>
    </div>
  )
}
