import React from 'react';
import './statSection.scss'

function DetailedStat(props) {
    return (
        <div key={props.key} className={props.active ? "stat active" : "stat"} onClick={props.onClick}>
            <span className="statAmount">{props.stat.statValue}</span>
            <span className="statName">{props.stat.statName}</span>
        </div>
    );
}

export default DetailedStat;
