import React, {useEffect} from 'react';
import Chart from 'chart.js';

import './sidebar.css'
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
        <div className="sidebarGrid flex-column card">
            <div className="skillsCircle lineBelow">
                <canvas id="donutChart"/>
            </div>
            <div className="attrsSection flex-row lineBelow">
                <div className="flex-column">
                    <div className="flex-row">
                        <img src={Red} alt="Red" className="attrsIcon"/>
                        <div>5</div>
                    </div>
                    <div className="flex-row">
                        <img src={Blue} alt="Blue" className="attrsIcon"/>
                        <div>5</div>
                    </div>
                    <div className="flex-row">
                        <img src={Yellow} alt="Yellow" className="attrsIcon"/>
                        <div>5</div>
                    </div>
                </div>
                <div className="flex-column">
                    <div className="flex-row">
                        <img src={Red} alt="Red" className="attrsIcon"/>
                        <div>5</div>
                    </div>
                    <div className="flex-row">
                        <img src={Blue} alt="Blue" className="attrsIcon"/>
                        <div>5</div>
                    </div>
                    <div className="flex-row">
                        <img src={Yellow} alt="Yellow" className="attrsIcon"/>
                        <div>5</div>
                    </div>
                </div>
            </div>
            <div className="defenseStats lineBelow">
                <div>Armor</div>
                <div>123.4k</div>
                <div>Health</div>
                <div>123.4k</div>
            </div>
            <div className="skillTier">
                <div>Skill Tier</div>
                <div className="flex-row">
                    <img src={Yellow} alt="Yellow" className="attrsIcon"/>
                    <div className="skillCell"></div>
                    <div className="skillCell"></div>
                    <div className="skillCell"></div>
                    <div className="skillCell"></div>
                    <div className="skillCell"></div>
                    <div className="skillCell"></div>
                </div>
            </div>
        </div>
    );
}
