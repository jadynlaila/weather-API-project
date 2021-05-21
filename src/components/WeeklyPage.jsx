import React, { useState } from 'react'
import JSON from '../weather.json'

const WeeklyPage = ({}) => {
    const [counter, setCounter] = useState(0)
    const [date, setDate] = useState([`Sunday`, `Monday`, `Tuesday`, `Wednesday`, `Thursday`, `Friday`, `Saturday`, `Sunday`]);
    const [subDis, setSubDis] = useState(1);
    const [bottomCount, setBottomCount] = useState(0);

    const timeStamp = JSON.daily[counter].dt;
    const dateObj = new Date(timeStamp * 1000);

    // The time calculators
    const day = dateObj.getUTCDay().toString().padStart(2,0)
    const info = JSON.daily;

    return (
        <>
            <div className="container">
                    <div className="arrows">
                        <div onClick={() => counter != 0 ? (setCounter(counter - 1), setBottomCount(bottomCount - 135), setSubDis(subDis - 1), document.getElementById('arrowDown').style.opacity = '100%') : (document.getElementById('arrowUp').style.opacity = '50%')} className="arrowUp" id="arrowUp"></div>
                        <div onClick={() => counter != 7 ? (setCounter(counter + 1), setBottomCount(bottomCount + 135), setSubDis(subDis + 1), document.getElementById('arrowUp').style.opacity = '100%') : (document.getElementById('arrowDown').style.opacity = '50%')} className="arrowDown" id="arrowDown"></div>
                    </div>
                    <div className="weatherInfo">
                        {subDis == 1 ?
                        <div className="weeklyWeather" id="subOff" style={{bottom: `0px`}}>
                            <div className="tempImg"></div>
                            <div className="high">H: {info[0].temp.max}</div>
                            <div className="low">L: {info[0].temp.min}</div>
                            <div className="weatherType">The day will be {info[0].weather[0].main}</div>
                            <div className="weekDay">{date[0]}</div>
                        </div> : subDis != 1 ?
                        <div className="weeklyWeather" id="subOn" style={{bottom: `${bottomCount}px`}}>
                            <div className="tempImg"></div>
                            <div className="high">Hight: {info[0].temp.max}</div>
                            <div className="low">Low: {info[0].temp.min}</div>
                        </div> : ''
                    }

                        {subDis == 2 ?
                        <div className="weeklyWeather" id="subOff" style={{bottom: `${bottomCount}px`}}>
                            <div className="tempImg"></div>
                            <div className="high">H: {info[1].temp.max}</div>
                            <div className="low">L: {info[1].temp.min}</div>
                            <div className="weatherType">The day will be {info[0].weather[0].main}</div>
                            <div className="weekDay">{date[1]}</div>
                        </div> : subDis != 2 ?
                        <div className="weeklyWeather" id="subOn" style={{bottom: `${bottomCount}px`}}>
                            <div className="tempImg"></div>
                            <div className="high">H: {info[1].temp.max}</div>
                            <div className="low">L: {info[1].temp.min}</div>
                        </div> : ''
                        }

                        {subDis == 3 ?
                        <div className="weeklyWeather" id="subOff" style={{bottom: `${bottomCount}px`}}>
                            <div className="tempImg"></div>
                            <div className="high">H: {info[2].temp.max}</div>
                            <div className="low">L: {info[2].temp.min}</div>
                            <div className="weatherType">The day will be {info[0].weather[0].main}</div>
                            <div className="weekDay">{date[2]}</div>
                        </div> : subDis != 3 ?
                        <div className="weeklyWeather" id="subOn" style={{bottom: `${bottomCount}px`}}>
                            <div className="tempImg"></div>
                            <div className="high">H: {info[2].temp.max}</div>
                            <div className="low">L: {info[2].temp.min}</div>
                        </div> : ''
                        }

                        {subDis == 4 ?
                        <div className="weeklyWeather" id="subOff" style={{bottom: `${bottomCount}px`}}>
                            <div className="tempImg"></div>
                            <div className="high">H: {info[3].temp.max}</div>
                            <div className="low">L: {info[3].temp.min}</div>
                            <div className="weatherType">The day will be {info[0].weather[0].main}</div>
                            <div className="weekDay">{date[3]}</div>
                        </div> : subDis != 4 ?
                        <div className="weeklyWeather" id="subOn" style={{bottom: `${bottomCount}px`}}>
                            <div className="tempImg"></div>
                            <div className="high">H: {info[3].temp.max}</div>
                            <div className="low">L: {info[3].temp.min}</div>
                        </div> : ''
                        }

                        {subDis == 5 ?
                        <div className="weeklyWeather" id="subOff" style={{bottom: `${bottomCount}px`}}>
                            <div className="tempImg"></div>
                            <div className="high">H: {info[4].temp.max}</div>
                            <div className="low">L: {info[4].temp.min}</div>
                            <div className="weatherType">The day will be {info[0].weather[0].main}</div>
                            <div className="weekDay">{date[4]}</div>
                        </div> : subDis != 5 ?
                        <div className="weeklyWeather" id="subOn" style={{bottom: `${bottomCount}px`}}>
                            <div className="tempImg"></div>
                            <div className="high">H: {info[4].temp.max}</div>
                            <div className="low">L: {info[4].temp.min}</div>
                        </div> : ''
                        }

                        {subDis == 6 ?
                        <div className="weeklyWeather" id="subOff" style={{bottom: `${bottomCount}px`}}>
                            <div className="tempImg"></div>
                            <div className="high">H: {info[5].temp.max}</div>
                            <div className="low">L: {info[5].temp.min}</div>
                            <div className="weatherType">The day will be {info[0].weather[0].main}</div>
                            <div className="weekDay">{date[5]}</div>
                        </div> : subDis != 6 ?
                        <div className="weeklyWeather" id="subOn" style={{bottom: `${bottomCount}px`}}>
                            <div className="tempImg"></div>
                            <div className="high">H: {info[5].temp.max}</div>
                            <div className="low">L: {info[5].temp.min}</div>
                        </div> : ''
                        }

                        {subDis == 7 ?
                        <div className="weeklyWeather" id="subOff" style={{bottom: `${bottomCount}px`}}>
                            <div className="tempImg"></div>
                            <div className="high">H: {info[6].temp.max}</div>
                            <div className="low">L: {info[6].temp.min}</div>
                            <div className="weatherType">The day will be {info[0].weather[0].main}</div>
                            <div className="weekDay">{date[6]}</div>
                        </div> : subDis != 7 ?
                        <div className="weeklyWeather" id="subOn" style={{bottom: `${bottomCount}px`}}>
                            <div className="tempImg"></div>
                            <div className="high">H: {info[6].temp.max}</div>
                            <div className="low">L: {info[6].temp.min}</div>
                        </div> : ''
                        }

                        {subDis == 8 ?
                        <div className="weeklyWeather" id="subOff" style={{bottom: `${bottomCount}px`}}>
                            <div className="tempImg"></div>
                            <div className="high">H: {info[7].temp.max}</div>
                            <div className="low">L: {info[7].temp.min}</div>
                            <div className="weatherType">The day will be {info[0].weather[0].main}</div>
                            <div className="weekDay">{date[7]}</div>
                        </div> : subDis != 8 ?
                        <div className="weeklyWeather" id="subOn" style={{bottom: `${bottomCount}px`}}>
                            <div className="tempImg"></div>
                            <div className="high">H: {info[7].temp.max}</div>
                            <div className="low">L: {info[7].temp.min}</div>
                        </div> : ''
                        }
                    </div>
            </div>
        </>
    )
}
// test=0 ? document.getElementById('arrowUp').style.opacity = "50%" : ""
// test != 0 ? setTest(test - 1) : ""
export default WeeklyPage