import React, { useState } from 'react'
function Nav() {
    return (
        <div>
            <nav>
                <div className="navContainer">
                    <div className="link" id="home">Home</div>
                    <div className="link" id="week">Weekly</div>
                    <div className="link" id="humid">Humidity</div>
                </div>
            </nav>
        </div>
    )
}

export default Nav