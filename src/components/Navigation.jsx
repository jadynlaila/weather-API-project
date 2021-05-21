import React, { useState } from 'react'
function Nav({onShowDaily, showDaily, onShowWeekly, showWeekly, moreInfoPage, onMoreInfoPage}) {
    return (
        <div>
            <nav>
                <div className="navContainer">
                    <div className="link" id="home" onClick={onShowDaily}>Home</div>
                    <div className="link" id="week" onClick={onShowWeekly}>Weekly</div>
                    <div className="link" id="humid" onClick={onMoreInfoPage}>Humidity</div>
                </div>
            </nav>
        </div>
    )
}

export default Nav