import React, { useState } from 'react';
import sunImg from '../images/sun.svg';
import cloud1 from '../images/cloud1.svg'
import cloud2 from '../images/cloud2.svg'

function DailyPage({ slider, dailyInfo, Col, Row, Container }) {

    const [range, setRange] = useState(0);
    const [currentHr, setCurrentHr] = useState(0);
    const [currentDay, setCurrentDay] = useState(0);
    const [testHr, setTestHr] = useState(0);
    const [formattedTime, setFormattedTime] = useState(0);
    const [formattedHour, setformattedHour] = useState([]);
    const [animation, setAnimation] = useState("none");
    const [initialStuff, setInitialStuff] = useState(true);
    const [dayOrNight, setdayOrNight] = useState(false);

    if(initialStuff == true){
        getHourStats(0);
        setInitialStuff(false);
        getGMTTime(slider[Math.round(Number(0)+3)].dt)
    }

    const [switchingTimes, setSwitchingTimes] = useState([]);

    function getHourStats(value) {
        setTestHr(Number(value) + 3);
        setCurrentHr(slider[Number(value) + 3]);
    }

    function getGMTTime(timestamp) {
        timestamp = timestamp * 1000;
        setFormattedTime(new Date(timestamp).toLocaleDateString("en-US"));
        setformattedHour(new Date(timestamp).toLocaleTimeString("en-US"))
    }

    function sunChecker(curTime) {

        let sunrise = dailyInfo[1].sunrise;
        let sunset = dailyInfo[1].sunset;

        sunrise = sunrise * 1000;
        sunrise = new Date(sunrise).toLocaleTimeString("en-US");
        sunset = sunset * 1000;
        sunset = new Date(sunset).toLocaleTimeString("en-US");
        function roundTimes(date) {
            let str = `${date}`;
            str = str.split(`:`);
            if (str[1] > 0) {
                str[0] = Number(str[0]) + 1
            }
            str = str[0];
            return str;
        }
        let roundedSunrise = roundTimes(sunrise);
        let roundedSunset = Number(roundTimes(sunset))+12;
        let darkRange = [];
        let dayRange = [];

        for(let i = 1; i<=24; i++){
            if(i >= roundedSunrise && i < roundedSunset){
                dayRange.push(i);
            }else{
                darkRange.push(i);
            }
        }

        let numBefore = Number(switchingTimes[Number(switchingTimes.length) -1]);

        if(switchingTimes.length > 1){
            let firstRange = false;
            let secondRange = false;
            for(let num = 0; num < dayRange.length; num++){
                if(Number(numBefore) == Number(dayRange[num])){
                firstRange = true;
                }
                if(Number(curTime) == Number(dayRange[num])){
                secondRange = true;
                }
            }
            if(firstRange == true && secondRange == false){
            console.log(`it went from day to night`);
            setAnimation("dayToNight");
            }else if(firstRange == true && secondRange == true){
            console.log("NO CHANGE DAY");
            setAnimation("none");
            }else if(firstRange == false && secondRange == true){
            console.log("it went from night to day")
            setAnimation("nightToDay");
            }else{
            console.log("NO CHANGE NIGHT")
            setAnimation("none");
            }
        }
        
        
    }
    return (
        <>
        <Container id="weatherSection">
            <Row id="leftSide">
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
                    getHourStats(Math.round(e.target.value));
                    getGMTTime(slider[Math.round(Number(e.target.value)+3)].dt);
                    setSwitchingTimes([...switchingTimes, e.target.value]);
                    sunChecker(e.target.value);
                    if(e.target.value >= 6 && e.target.value < 20){
                        setdayOrNight(true);
                    }else{
                        setdayOrNight(false);

                    }
                }} 
                />
            </div>
        </div>
                {dayOrNight ?
                    (<Row>
                        <Col id="img" src={sunImg} > 
                            <div id="img" src={sunImg} style={{backgroundImage: `url('${sunImg}')`}}></div>
                        </Col>
                    </Row>) :
                    (<Row>
                        <Col id="img" src={cloud1} alt="moon Image"> 
                        <div id="img" style={{backgroundImage: `url('${cloud1}')`}}></div>
                        </Col>
                    </Row>)
                }
                </Row>
                <Row id="shortWeatherInfo" className="shortWeatherInfo" >
                    <Row id="top">
                        <Col id="tempSpaceInfo" lg="6" md="4">
                            <Row className="hrTemp">{Math.round(currentHr.temp)}</Row>
                        </Col>
                        <Col id="topRightInfo" lg="6" md="2" >
                            
                            <Row className="hrWeather">Date: {currentHr.dt}</Row>
                            <Row className="hrWeather">Feels Like: {Math.round(currentHr.feels_like)}</Row>
                            <Row className="hrWeather">Chance of Rain: {currentHr.pop}</Row>
                            <Row className="hrWeather">UV: {currentHr.uvi}</Row>
                            
                        </Col>
                    </Row>
                    <Row id="bottomInfo" lg="3" >
                        <Row className="hrWeather"><span className="title">Humidity:</span><span className="titleText">{currentHr.humidity}%</span></Row>
                        <Row className="hrWeather"><span className="title">Cloudiness:</span><span className="titleText">{currentHr.clouds}%</span></Row>
                        <Row className="hrWeather"><span className="title">Weather:</span><span className="titleText">{slider[testHr].weather[0].main}</span></Row>
                        <Row className="hrWeather"><span className="title">Wind Speed:</span><span className="titleText">{currentHr.wind_speed}</span></Row>
                        <Row className="hrWeather"><span className="title">Pressure:</span><span className="titleText">{currentHr.pressure}</span></Row>
                        <Row className="hrWeather"><span className="title">Visibility:</span><span className="titleText">{currentHr.visibility}</span></Row>
                    </Row>
                </Row>


                {/* </div> */}
                {/* </div> */}

            </Container>
            {/* </div> */}
        </>
    )
}

export default DailyPage




