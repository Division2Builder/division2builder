import React from 'react';
import './statSection.scss'

function StatSection(props) {
    return (
        <div id={props.id} className="statSection">
            <h6>{props.name}</h6>
            {props.stats.map((stat, index) => (
                <div key={index} className="stat">
                    <span className="statAmount">{stat.statValue}</span>
                    <span className="statName">{stat.statValue}</span>
                </div>
            ))}
        </div>
    );
}

export default StatSection;
