import React, {useEffect} from 'react';
import Chart from 'chart.js';

import './sidebar.scss';
import OffensiveMajorIcon from '../icons/attrs/offensiveMajor.png';
import OffensiveMinorIcon from '../icons/attrs/offensiveMinor.png';
import DefensiveMajorIcon from '../icons/attrs/defensiveMajor.png';
import DefensiveMinorIcon from '../icons/attrs/defensiveMinor.png';
import UtilityMajorIcon from '../icons/attrs/utilityMajor.png';
import UtilityMinorIcon from '../icons/attrs/utilityMinor.png';
import {Col, Row} from 'react-bootstrap';

const red = '#ED4040';
const blue = '#70B0F2';
const yellow = '#E9C16B';
const transparent = '#00000000';

export default function Sidebar(props) {
    let skillCells = [];
    for (let i = 0; i < 6; i++) {
        if (i < props.majorAttributes.utility) {
            skillCells.push(<Col className="skillCell filled"/>);
        } else {
            skillCells.push(<Col className="skillCell"/>);
        }
    }

    useEffect(() => {
        const ctx = document.getElementById('donutChart').getContext('2d');
        new Chart(ctx, {
            type: 'doughnut',
            data: {
                datasets: [{
                    data: [
                        props.minorAttributes.offensive,
                        props.majorAttributes.offensive,
                        props.minorAttributes.defensive,
                        props.majorAttributes.defensive,
                        props.minorAttributes.utility,
                        props.majorAttributes.utility
                    ],
                    backgroundColor: [red, transparent, blue, transparent, yellow, transparent],
                    borderColor: [red, red, blue, blue, yellow, yellow],
                }]
            },
            options: {
                cutoutPercentage: 90
            }
        });
    });

    return (
        <div className="sidebarGrid col-xs-12 col-lg-3 holo-card">
            <div className="skillsCircle row lineBelow">
                <canvas id="donutChart"/>
            </div>
            <div className="attrsSection col-xs-12 row lineBelow">
                <Col>
                    <Row className="align-items-center">
                        <img src={OffensiveMajorIcon} alt="Red" className="attrsIcon col-xs-3"/>
                        <div className="col-xs-3">{props.majorAttributes.offensive}</div>
                    </Row>
                    <Row className="align-items-center">
                        <img src={DefensiveMajorIcon} alt="Blue" className="attrsIcon col-xs-3"/>
                        <div className="col-xs-3">{props.majorAttributes.defensive}</div>
                    </Row>
                    <Row className="align-items-center">
                        <img src={UtilityMajorIcon} alt="Yellow" className="attrsIcon col-xs-3"/>
                        <div className="col-xs-3">{props.majorAttributes.utility}</div>
                    </Row>
                </Col>
                <Col>
                    <Row className="align-items-center">
                        <img src={OffensiveMinorIcon} alt="Red" className="attrsIcon col-xs-3"/>
                        <div className="col-xs-3">{props.minorAttributes.offensive}</div>
                    </Row>
                    <Row className="align-items-center">
                        <img src={DefensiveMinorIcon} alt="Blue" className="attrsIcon col-xs-3"/>
                        <div className="col-xs-3">{props.minorAttributes.defensive}</div>
                    </Row>
                    <Row className="align-items-center">
                        <img src={UtilityMinorIcon} alt="Yellow" className="attrsIcon col-xs-3"/>
                        <div className="col-xs-3">{props.minorAttributes.utility}</div>
                    </Row>
                </Col>
            </div>
            <Col xs={12} className="defenseStats lineBelow">
                <h4>Armor</h4>
                <h5>{props.armor}</h5>
                <h4>Health</h4>
                <h5>{props.health}</h5>
            </Col>
            <Col xs={12} className="skillTier">
                <p>Skill Tier</p>
                <Row>
                    <img src={UtilityMajorIcon} alt="Yellow" className="attrsIcon col-xs-1" align="bottom"/>
                    {skillCells}
                </Row>
            </Col>
        </div>
    );
}
