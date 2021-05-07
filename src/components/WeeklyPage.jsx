import React, { useState } from 'react'

const WeeklyPage = (weather) => {
    console.log(weather[1]);

    let weatherElements = JSON.parse(weather);
    console.log(weatherElements);
    return (
        <>
        <div>
            <div id='day1'>
                {/* <p>{weather.lat}</p> */}
            </div>
        </div>
        </>
    )
}

export default WeeklyPage
