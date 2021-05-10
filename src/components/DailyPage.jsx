import React, { useState } from 'react'

// 1. Make Tempurature Round and Feel like round
//2. Get accurate DT by Day then Hr


function DailyPage ( {slider} ) {
    const [range, setRange] = useState(0);
    const [hrTemp, setHrTemp] = useState(slider[0].temp);
    const [dtHr, setdtHr] = useState(slider[0].dt)
    const [feelLike, setFeelLike] = useState(slider[0].feels_like);
    const [humidity, setHumidity] = useState(slider[0].humidity);
    const [clouds, setClouds] = useState(slider[0].clouds);
    const [hrWeather, sethrWeather] = useState(slider[0].weather[0].main);
    const [windSpeed, setwindSpeed] = useState(slider[0].wind_speed);
    const [chanceOfRain, setchanceOfRain] = useState(slider[0].pop);
    const [UV, setUV] = useState(slider[0].uvi);
    const [pressure, setPressure] = useState(slider[0].pressure);
    const [visibility, setVisibility] = useState(slider[0].visibility);
    const [currentHr, setCurrentHr] = useState();
    const [currentDay, setCurrentDay] = useState(0);


    function getHourStats ( value ) {
        console.log(value)
        let currentSect = slider[value];
        console.log(slider);
        console.log(slider[value]);
        setdtHr(currentSect.dt);
        setHrTemp(currentSect.temp);
        setFeelLike(currentSect.feels_like);
        setHumidity(currentSect.humidity);
        setClouds(currentSect.clouds);
        console.log(currentSect.weather)
        sethrWeather(currentSect.weather[0].main);        
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
                    // console.log(hourly.weatherTime[range]);
                    getHourStats(e.target.value);
                }} 
                />
                {/* ^^ GETS CORDS OF SLIDER ^^ */}
            </div>
        </div>
        <div id="shortWeatherInfo" className="shortWeatherInfo" style={{backgroundColor:"RGBA(100, 100, 100, .2)", color:"white", height: "300px", width: "300px"}}>
            <div className="dailyAvg"></div>
            <div className="hourlyAvg">
                <div className="tdDisplay">dt: {dtHr}</div>
                <div className="hrTemp">temp: {hrTemp}</div>
                <div className="hrFeelLike">feels like: {feelLike}</div>
                <div className="hrHumidity">humidity: {humidity}%</div>
                <div className="hrClouds">cloudiness: {clouds}%</div>
                <div className="hrWeather">weather conditions: {hrWeather}</div>
                <div className="hrWeather">Winds Speed: {windSpeed}</div>
                <div className="hrWeather">Chance of Rain: {chanceOfRain}</div>
                <div className="hrWeather">UV: {UV}</div>
                <div className="hrWeather">pressure: {pressure}</div>
                <div className="hrWeather">visibility: {visibility}</div>
            </div>
        </div>
        </>
    )
}

export default DailyPage




