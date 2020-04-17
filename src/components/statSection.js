import React from 'react';
import './statSection.scss'

function StatSection(props) {
    return (
        <div id={props.id} className="statSection">
            <h6>{props.name}</h6>
            <div className="stat">
                <span className="statAmount">123,456</span>
                <span className="statName">Stat Name</span>
            </div>
            <div className="stat">
                <span className="statAmount">123,456</span>
                <span className="statName">Stat Name</span>
            </div>
            <div className="stat">
                <span className="statAmount">123,456</span>
                <span className="statName">Stat Name</span>
            </div>
        </div>
    );
}

export default StatSection;
