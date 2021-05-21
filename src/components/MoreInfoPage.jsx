import React, { Component } from 'react'
import { GiExpandedRays } from 'react-icons/gi';
import { FaCompressAlt } from 'react-icons/fa';
import { MdVisibility } from 'react-icons/md';

function MoreInfoPage({Col, Row, Container}) {
    return (
        <Container id="MoreInfoPage">
            {/* 
                Need to define
                    - UV index
                    - Pressure
                    - Visibility 
            */}
            <Row>
                <div className="moreInfoTitle">More Info</div>
                <div className="moreInfoSubTitle">Click on the circles for more info about the data</div>
            </Row>
            <Row className="moreInfoContent">
                <Col className="moreInfoBox UVIinfoBox">
                    <div className="moreInfoBoxIcon"><GiExpandedRays id="icon"></GiExpandedRays></div>
                    <div className="moreInfoBoxTitle">UVI</div>
                    <div className="moreInfoBoxSubTitle">Ultraviolet Index</div>
                    <div className="moreInfoBoxContent"></div>
                </Col>
                <Col className="moreInfoBox pressureInfoBox">
                    <div className="moreInfoBoxIcon"><FaCompressAlt id="icon"></FaCompressAlt></div>
                    <div className="moreInfoBoxTitle">Pressure</div>
                    <div className="moreInfoBoxContent"></div>
                </Col>
                <Col className="moreInfoBox visibilityInfoBox">
                    <div className="moreInfoBoxIcon"><MdVisibility id="icon"></MdVisibility></div>
                    <div className="moreInfoBoxTitle">Visibility</div>
                    <div className="moreInfoBoxContent"></div>
                </Col>
            </Row>
        </Container>
    )
}

export default MoreInfoPage