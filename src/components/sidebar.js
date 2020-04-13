import React, {useEffect} from 'react';
import Chart from 'chart.js';

import './sidebar.scss'
import Red from '../icons/attrs/red.png'
import Yellow from '../icons/attrs/yellow.png'
import Blue from '../icons/attrs/blue.png'

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
                <div className="col">
                    <div className="row">
                        <img src={Red} alt="Red" className="attrsIcon col-xs-3"/>
                        <div className="col-xs-3 col-xs-offset-1">5</div>
                    </div>
                    <div className="row">
                        <img src={Blue} alt="Blue" className="attrsIcon col-xs-3"/>
                        <div className="col-xs-3 col-xs-offset-1">5</div>
                    </div>
                    <div className="row">
                        <img src={Yellow} alt="Yellow" className="attrsIcon col-xs-3"/>
                        <div className="col-xs-3 col-xs-offset-1">5</div>
                    </div>
                </div>
                <div className="col">
                    <div className="row align-items-center">
                        <img src={Red} alt="Red" className="attrsIcon col-xs-3"/>
                        <div className="col-xs-3 col-xs-offset-1">5</div>
                    </div>
                    <div className="row">
                        <img src={Blue} alt="Blue" className="attrsIcon col-xs-3"/>
                        <div className="col-xs-3 col-xs-offset-1">5</div>
                    </div>
                    <div className="row">
                        <img src={Yellow} alt="Yellow" className="attrsIcon col-xs-3"/>
                        <div className="col-xs-3 col-xs-offset-1">5</div>
                    </div>
                </div>
            </div>
            <div className="defenseStats col-xs-12 lineBelow">
                <h4>Armor</h4>
                <h5>123.4k</h5>
                <h4>Health</h4>
                <h5>123.4k</h5>
            </div>
            <div className="skillTier col-xs-12">
                <div>Skill Tier</div>
                <div className="row">
                    <img src={Yellow} alt="Yellow" className="attrsIcon col"/>
                    <div className="skillCell col"></div>
                    <div className="skillCell col"></div>
                    <div className="skillCell col"></div>
                    <div className="skillCell col"></div>
                    <div className="skillCell col"></div>
                    <div className="skillCell col"></div>
                </div>
            </div>
        </div>
    );
}
