import 'bootstrap/dist/css/bootstrap.min.css';
import DailyPage from './components/DailyPage'
import WeeklyPage from './components/WeeklyPage'
import Navigation from './components/Navigation'
import SunIcon from './images/sun.svg'
import { Col, Row, Container  } from 'react-bootstrap'
import React, { useState } from 'react'
import weather from "./weather.json"
import firstCloud from "./images/cloud1.svg"
import secondCloud from "./images/cloud2.svg"

const App = () => {
  const [showWeekly, setShowWeekly] = useState(false);
  const [showDaily, setShowDaily] = useState(true);
  return (
    <>
      <Navigation onShowDaily={() =>{
        // setShowDaily(!showDaily);
        // setShowWeekly(!showWeekly);
        setShowWeekly(false);
        setShowDaily(true);
      }}
        showDaily={showDaily}
        onShowWeekly={() => {
          setShowWeekly(true);
          setShowDaily(false);
        }}
        showWeekly={showWeekly} />
        
      { showDaily && <DailyPage cloud1={ firstCloud } cloud2={ secondCloud } slider={weather.hourly} dailyInfo={weather.daily} sunImg={SunIcon} Col={Col} Container={Container} Row={Row}/>}
      {/* { showDaily && <img src={SunIcon} alt="no image" />} */}
      { showWeekly && <WeeklyPage/>}
      {/* <Button as="input" type="submit" value="Submit" />{' '} */}
    </>
  )
}

export default App;