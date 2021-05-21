import 'bootstrap/dist/css/bootstrap.min.css';
import DailyPage from './components/DailyPage'
import WeeklyPage from './components/WeeklyPage'
import Navigation from './components/Navigation'
import MoreInfoPage from './components/MoreInfoPage'
import SunIcon from './images/sun.svg'
import { Col, Row, Container, Carousel } from 'react-bootstrap'
import React, { useState } from 'react'
import weather from "./weather.json"
import firstCloud from "./images/cloud1.svg"
import secondCloud from "./images/cloud2.svg"

const App = () => {
  const [showWeekly, setShowWeekly] = useState(false);
  const [showDaily, setShowDaily] = useState(true);
  const [moreInfoPage, setMoreInfoPage] = useState(false);
  return (
    <>
      <Navigation
        onShowDaily={() => {
          // setShowDaily(!showDaily);
          // setShowWeekly(!showWeekly);
          setShowWeekly(false);
          setShowDaily(true);
          setMoreInfoPage(false);
        }}
        showDaily={showDaily}
        onShowWeekly={() => {
          setShowWeekly(true);
          setShowDaily(false);
          setMoreInfoPage(false);
        }}
        showWeekly={showWeekly}

        onMoreInfoPage={() => {
          setShowDaily(false);
          setShowWeekly(false);
          setMoreInfoPage(true);
        }}
        moreInfoPage={moreInfoPage} />




      { showDaily && <DailyPage cloud1={firstCloud} cloud2={secondCloud} slider={weather.hourly} dailyInfo={weather.daily} sunImg={SunIcon} Col={Col} Container={Container} Row={Row} Carousel={Carousel} />}
      {/* { showDaily && <img src={SunIcon} alt="no image" />} */}
      { showWeekly && <WeeklyPage />}
      { moreInfoPage && <MoreInfoPage Col={Col} Row={Row} Container={Container}/>}
      {/* <Button as="input" type="submit" value="Submit" />{' '} */}

    </>
  )
}

export default App;