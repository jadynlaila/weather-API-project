import React, { useState } from 'react'

function DailyPage(weather ) {
    const [range, setRange] = useState(0);

    console.log(weather);

    return (
        <>
        <div id="weatherAnimation" className="weatherAnimation">
        </div>
        <div id="weatherSlider" className="weatherSlider"> 
            <div className="my-5">
                <label htmlFor="customRange1">Time of Day</label>
                <input type="range" className="custom-range" id="customRange1" style={{width: "600px"}} min={0} max={24} value={range} onChange={(e) => {setRange(e.target.value); console.log(range)}} />
                {/* ^^ GETS CORDS OF SLIDER ^^ */}
            </div>
        </div>
        <div id="shortWeatherInfo" className="shortWeatherInfo">
        </div>
        </>
    )
}

export default DailyPage




