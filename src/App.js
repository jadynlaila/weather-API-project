import 'bootstrap/dist/css/bootstrap.min.css';
import DailyPage from './components/DailyPage'
import WeeklyPage from './components/WeeklyPage'
import Navigation from './components/Navigation'
import SunIcon from './images/sun.png'
import { Button } from 'react-bootstrap'
import React, { useState } from 'react'
import weather from "./weather.json"



const App = () => {
  const [showWeekly, setShowWeekly] = useState(false);
  const [showDaily, setShowDaily] = useState(true);
  return (
    <>
    { showDaily && <DailyPage slider={ weather.hourly } dailyInfo={ weather.daily } />}
      <Navigation onShowDaily={() =>{
        setShowDaily(!showDaily);
        setShowWeekly(!showWeekly);
      }}
        showDaily={showDaily}

        onOpenWeekly={() => {
          setShowWeekly(!showWeekly)
        }}
        showWeekly={showWeekly} />
      { showDaily && <DailyPage />}
      { showDaily && <DailyPage slider={ weather.hourly } />}
      { showDaily && <img src={SunIcon} alt="no image" />}
      { showWeekly && <WeeklyPage weather={weather} />}
      <Button as="input" type="submit" value="Submit" />{' '}
      {/* {console.log(weather.hourly[0].dt)} */}
    </>
  )
}


export default App;