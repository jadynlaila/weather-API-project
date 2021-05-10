import React, { useState } from 'react'
import JSON from '../weather.json'

const WeeklyPage = ({}) => {

    const timeStamp = 1619982000;

    const dateObj = new Date(timeStamp * 1000);

    const date = dateObj.getUTCDate().toString().padStart(2,0)
    const month = dateObj.getUTCMonth().toString().padStart(2,0)

    const hours = dateObj.getUTCHours().toString().padStart(2,0)
    const minutes = dateObj.getUTCMinutes().toString().padStart(2,0)
    const seconds = dateObj.getUTCSeconds().toString().padStart(2,0)

    const year = dateObj.getUTCFullYear().toString().padStart(2,0)

    console.log(`${date}`);
    // console.log(`${hours}:${minutes}:${seconds}`);
    console.log(`The day is ${date} of ${Number(month) + 1} and the time is ${hours}:${minutes}:${seconds} and the year is ${year}`);

    return (
        <>
            <div className="clouds">The day is {date} of {Number(month) + 1} and the time is {hours}:{minutes}:{seconds} and the year is {year}</div>
        </>
    )
}

export default WeeklyPage
