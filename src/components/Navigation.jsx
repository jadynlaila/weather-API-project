import React, { useState } from 'react'
function Nav({onShowDaily, showDaily, onShowWeekly, showWeekly}) {
    return (
        <div>
            <nav>
                <div className="navContainer">
                    <div className="link" id="home" onClick={onShowDaily}>Home</div>
                    <div className="link" id="week" onClick={onShowWeekly}>Weekly</div>
                    <div className="link" id="humid">Humidity</div>
                </div>
            </nav>
        </div>
    )
}

export default Nav