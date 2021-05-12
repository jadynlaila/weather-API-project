import React, { useState } from 'react'
import JSON from '../weather.json'

const WeeklyPage = ({}) => {
    const [test, setTest] = useState(0)

    const timeStamp = 1620241200;
    const dateObj = new Date(timeStamp * 1000);
    // The time calculators
    const day = dateObj.getUTCDay().toString().padStart(2,0)
    const info = JSON.daily;

    return (
        <>
            <div className="container">
                    <div className="arrows">
                        <div onClick={() => setTest(test - 1)} className="arrowUp" id="arrowUp"></div>
                        <div onClick={() => setTest(test + 1)} className="arrowDown" id="arrowDown"></div>
                    </div>
                    <div className="weatherInfo">
                        <div className="current">
                            <div className="tempImg"></div>
                            <div className="high">H: {info[test].temp.max}</div>
                            <div className="low">L: {info[test].temp.min}</div>
                            <div className="weatherType">The day will be {info[test].weather[0].main}</div>
                            <div className="weekDay"></div>
                        </div>
                        <div className="sub"></div>
                    </div>
            </div>
        </>
    )
}

export default WeeklyPage