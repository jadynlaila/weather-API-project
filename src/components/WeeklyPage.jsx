import React, { useState } from 'react'

const WeeklyPage = ({weather}) => {
    console.log(weather.current);

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
