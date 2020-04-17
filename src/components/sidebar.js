import React, {useEffect} from 'react';
import Chart from 'chart.js';

import './sidebar.scss';
import RedIcon from '../icons/attrs/red.png';
import YellowIcon from '../icons/attrs/yellow.png';
import BlueIcon from '../icons/attrs/blue.png';
import {Col, Row} from 'react-bootstrap';

const red = '#ED4040';
const blue = '#70B0F2';
const yellow = '#E9C16B';
const transparent = '#00000000';

export default function Sidebar(props) {
    let filledSkillCells = [];
    for(let i = 0; i < props.majorAttributes.yellow; i++) {
        filledSkillCells.push(<Col className="skillCell filled"/>);
    }

    let emptySkillCells = [];
    for(let i = props.majorAttributes.yellow; i < 6; i++) {
        emptySkillCells.push(<Col className="skillCell"/>);
    }

    useEffect(() => {
        const ctx = document.getElementById('donutChart').getContext('2d');
        new Chart(ctx, {
            type: 'doughnut',
            data: {
                datasets: [{
                    data: [
                        props.minorAttributes.red,
                        props.majorAttributes.red,
                        props.minorAttributes.blue,
                        props.majorAttributes.blue,
                        props.minorAttributes.yellow,
                        props.majorAttributes.yellow
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
                        <img src={RedIcon} alt="Red" className="attrsIcon col-xs-3"/>
                        <div className="col-xs-3">{props.majorAttributes.red}</div>
                    </Row>
                    <Row className="align-items-center">
                        <img src={BlueIcon} alt="Blue" className="attrsIcon col-xs-3"/>
                        <div className="col-xs-3">{props.majorAttributes.blue}</div>
                    </Row>
                    <Row className="align-items-center">
                        <img src={YellowIcon} alt="Yellow" className="attrsIcon col-xs-3"/>
                        <div className="col-xs-3">{props.majorAttributes.yellow}</div>
                    </Row>
                </Col>
                <Col>
                    <Row className="align-items-center">
                        <img src={RedIcon} alt="Red" className="attrsIcon col-xs-3"/>
                        <div className="col-xs-3">{props.minorAttributes.red}</div>
                    </Row>
                    <Row className="align-items-center">
                        <img src={BlueIcon} alt="Blue" className="attrsIcon col-xs-3"/>
                        <div className="col-xs-3">{props.minorAttributes.blue}</div>
                    </Row>
                    <Row className="align-items-center">
                        <img src={YellowIcon} alt="Yellow" className="attrsIcon col-xs-3"/>
                        <div className="col-xs-3">{props.minorAttributes.yellow}</div>
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
                    <img src={YellowIcon} alt="Yellow" className="attrsIcon col-xs-1" align="bottom"/>
                    {filledSkillCells}
                    {emptySkillCells}
                </Row>
            </Col>
        </div>
    );
}
