import React, { useState, useEffect  } from 'react';
import sunImg from '../images/sun.svg';
import cloud1 from '../images/cloud1.svg';
import cloud2 from '../images/cloud2.svg';
import moonImg from '../images/Moon.svg';
import { TiWeatherSunny } from 'react-icons/ti';
import { WiDayRainWind } from 'react-icons/wi';
import { FiWind } from 'react-icons/fi';


function DailyPage({ slider, dailyInfo, Col, Row, Container, Carousel }) {

    const [range, setRange] = useState(0);
    const [currentHr, setCurrentHr] = useState(0);
    const [currentDay, setCurrentDay] = useState(0);
    const [testHr, setTestHr] = useState(0);
    const [formattedTime, setFormattedTime] = useState(0);
    const [formattedHour, setformattedHour] = useState([]);
    const [animation, setAnimation] = useState("none");
    const [initialStuff, setInitialStuff] = useState(true);
    const [dayOrNight, setdayOrNight] = useState(false);
    const [sunRiseAlert, setSunRiseAlert] = useState(false);
    const [sunRise, setsunRise] = useState("")
    const [sunSetAlert, setSunSetAlert] = useState(false);
    const [sunSet, setsunSet] = useState("");
    const [uviAlertExtr, setuviAlertExtr] = useState(false);
    const [uviAlert, setuviAlert] = useState(false)
    const [flash, setFlash] = useState(true)
    const [seconds, setSeconds] = useState(0);

    if (initialStuff == true) {
        getHourStats(0);
        setInitialStuff(false);
        getGMTTime(slider[Math.round(Number(0) + 3)].dt)
    }

    const [switchingTimes, setSwitchingTimes] = useState([]);

    function getHourStats(value) {
        setTestHr(Number(value) + 3);
        setCurrentHr(slider[Number(value) + 3]);
    }

    function getGMTTime(timestamp) {
        timestamp = timestamp * 1000;
        setFormattedTime(new Date(timestamp).toLocaleDateString("en-US"));
        setformattedHour(new Date(timestamp).toLocaleTimeString("en-US"));
    }

    function sunChecker(curTime) {

        let sunrise = dailyInfo[1].sunrise;
        let sunset = dailyInfo[1].sunset;

        sunrise = sunrise * 1000;
        sunrise = new Date(sunrise).toLocaleTimeString("en-US");
        setsunRise(sunrise);
        sunset = sunset * 1000;
        sunset = new Date(sunset).toLocaleTimeString("en-US");
        setsunSet(sunset);

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
        let roundedSunset = Number(roundTimes(sunset)) + 12;
        let darkRange = [];
        let dayRange = [];

        for (let i = 1; i <= 24; i++) {
            if (i >= roundedSunrise && i < roundedSunset) {
                dayRange.push(i);
            } else {
                darkRange.push(i);
            }
        }

        let numBefore = Number(switchingTimes[Number(switchingTimes.length) - 1]);

        if (switchingTimes.length > 1) {
            let firstRange = false;
            let secondRange = false;
            for (let num = 0; num < dayRange.length; num++) {
                if (Number(numBefore) == Number(dayRange[num])) {
                    firstRange = true;
                }
                if (Number(curTime) == Number(dayRange[num])) {
                    secondRange = true;
                }
            }
            if (firstRange == true && secondRange == false) {
                console.log("it went from day to night");
                setAnimation("dayToNight");
            } else if (firstRange == true && secondRange == true) {
                console.log("NO CHANGE DAY");
                setAnimation("none");
            } else if (firstRange == false && secondRange == true) {
                console.log("it went from night to day")
                setAnimation("nightToDay");
            } else {
                console.log("NO CHANGE NIGHT")
                setAnimation("none");
            }
        }
    }

    function checkUVAlert() {
        setuviAlertExtr(false);
        setuviAlert(false);
        if (currentHr.uvi >= 8) {
            setuviAlertExtr(true);
        } else if (currentHr.uvi >= 6) {
            setuviAlert(true);
        }
    }


    function checkForSun(numb) {
        if (numb > 3 && numb < 9) {
            setSunRiseAlert(true)
        } else if (numb > 16 && numb < 22) {
            setSunSetAlert(true)
        } else {
            setSunSetAlert(false);
            setSunRiseAlert(false);
        }
    }

    const [showContent, setShowContent] = useState({
        "atmosphere": true,
        "weather": false,
        "condition": false
    })
    console.log(showContent);

    useEffect(() => {
        const interval = setInterval(() => {
            setFlash(flash + 1)
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <Container fluid id="weatherSection">
                <Col id="leftSide" lg={8} md={8} sm={12}>
                    <div id="weatherAnimation" className="weatherAnimation">
                    </div>
                    <div id="weatherSlider" className="weatherSlider">
                        <div className="my-5">
                            <label className="dateDisplay" htmlFor="customRange1">May 3 2021</label>
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
                                    getHourStats(Math.round(e.target.value));
                                    getGMTTime(slider[Math.round(Number(e.target.value) + 3)].dt);
                                    setSwitchingTimes([...switchingTimes, e.target.value]);
                                    sunChecker(e.target.value);
                                    if (e.target.value >= 6 && e.target.value < 20) {
                                        setdayOrNight(true);
                                    } else {
                                        setdayOrNight(false);
                                    }
                                    checkForSun(Number(e.target.value));
                                    checkUVAlert();
                                }}
                            />
                        </div>
                    </div>

                    {dayOrNight == false ?
                        <div className="pageBg">
                            <div className="star" id="star1"></div>
                        </div> :
                        <div className="pageBgoff">
                            <div className="star starOff" id="star1"></div>
                        </div>
                    }

                    {dayOrNight ?
                        (<Row>
                            <Col className="imageContain" id="img" src={sunImg} >
                                {animation ?
                                    <div className="wrap">
                                        <div className="bgImg" id="sun" style={{ backgroundImage: `url('${sunImg}')` }}></div>
                                        <div className="bgImg" id="moonHide" style={{ backgroundImage: `url('${moonImg}')` }}></div>
                                    </div> :
                                    ''
                                }
                            </Col>
                        </Row>) :
                        (<Row className="imageAnimator">
                            <Col className="imageContain" id="img" src={moonImg}  >
                                {animation ?
                                    <div className="wrap">
                                        <div className="bgImg" id="sunHide" style={{ backgroundImage: `url('${sunImg}')` }}></div>
                                        <div className="bgImg" id="moon" style={{ backgroundImage: `url('${moonImg}')` }}></div>
                                    </div> :
                                    ''
                                }
                            </Col>
                        </Row>)
                    }

                </Col>
                <Col className="weatherContainer rightSide" lg={4} md={4} sm={12}>
                    <Row className="topInfo"> 
                        <Col lg={5}>
                            <div id="topTemp">{Math.round(currentHr.temp)}</div>
                            <div id="topDate">{formattedTime}</div>
                        </Col>
                        <Col lg={7} id="alertBoxContainer">
                            <div className="alertBox">
                                <div className="alertBoxName">Alerts:</div>
                                <div className="alertMessages">
                                    {sunRiseAlert && <div className="alert">
                                        <div className="alertName">Sunrise Alert</div>
                                        <div className="alertText sunRise">The sun will rise at {sunRise}</div>
                                    </div>}
                                    {sunSetAlert && <div className="alert">
                                        <div className="alertName">Sunset Alert</div>
                                        <div className="alertText sunSet">The sun will set at {sunSet}</div>
                                    </div>}
                                    {uviAlert && <div className="alert" id="uviNormal">
                                        <div className="alertName">UV Alert</div>
                                        <div className="alertText">There is a HIGH UV index!</div>
                                        <div className="linkMoreInfo">Click here for more info!</div>
                                    </div>}
                                    {uviAlertExtr && <div className="alert" id="uviExtr">
                                        <div className="alertName">UV Alert</div>
                                        <div className="alertText">There is an EXTREMELY HIGH UV index!</div>
                                        <div className="linkMoreInfo">Click here for more info!</div>
                                    </div>}
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Row className="middleInfo">
                        <Col lg={12}>
                            {showContent['atmosphere'] &&
                                <>
                                    <div className="info" id="info1">UV: {currentHr.uvi}</div>
                                    <div className="info" id="info2">Pressure: {currentHr.pressure}</div>
                                    <div className="info" id="info3">Humidity: {currentHr.humidity}%</div>
                                </>
                            }
                            {showContent['weather'] &&
                                <>
                                    <div className="info" id="info1">Weather: {slider[testHr].weather[0].main}</div>
                                    <div className="info" id="info2">Chance of Rain: {currentHr.pop}</div>
                                    <div className="info" id="info3">Clouds: {currentHr.clouds}%</div>
                                </>
                            }
                            {showContent['condition'] &&
                                <>
                                    <div className="info" id="info1">Visibility: {currentHr.visibility}</div>
                                    <div className="info" id="info2">Feels Like: {Math.round(currentHr.feels_like)}</div>
                                    <div className="info" id="info3">Wind Speed: {currentHr.wind_speed}</div>
                                </>
                            }

                        </Col>
                    </Row>
                    <Row className="bottomInfo">
                        <Col lg="4">
                            <div id="icon1" className="iconBottom" onMouseOver={() => { setShowContent({ ...showContent, 'condition': false, 'atmosphere': true, 'weather': false }) }}><FiWind /></div>
                            <div>atmosphere</div>
                        </Col>
                        <Col lg="4">
                            <div id="icon2" className="iconBottom" onMouseOver={() => { setShowContent({ ...showContent, 'condition': false, 'atmosphere': false, 'weather': true }) }}><TiWeatherSunny /></div>
                            <div>weather</div>
                        </Col>
                        <Col lg="4">
                            <div id="icon3" className="iconBottom" onMouseOver={() => { setShowContent({ ...showContent, 'condition': true, 'atmosphere': false, 'weather': false }) }}><WiDayRainWind /></div>
                            <div>conditions</div>
                        </Col>
                    </Row>
                </Col>

















                {/* <Row id="shortWeatherInfo" className="shortWeatherInfo" >
                    <Row id="top" >
                        <Col id="tempSpaceInfo" lg="6" md="4">
                            <Row className="hrTemp rounded-circle">{Math.round(currentHr.temp)}</Row>
                        </Col>
                        <Col id="topRightAlert">
                            {sunRiseAlert && <Row className="alertText">Sunrise at: {sunRise}</Row>}
                            {sunSetAlert && <Row className="alertText">Sunset at: {sunSet}</Row>}
                        </Col>
                        <Col id="topRightInfo" lg="6" md="2" >

                            <Row className="hrWeather">Date: {formattedTime}</Row>
                            <Row className="hrWeather">Feels Like: {Math.round(currentHr.feels_like)}</Row>
                            <Row className="hrWeather">Chance of Rain: {currentHr.pop}</Row>
                            <Row className="hrWeather">UV: {currentHr.uvi}</Row>

                        </Col>
                    </Row>
                    <Row id="bottomInfo">
                        <Col className="bottomCols">
                            <div lg="4" className="hrWeather flex-column mb-xl-5"><div className="title">Humidity:</div><div className="titleText">{currentHr.humidity}%</div></div>
                            <div lg="4" className="hrWeather flex-column "><div className="title">Cloudiness:</div><div className="titleText">{currentHr.clouds}%</div></div>
                        </Col>
                        <Col className="bottomCols">
                            <div lg="4" className="hrWeather flex-column mb-xl-5"><div className="title">Weather:</div><div className="titleText">{slider[testHr].weather[0].main}</div></div>
                            <div lg="4" className="hrWeather flex-column"><div className="title">Wind Speed:</div><div className="titleText">{currentHr.wind_speed}</div></div>
                        </Col>
                        <Col className="bottomCols">
                            <div lg="4" className="hrWeather flex-column mb-xl-5"><div className="title">Pressure:</div><div className="titleText">{currentHr.pressure}</div></div>
                            <div lg="4" className="hrWeather flex-column"><div className="title">Visibility:</div><div className="titleText">{currentHr.visibility}</div></div>
                        </Col>
                    </Row>
                </Row> */}


                {/* </div> */}
                {/* </div> */}

            </Container>
            {/* </div> */}
        </>
    )
}

export default DailyPage