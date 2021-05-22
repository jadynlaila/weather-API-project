import React, { useState } from 'react'
import { GiExpandedRays } from 'react-icons/gi';
import { FaCompressAlt } from 'react-icons/fa';
import { MdVisibility } from 'react-icons/md';
import { GoX } from 'react-icons/go';


function MoreInfoPage({Col, Row, Container}) {
    const [showUVI, setShowUVI] = useState(false);
    const [showPressure, setShowPressure] = useState(false);
    const [showVisible, setShowVisible] = useState(false);


    return (
        <>
        <div id="moreInfoBackground"></div>
        { showUVI && 
        <div className="infoContent UVIinfo" id="popUpContent">
            <div className="topPartInfo">
                <div className="infoContentTitle">UVI</div>
                <GoX id="closeIcon" onClick={() => {setShowUVI(false)}}></GoX>
            </div>
            <div className="infoContentText">
                UVI stands for Ultraviolet Index and it is a forcast of the expected exposure to the sun's UV rays. UV rays are measured on a scale based on intensity levels and usually range from 1 to 12, where 1 is a low, minimal risk exposure and anything over 11 is a very high risk. It is important to be aware of the UV Index when considering to spend time outside because too much exposure can lead to sunburns and also long term health problems like skin cancer.
            </div>
            <a href="https://www.epa.gov/enviro/uv-index-overview#:~:text=The%20ozone%20layer%20shields%20the,harmful%20ultraviolet%20(UV)%20radiation.&text=The%20UV%20Index%20provides%20important,of%20overexposure%20to%20the%20sun." className="linkToArticle">Link to article!</a>
        </div>}
        { showPressure && 
        <div className="infoContent Pressureinfo" id="popUpContent">
            <div className="topPartInfo">
                <div className="infoContentTitle" >Pressure</div>
                <GoX id="closeIcon" onClick={() => {setShowPressure(false)}}></GoX>
            </div>
            <div className="infoContentText">
                Pressure is the amount of force that is being exerted on the Earth's surface per the unit area. On our website we display the atmospheric pressure at sea level. Pressure effects multiple things in weather including helping produdict weather conditions.
            </div>
            <a href="https://www.epa.gov/enviro/uv-index-overview#:~:text=The%20ozone%20layer%20shields%20the,harmful%20ultraviolet%20(UV)%20radiation.&text=The%20UV%20Index%20provides%20important,of%20overexposure%20to%20the%20sun." className="linkToArticle">Link to article!</a>
        </div>}
        { showVisible && 
        <div className="infoContent visibleInfo" id="popUpContent">
            <div className="topPartInfo">
                <div className="infoContentTitle" >Visibility</div>
                <GoX id="closeIcon" onClick={() => {setShowVisible(false)}}></GoX>
            </div>
            <div className="infoContentText">
                Visibility is how far a person can see out on the ground. On extremely dry days visibility will increase because there is few things in the air to block vision. On extremely cloudy days visibility decreases, since it is hard to see when there is a lot of blocks in the way. On our website visibility is measured in meters.
            </div>
            <a href="https://www.mankatofreepress.com/news/ask-us-heres-what-10-mile-visibility-means-to-weather-guys/article_60e0c194-0ddf-11e8-a461-0b5828972e14.html#:~:text=On%20a%20clear%20day%20the,it%20measured%20in%20an%20airplane%3F&text=People%20in%20the%20western%20United,is%2093%20million%20miles%20away." className="linkToArticle">Link to article!</a>
        </div>}
        <Container id="MoreInfoPage">
            {/* 
                Need to define
                    - UV index
                    - Pressure
                    - Visibility 
            */}
            <Row className="fix">
                <div className="moreInfoTitle">More Info</div>
                <div className="moreInfoSubTitle">Click on the circles for more info about the data</div>
            </Row>
            <Row className="moreInfoContent">
                <Col className="moreInfoBox UVIinfoBox">
                    <div className="moreInfoBackground">
                        <div className="moreInfoInnerBackground" onClick={() => {
                            showUVI ? 
                            setShowUVI(false):
                            setShowUVI(true); setShowPressure(false); setShowVisible(false)
                        }}>
                            <div className="moreInfoBoxIcon"><GiExpandedRays id="icon"></GiExpandedRays></div>
                            <div className="moreInfoBoxTitle">UVI</div>
                            <div className="moreInfoBoxContent"></div>
                        </div>
                    </div>
                </Col>
                <Col className="moreInfoBox pressureInfoBox">
                    <div className="moreInfoBackground">
                        <div className="moreInfoInnerBackground" onClick={() => {
                            showPressure ? 
                            setShowPressure(false):
                            setShowPressure(true); setShowUVI(false); setShowVisible(false)
                        }}>
                            <div className="moreInfoBoxIcon"><FaCompressAlt id="icon"></FaCompressAlt></div>
                            <div className="moreInfoBoxTitle">Pressure</div>
                            <div className="moreInfoBoxContent"></div>
                        </div>
                    </div>
                </Col>
                <Col className="moreInfoBox visibilityInfoBox">
                    <div className="moreInfoBackground">
                        <div className="moreInfoInnerBackground" onClick={() => {
                            showVisible ? 
                            setShowVisible(false):
                            setShowVisible(true); setShowPressure(false); setShowUVI(false)
                        }}>
                            <div className="moreInfoBoxIcon"><MdVisibility id="icon"></MdVisibility></div>
                            <div className="moreInfoBoxTitle">Visibility</div>
                            <div className="moreInfoBoxContent"></div>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
        </>
    )
}

export default MoreInfoPage