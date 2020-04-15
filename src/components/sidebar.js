import React, {useEffect} from 'react';
import Chart from 'chart.js';

import './sidebar.scss';
import Red from '../icons/attrs/red.png';
import Yellow from '../icons/attrs/yellow.png';
import Blue from '../icons/attrs/blue.png';
import {Col, Row} from 'react-bootstrap';

export default function Sidebar() {
    useEffect(() => {
        const ctx = document.getElementById('donutChart').getContext('2d');
        new Chart(ctx, {
            type: 'doughnut',
            data: {
                datasets: [{
                    data: [5, 5, 5],
                    backgroundColor: [
                        '#ED4040',
                        '#70B0F2',
                        '#E9C16B'
                    ],
                    borderColor: [
                        '#ED4040',
                        '#70B0F2',
                        '#E9C16B'
                    ],
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
                        <img src={Red} alt="Red" className="attrsIcon col-xs-3"/>
                        <div className="col-xs-3">5</div>
                    </Row>
                    <Row className="align-items-center">
                        <img src={Blue} alt="Blue" className="attrsIcon col-xs-3"/>
                        <div className="col-xs-3">5</div>
                    </Row>
                    <Row className="align-items-center">
                        <img src={Yellow} alt="Yellow" className="attrsIcon col-xs-3"/>
                        <div className="col-xs-3">5</div>
                    </Row>
                </Col>
                <Col>
                    <Row className="align-items-center">
                        <img src={Red} alt="Red" className="attrsIcon col-xs-3"/>
                        <div className="col-xs-3">5</div>
                    </Row>
                    <Row className="align-items-center">
                        <img src={Blue} alt="Blue" className="attrsIcon col-xs-3"/>
                        <div className="col-xs-3">5</div>
                    </Row>
                    <Row className="align-items-center">
                        <img src={Yellow} alt="Yellow" className="attrsIcon col-xs-3"/>
                        <div className="col-xs-3">5</div>
                    </Row>
                </Col>
            </div>
            <Col xs={12} className="defenseStats lineBelow">
                <h4>Armor</h4>
                <h5>123.4k</h5>
                <h4>Health</h4>
                <h5>123.4k</h5>
            </Col>
            <Col xs={12} className="skillTier">
                <p>Skill Tier</p>
                <Row>
                    <img src={Yellow} alt="Yellow" className="attrsIcon col-xs-1" align="bottom"/>
                    <Col className="skillCell"/>
                    <Col className="skillCell"/>
                    <Col className="skillCell"/>
                    <Col className="skillCell"/>
                    <Col className="skillCell"/>
                    <Col className="skillCell"/>
                </Row>
            </Col>
        </div>
    );
}
