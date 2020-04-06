import React from 'react';
import './detailedStats.css'
import DetailedStatsLine from "./detailedStatsLine";
import BreakdownItem from "./breakdownItem";

function DetailedStats() {
    return (
        <div className="detailedStatsGrid">
            <div className="card statsIcons">
                <img className="dsIco weaponTalentsIcon" alt="logo"/>
                <img className="dsIco weaponStatsIcon" alt="logo"/>
                <img className="dsIco damageIcon" alt="logo"/>
                <img className="dsIco armorTalentsIcon" alt="logo"/>
                <img className="dsIco armorStatsIcon" alt="logo"/>
                <img className="dsIco defenseIcon" alt="logo"/>
                <img className="dsIco hiveIcon" alt="logo"/>
                <img className="dsIco droneIcon" alt="logo"/>
            </div>
            <div className="card statsList">
                <div className="statsGroup">
                    <DetailedStatsLine/>
                </div>
                <div className="statsGroup">
                    <DetailedStatsLine/>
                </div>
                <div className="statsGroup">
                    <DetailedStatsLine/>
                </div>
                <div className="statsGroup">
                    <DetailedStatsLine/>
                </div>
                <div className="statsGroup">
                    <DetailedStatsLine/>
                </div>
                <div className="statsGroup">
                    <DetailedStatsLine/>
                </div>
                <div className="statsGroup">
                    <DetailedStatsLine/>
                </div>
                <div className="statsGroup">
                    <DetailedStatsLine/>
                </div>
            </div>
            <div className="card breakdown">
                <h2 className="breakdownTitle">Breakdown</h2>
                <div className="breakdownDescription">
                    <h3>Killer</h3>
                    <p>the description</p>
                    <img src="" alt="logo"/>
                </div>
                <div className="breakdownItems">
                    <p>Found on:</p>
                    <div>
                        <BreakdownItem/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DetailedStats;
