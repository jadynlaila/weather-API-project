import React, { useState } from 'react'

function DailyPage ( hourly ) {
    const [range, setRange] = useState(0);
    let dt = 0;
    let dtArr = [0];
    let hrTemp = "";
    let hrFeelLike = "";
    let hrHumidity = "";
    let hrClouds = "";
    let hrWeather = "";

    let positionsArr = [];
    // console.log(hourly);

    function getHourStats ( value ) {
        console.log(value)
        let currentSect = hourly.weatherTime[value];
        // console.log(currentSect);
        dt = currentSect.dt;
        dtArr.push(dt);
        hrTemp = currentSect.temp;
        hrFeelLike = currentSect.feels_like;
        hrHumidity = currentSect.humidity;
        hrClouds = currentSect.clouds;
        hrWeather = currentSect.weather.main;
        console.log(dt);
        
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
                    // console.log(range);
                    // console.log(hourly.weatherTime[range]);
                    getHourStats(e.target.value);
                }} 
                 />
                {/* ^^ GETS CORDS OF SLIDER ^^ */}
            </div>
        </div>
        <div id="shortWeatherInfo" className="shortWeatherInfo" style={{backgroundColor:"RGBA(100, 100, 100, .2)", color:"white", height: "200px", width: "300px"}}>
            <div className="dialyAvg"></div>
            <div className="hourlyAvg">
                <div className="tdDisplay">{dt}</div>
                <div className="hrTemp">{hrTemp}</div>
                <div className="hrFeelLike">{hrFeelLike}</div>
                <div className="hrHumidity">{hrHumidity}</div>
                <div className="hrClouds">{hrClouds}</div>
                <div className="hrWeather">{hrWeather}</div>
            </div>
        </div>
        </>
    )
}

export default DailyPage




