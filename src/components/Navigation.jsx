import React, { useState } from 'react'
function Nav(openDaily, showDaily, openWeekly, showWeekly) {
    return (
        <div>
            <nav>
                <div className="navContainer">
                    <div className="link" id="home" onClick={openDaily}>Home</div>
                    <div className="link" id="week" onClick={openWeekly}>Weekly</div>
                    <div className="link" id="humid">Humidity</div>
                </div>
            </nav>
        </div>
    )
}

export default Nav