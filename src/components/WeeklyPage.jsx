import React, { useState } from 'react'
import JSON from '../weather.json'

const WeeklyPage = ({}) => {
    const [test, setTest] = useState(0)
    const [date, setDate] = useState('');

    const timeStamp = JSON.daily[test].dt;
    const dateObj = new Date(timeStamp * 1000);

    // The time calculators
    const day = dateObj.getUTCDay().toString().padStart(2,0)
    const info = JSON.daily;

    return (
        <>
            <div className="container">
                    <div className="arrows">
                        <div onClick={() => test != 0 ? (setTest(test - 1), document.getElementById('arrowDown').style.opacity = '100%') : document.getElementById('arrowUp').style.opacity = '50%'} className="arrowUp" id="arrowUp"></div>
                        <div onClick={() => test != 7 ? (setTest(test + 1), document.getElementById('arrowUp').style.opacity = '100%') : document.getElementById('arrowDown').style.opacity = '50%'} className="arrowDown" id="arrowDown"></div>
                    </div>
                    <div className="weatherInfo">
                        <div className="current">
                            <div className="tempImg"></div>
                            <div className="high">H: {info[test].temp.max}</div>
                            <div className="low">L: {info[test].temp.min}</div>
                            <div className="weatherType">The day will be {info[test].weather[0].main}</div>
                            <div className="weekDay">
                                {() => day == '00' ? setDate(date = 'Sunday') : setDate(date = 'Bro?')}
                                {date}</div>
                        </div>
                        <div className="sub"></div>
                    </div>
            </div>
        </>
    )
}
// test=0 ? document.getElementById('arrowUp').style.opacity = "50%" : ""
// test != 0 ? setTest(test - 1) : ""
export default WeeklyPage