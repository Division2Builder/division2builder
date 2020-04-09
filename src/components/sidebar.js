import React from 'react';
import './sidebar.css'

export default function Sidebar() {
    return (
        <div className="sidebarGrid card">
            <div className="circleLevel lineBelow">
                Circle breakdown
            </div>
            <div className="attrs lineBelow">
                Placeholder Text
            </div>
            <div className="defenseStats lineBelow">
                <div>Armor</div>
                <div>123.4k</div>
                <div>Health</div>
                <div>123.4k</div>
            </div>
            <div className="skillTier">
                Placeholder Text
            </div>
        </div>
    );
}
