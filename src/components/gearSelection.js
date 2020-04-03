import React from 'react';
import Mask from '../icons/gear_types/mask.png'
import Backpack from '../icons/gear_types/backpack.png'
import Vest from '../icons/gear_types/vest.png'
import Glove from '../icons/gear_types/gloves.png'
import Holster from '../icons/gear_types/holster.png'
import Kneepads from '../icons/gear_types/kneepads.png'
import './builder.css'

function GearSelection() {
    return (
        <div className="createBuildGrid">
            <div className="signature">
                Placeholder Text
            </div>
            <div className="gernade">
                Placeholder Text
            </div>
            <div className="weapon">
                Placeholder Text
            </div>
            <div className="weapon">
                Placeholder Text
            </div>
            <div className="sidearm">
                Placeholder Text
            </div>
            <div className="armor" id="mask">
                <img src={Mask} alt="backpack"/>
                Placeholder Text
            </div>
            <div className="armor" id="backpack">
                <img src={Backpack} alt="backpack"/>
                Placeholder Text
            </div>
            <div className="armor" id="vest">
                <img src={Vest} alt="backpack"/>
                Placeholder Text
            </div>
            <div className="armor" id="glove">
                <img src={Glove} alt="backpack"/>
                Placeholder Text
            </div>
            <div className="armor" id="holster">
                <img src={Holster} alt="backpack"/>
                Placeholder Text
            </div>
            <div className="armor" id="kneepads">
                <img src={Kneepads} alt="backpack"/>
                Placeholder Text
            </div>
            <div className="skill" >
                Placeholder Text
            </div>
            <div className="skill" >
                Placeholder Text
            </div>
        </div>
    );
}
    
export default GearSelection;
    