import React from 'react';
import './stats.scss'
import Vest from '../icons/gear_types/vest.png'
import Breakdown from './breakdown';
import StatSection from './statSection';

function Stats() {
    return (
        <div className="statsGrid">
            <div className="grid sectionSelectionGrid">
                <img className="sectionIcon" src={Vest} onClick ="" alt="Weapon Talents"/>
                <img className="sectionIcon" src={Vest} onClick ="" alt="Weapon Stats"/>
                <img className="sectionIcon" src={Vest} onClick ="" alt="Offense"/>
                <img className="sectionIcon" src={Vest} onClick ="" alt="Gear Talents"/>
                <img className="sectionIcon" src={Vest} onClick ="" alt="Gear Brands/Sets"/>
                <img className="sectionIcon" src={Vest} onClick ="" alt="Defense"/>
                <img className="sectionIcon" src={Vest} onClick ="" alt="Skill Slot 1"/>
                <img className="sectionIcon" src={Vest} onClick ="" alt="Skill Slot 2"/>
            </div>
            <div className="grid statValuesGrid">
                <StatSection name="Weapon Talents" id="weaponTalents"/>
                <StatSection name="Weapon Talents" id="weaponTalents"/>
                <StatSection name="Weapon Talents" id="weaponTalents"/>
                <StatSection name="Weapon Talents" id="weaponTalents"/>
                <StatSection name="Weapon Talents" id="weaponTalents"/>
                <StatSection name="Weapon Talents" id="weaponTalents"/>
                <StatSection name="Weapon Talents" id="weaponTalents"/>
                <StatSection name="Weapon Talents" id="weaponTalents"/>
            </div>
            <div className="grid statBreakdownGrid">
                <Breakdown/>
            </div>
        </div>
    );
}
    
export default Stats;
    