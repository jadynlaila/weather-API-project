import React, { useState } from 'react';

function DailyPage({ slider, dailyInfo, sunImg, Col, Row, Container, cloud1, cloud2 }) {

    const [range, setRange] = useState(0);
    const [currentHr, setCurrentHr] = useState(0);
    const [currentDay, setCurrentDay] = useState(0);
    const [testHr, setTestHr] = useState(0);
    const [formattedTime, setFormattedTime] = useState(0);
    const [formattedHour, setformattedHour] = useState([]);

    const [switchingTimes, setSwitchingTimes] = useState([]);

    console.log(dailyInfo[1]);

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
        console.log(sunrise, sunset);

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
        let roundedSunrise = [Number(roundTimes(sunrise)) - 1, roundTimes(sunrise)]
        let roundedSunset = [Number(roundTimes(sunset)) - 1, roundTimes(sunset)]



        console.log(roundedSunrise, roundedSunset);

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
                                style={{ width: "600px" }}
                                min={0}
                                max={23}
                                value={range}
                                onChange={(e) => {
                                    setRange(Math.round(e.target.value));
                                    console.log(e.target.value);
                                    getHourStats(Math.round(e.target.value));
                                    getGMTTime(slider[Math.round(Number(e.target.value) + 3)].dt);
                                    setSwitchingTimes([...switchingTimes, e.target.value]);
                                    sunChecker();
                                }}
                            />
                        </div>
                    </div>
                    {/* <div id="shortWeatherInfo" className="shortWeatherInfo">
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
            </div> */}
                    <Row>
                        <Col id="img" src={sunImg}> </Col>
                    </Row>
                </Row>

                {/* <div id="shortWeatherInfo" className="shortWeatherInfo"> */}
                {/* <div className="hourlyAvg"> */}
                <Row id="shortWeatherInfo" className="shortWeatherInfo" >
                    <Row >
                        <Col id="tempSpaceInfo" lg="8" md="4">
                            <Row className="hrTemp">{Math.round(currentHr.temp)}</Row>
                        </Col>
                        <Col id="topRightInfo" lg="4" md="2" >
                            <Row className="hrWeather">humidity: {currentHr.humidity}%</Row>
                            <Row className="hrWeather">feels like: {Math.round(currentHr.feels_like)}</Row>
                            <Row className="hrWeather">Chance of Rain: {currentHr.pop}</Row>
                            <Row className="hrWeather">UV: {currentHr.uvi}</Row>
                        </Col>
                    </Row>
                    <Row id="bottomInfo" lg="3" md="2">
                        <Row className="hrWeather"><span className="title">dt:</span><span className="titleText">{currentHr.dt}</span></Row>
                        <Row className="hrWeather"><span className="title">cloudiness:</span><span className="titleText">{currentHr.clouds}%</span></Row>
                        <Row className="hrWeather"><span className="title">weather conditions:</span><span className="titleText">{slider[testHr].weather[0].main}</span></Row>
                        <Row className="hrWeather"><span className="title">Winds Speed:</span><span className="titleText">{currentHr.wind_speed}</span></Row>
                        <Row className="hrWeather"><span className="title">pressure:</span><span className="titleText">{currentHr.pressure}</span></Row>
                        <Row className="hrWeather"><span className="title">visibility:</span><span className="titleText">{currentHr.visibility}</span></Row>
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




