import React from 'react';
import './sidebar.css'
import Red from '../icons/attrs/red.png'
import Yellow from '../icons/attrs/yellow.png'
import Blue from '../icons/attrs/blue.png'

export default function Sidebar() {
    return (
        <div className="sidebarGrid flex-column card">
            <div className="circleLevel lineBelow">
                Circle breakdown
            </div>
            <div className="attrsSection flex-row lineBelow">
                <div className="flex-column">
                    <div className="flex-row">
                        <img src={Red} alt="Red" className="attrsIcon"/>
                        <div>5</div>
                    </div>
                    <div className="flex-row">
                        <img src={Yellow} alt="Yellow" className="attrsIcon"/>
                        <div>5</div>
                    </div>
                    <div className="flex-row">
                        <img src={Blue} alt="Blue" className="attrsIcon"/>
                        <div>5</div>
                    </div>
                </div>
                <div className="flex-column">
                    <div className="flex-row">
                        <img src={Red} alt="Red" className="attrsIcon"/>
                        <div>5</div>
                    </div>
                    <div className="flex-row">
                        <img src={Yellow} alt="Yellow" className="attrsIcon"/>
                        <div>5</div>
                    </div>
                    <div className="flex-row">
                        <img src={Blue} alt="Blue" className="attrsIcon"/>
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
                <div className="skillIcons">

                </div>
            </div>
        </div>
    );
}
