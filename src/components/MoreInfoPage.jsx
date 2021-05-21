import React, { useState } from 'react'
import { GiExpandedRays } from 'react-icons/gi';
import { FaCompressAlt } from 'react-icons/fa';
import { MdVisibility } from 'react-icons/md';

function MoreInfoPage({Col, Row, Container}) {
    const [showUVI, setShowUVI] = useState(false);
    const [showPressure, setShowPressure] = useState(false);
    const [showVisible, setShowVisible] = useState(false);

    return (
        <>
        
        <div className="infoContent UVIinfo" id="popUpContent">
            <div className="infoContentTitle">Title</div>
            <div className="infoContentText">
                Excepteur consequat pariatur culpa labore laborum nisi cupidatat cillum. Commodo aliqua dolore eiusmod duis officia cupidatat proident mollit. Velit esse proident excepteur consectetur eu.

                Lorem enim deserunt officia aliquip. Culpa nisi et ex labore. Eu cillum nostrud quis pariatur sint do elit cupidatat exercitation tempor culpa est laborum excepteur.

                Amet Lorem velit est culpa amet enim mollit adipisicing et magna. Adipisicing quis qui ea non culpa dolore aliqua tempor nisi. Sunt sunt proident tempor id dolor deserunt labore duis. Aliquip ipsum adipisicing est ea fugiat fugiat ullamco. Pariatur anim incididunt irure dolore enim laboris. Nisi sint culpa laborum ea occaecat eu anim amet non magna eu ex id.
            </div>
        </div>
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
                        <div className="moreInfoInnerBackground" onclick={() => {
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
                        <div className="moreInfoInnerBackground" onclick={() => {
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
                        <div className="moreInfoInnerBackground" onclick={() => {
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