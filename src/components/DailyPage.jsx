import React, { useState } from 'react'


// 1. Make Tempurature Round and Feel like round
//2. Get accurate DT by Day then Hr


function DailyPage ( {slider, dailyInfo}) {

    const [range, setRange] = useState(0);
    const [currentHr, setCurrentHr] = useState(0);
    const [currentDay, setCurrentDay] = useState(0);
    const [testHr, setTestHr] = useState(0);

    function getHourStats ( value ) {
        setTestHr(value);
        setCurrentHr(slider[value]);   
        }


    return (
        <>
        <div id="weatherAnimation" className="weatherAnimation"> 
        </div>
        <div id="weatherSlider" className="weatherSlider"> 
            <div className="my-5">
                <label htmlFor="customRange1">Time of Day</label>
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
                }} 
                />
            </div>
        </div>
        <div id="shortWeatherInfo" className="shortWeatherInfo">
            <div className="dailyAvg"></div>
            <div className="hourlyAvg">
                <div className="tdDisplay">dt: {currentHr.dt}</div>
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
        </div>
        </>
    )
}

export default DailyPage




