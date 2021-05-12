import React, { useState } from 'react'

import { AiOutlineLeft } from "react-icons/ai";
import { AiOutlineRight } from "react-icons/ai";


// 1. Make Tempurature Round and Feel like round
//2. Get accurate DT by Day then Hr


function DailyPage({ slider, dailyInfo, sunImg, Col, Row, Container }) {

    const [range, setRange] = useState(0);
    const [currentHr, setCurrentHr] = useState(0);
    const [currentDay, setCurrentDay] = useState(0);
    const [testHr, setTestHr] = useState(0);
    const [formattedTime, setFormattedTime] = useState(0)
    const [formattedHour, setformattedHour] = useState([])

    function getHourStats(value) {
        setTestHr(value);
        setCurrentHr(slider[value]);
    }

    // function getGMTTime (timeStamp) {
    //     const dateObj = new Date(timeStamp * 1000);
    //     const date = dateObj.getUTCDate().toString().padStart(2,0);
    //     const month = dateObj.getUTCMonth().toString().padStart(2,0);
    //     const hours = dateObj.getUTCHours().toString().padStart(2,0);
    //     const minutes = dateObj.getUTCMinutes().toString().padStart(2,0);
    //     const year = dateObj.getUTCFullYear().toString().padStart(2,0);
    //     setFormattedTime([minutes, hours, date, month, year]);
    //     //referenced all the different values by saying formattedTime[whateveryouneed]

    // }
    function getGMTTime(timestamp){
        
        timestamp = timestamp*1000;
        setFormattedTime(new Date(timestamp).toLocaleDateString("en-US"));
        setformattedHour(new Date(timestamp).toLocaleTimeString("en-US"))
        // expected output "8/30/2017" 
      }

    // function orderHrlyTime(date){
    //     if(date  )
    // }
    


    return (
        <>
        <div id="weatherAnimation" className="weatherAnimation"> 
        </div>
        <div id="weatherSlider" className="weatherSlider"> 
            <div className="my-5">
                <AiOutlineLeft className="leftDateBtn"/>
                <label htmlFor="customRange1">Time of Day</label>
                <AiOutlineRight className="rightDateBtn"/>
                <input 
                type="range" 
                className="custom-range" 
                id="customRange1" 
                style={{width: "600px"}} 
                min={0} 
                max={24} 
                value={range}
                onChange={(e) => {
                    setRange(e.target.value);
                    console.log(e.target.value);
                    getHourStats(e.target.value);
                    getGMTTime(slider[e.target.value].dt)
                }} 
                />
            </div>
        </div>
        <div id="shortWeatherInfo" className="shortWeatherInfo">
            <div className="dailyAvg"></div>
            <div className="hourlyAvg">
                <div className="tdDisplay">dt: {formattedHour}</div>
                <div className="hrTemp">temp: {Math.round(currentHr.temp)}</div>
                <div className="hrFeelLike">feels like: {Math.round(currentHr.feels_like)}</div>
                <div className="hrHumidity">humidity: {currentHr.humidity}%</div>
                <div className="hrClouds">cloudiness: {currentHr.clouds}%</div>
                <div className="hrWeather">weather conditions: {slider[testHr].weather[0].main}</div>
                <div className="hrWeather">Winds Speed: {currentHr.wind_speed}</div>
                <div className="hrWeather">Chance of Rain: {currentHr.pop}</div>
                <div className="hrWeather">UV: {currentHr.uvi}</div>
                <div className="hrWeather">pressure: {currentHr.pressure}</div>
                <div className="hrWeather">visibility: {currentHr.visibility}</div>
            </div>
            <Container id="weatherSection">
                <img src={sunImg} />
                <div id="shortWeatherInfo" className="shortWeatherInfo">
                    <div className="hourlyAvg">
                        <Row id="temp">
                            <div className="hrTemp">temp: {Math.round(currentHr.temp)}</div>
                        </Row>
                        <Row id="weatherTopRight">
                            <div className="hrHumidity">humidity: {currentHr.humidity}%</div>
                            <div className="hrFeelLike">feels like: {Math.round(currentHr.feels_like)}</div>
                            <div className="hrWeather">Chance of Rain: {currentHr.pop}</div>
                        </Row>
                        <div className="tdDisplay">dt: {currentHr.dt}</div>
                        <div className="hrClouds">cloudiness: {currentHr.clouds}%</div>
                        <div className="hrWeather">weather conditions: {slider[testHr].weather[0].main}</div>
                        <div className="hrWeather">Winds Speed: {currentHr.wind_speed}</div>
                        <div className="hrWeather">UV: {currentHr.uvi}</div>
                        <div className="hrWeather">pressure: {currentHr.pressure}</div>
                        <div className="hrWeather">visibility: {currentHr.visibility}</div>
                    </div>
                </div>
            </Container>
            </div>
        </>
    )
}

export default DailyPage




