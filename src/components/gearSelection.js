import React from 'react';
import Selector from './shared/selector';
import './builder.css'

function GearSelection() {
    return (
        <div className="createBuildGrid">
            <Selector
                category="specialization"
                isSelected
                specialization="sharpshooter"
            />
            <Selector
                category="gernade"
            />
            <Selector
                isWeapon
                isNamed
                isSelected
                name="Baker's Dozen"
                weaponType="rifle"
                category="weapon"
            />
            <Selector
                isWeapon
                name=""
                category="weapon"
            />
            <Selector
                category="sidearm"
            />
            <Selector
                category="armor"
                armorPiece="mask"
            />
            <Selector
                isSelected
                name="Yaahl Pack"
                category="armor"
                armorPiece="backpack"
            />
            <Selector
                category="armor"
                armorPiece="vest"
            />
            <Selector
                category="armor"
                armorPiece="glove"
            />
            <Selector
                category="armor"
                armorPiece="holster"
            />
            <Selector
                category="armor"
                armorPiece="kneepads"
            />
            <Selector
                category="skill"
            />
            <Selector
                category="skill"
            />
        </div>
    );
}
    
export default GearSelection;
    