import 'bootstrap/dist/css/bootstrap.min.css';
import DailyPage from './components/DailyPage'
import WeeklyPage from './components/WeeklyPage'
import Navigation from './components/Navigation'
import SunIcon from './images/sun.png'
import React, { useState } from 'react'
import weather from "./weather.json"



const App = () => {
  const [showWeekly, setshowWeekly] = useState(true);
  const [showDaily, setshowDaily] = useState(true);

  return (
    <>
      <Navigation />
      { showDaily && <DailyPage />}
      { showDaily && <img src={SunIcon} alt="no image" />}
      { showWeekly && <WeeklyPage weather={weather}/>}
      {/* {console.log(weather.hourly[0].dt)} */}
    </>
  )
}


export default App;