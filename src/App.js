import 'bootstrap/dist/css/bootstrap.min.css';
import DailyPage from './components/DailyPage'
import WeeklyPage from './components/WeeklyPage'
import Navigation from './components/Navigation'
import SunIcon from './images/sun.png'
import Carousel from './components/Carousel'
import React, { useState } from 'react'



const App = () => {
  const [showWeekly, setshowWeekly] = useState(true);
  const [showDaily, setshowDaily] = useState(true);



  return (
    <>
      <Navigation />
      { showDaily && <DailyPage />}
      { showDaily && <img src={SunIcon} alt="no image" />}
      { showWeekly && <WeeklyPage />}
      {/* {console.log(weather.hourly[0].dt)} */}
      <Carousel/>
    </>
  )
}



export default App;