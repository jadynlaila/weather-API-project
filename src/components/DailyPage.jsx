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
    const [formattedTime, setFormattedTime] = useState(0);
    const [formattedHour, setformattedHour] = useState([]);

    console.log(dailyInfo[1]);

    function getHourStats(value) {
        setTestHr(Number(value)+3);
        setCurrentHr(slider[Number(value)+3]);
    }

    function getGMTTime(timestamp){
        timestamp = timestamp*1000;
        setFormattedTime(new Date(timestamp).toLocaleDateString("en-US"));
        setformattedHour(new Date(timestamp).toLocaleTimeString("en-US"))
    }

    function sunrise(curTime) {
        // let sunriseTime = dailyInfo[0].sunrise;
        // sunriseTime = new Date(sunriseTime).toLocaleTimeString("en-US");
        // let rounded = Math.round(sunriseTime.getMinutes());

        // sunriseTime = Math.round(sunriseTime);
        // console.log(sunriseTime);
        let sunrise = dailyInfo[1].sunrise;
        let sunset = dailyInfo[1].sunset;
        console.log(sunrise, sunset);
        // let timeArrs = [(dailyInfo[1].sunrise), (dailyInfo[1].sunset)];
        // for(let i of timeArrs){
        //     console.log(timeArrs[i]);
        // }
    }
    sunrise();

    return (
        <>
        <div id="weatherAnimation" className="weatherAnimation"> 
        </div>
        <div id="weatherSlider" className="weatherSlider"> 
            <div className="my-5">
                <label htmlFor="customRange1">May 3 2021</label>
                <div className="hourDisplay">{formattedHour}</div>
                <input 
                type="range" 
                className="custom-range" 
                id="customRange1" 
                style={{width: "600px"}} 
                min={0} 
                max={23} 
                value={range}
                onChange={(e) => {
                    setRange(Math.round(e.target.value));
                    console.log(e.target.value);
                    getHourStats(Math.round(e.target.value));
                    getGMTTime(slider[Math.round(Number(e.target.value)+3)].dt)
                    
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




