import React, { useState } from 'react'
import JSON from '../weather.json'

const WeeklyPage = ({}) => {
    const [counter, setCounter] = useState(0)
    const [date, setDate] = useState([`Sunday`, `Monday`, `Tuesday`, `Wednesday`, `Thursday`, `Friday`, `Saturday`, `Sunday`]);
    const [box1, setBox1] = useState(true);
    const [box2, setBox2] = useState(true);
    const [box3, setBox3] = useState(true);

    const timeStamp = JSON.daily[counter].dt;
    const dateObj = new Date(timeStamp * 1000);

    // The time calculators
    const day = dateObj.getUTCDay().toString().padStart(2,0)
    const info = JSON.daily;

    function checkBox(num){
        if(num > 5){
            setBox1(false);
        }else{
            setBox1(true);
        }

        if(num > 4){
            setBox2(false);
        }else{
            setBox2(true);
        }

        if(num > 3){
            setBox3(false);
        }
        else{
            setBox3(true);
        }
    }

    return (
        <>
            <div className="container">
                    <div className="arrows">
                        <div onClick={() => counter != 0 ? (setCounter(counter - 1), console.log(box1), document.getElementById('arrowDown').style.opacity = '100%', checkBox(counter)) : (document.getElementById('arrowUp').style.opacity = '50%', checkBox(counter))} className="arrowUp" id="arrowUp"></div>
                        <div onClick={() => counter != 7 ? (setCounter(counter + 1), console.log(box1), document.getElementById('arrowUp').style.opacity = '100%', checkBox(counter)) : (document.getElementById('arrowDown').style.opacity = '50%', checkBox(counter))} className="arrowDown" id="arrowDown"></div>
                    </div>
                    <div className="weatherInfo">
                        <div className="current">
                            <div className="tempImg"></div>
                            <div className="high">H: {info[counter].temp.max}</div>
                            <div className="low">L: {info[counter].temp.min}</div>
                            <div className="weatherType">The day will be {info[counter].weather[0].main}</div>
                            <div className="weekDay">{date[counter]}</div>
                        </div>
                        {box1 ? 
                            <div className="sub">
                            <div className="tempImg"></div>
                            <div className="high">Hight: {info[counter + 1].temp.max}</div>
                            <div className="low">Low: {info[counter + 1].temp.min}</div>
                            <div className="weekDay">{date[counter + 1]}</div>
                        </div> : ''}
                        {box2 ? 
                            <div className="sub">
                            <div className="tempImg"></div>
                            <div className="high">Hight: {info[counter + 2].temp.max}</div>
                            <div className="low">Low: {info[counter + 2].temp.min}</div>
                            <div className="weekDay">{date[counter + 2]}</div>
                        </div> : ''}
                        {box3 ? 
                            <div className="sub">
                            <div className="tempImg"></div>
                            <div className="high">Hight: {info[counter + 3].temp.max}</div>
                            <div className="low">Low: {info[counter + 3].temp.min}</div>
                            <div className="weekDay">{date[counter + 3]}</div>
                        </div> : ''}
                    </div>
            </div>
        </>
    )
}
// test=0 ? document.getElementById('arrowUp').style.opacity = "50%" : ""
// test != 0 ? setTest(test - 1) : ""
export default WeeklyPage