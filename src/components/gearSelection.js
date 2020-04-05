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
            <div className="card signature">
                Placeholder Text
            </div>
            <div className="card gernade">
                Placeholder Text
            </div>
            <div className="card weapon">
                Placeholder Text
            </div>
            <div className="card weapon">
                Placeholder Text
            </div>
            <div className="card sidearm">
                Placeholder Text
            </div>
            <div className="card armor" id="mask">
                <img className="icon" src={Mask} alt="backpack"/>
                Placeholder Text
            </div>
            <div className="card armor" id="backpack">
                <img className="icon" src={Backpack} alt="backpack"/>
                Placeholder Text
            </div>
            <div className="card armor" id="vest">
                <img className="icon" src={Vest} alt="backpack"/>
                Placeholder Text
            </div>
            <div className="card armor" id="glove">
                <img className="icon" src={Glove} alt="backpack"/>
                Placeholder Text
            </div>
            <div className="card armor" id="holster">
                <img className="icon" src={Holster} alt="backpack"/>
                Placeholder Text
            </div>
            <div className="card armor" id="kneepads">
                <img className="icon" src={Kneepads} alt="backpack"/>
                Placeholder Text
            </div>
            <div className="card skill" >
                Placeholder Text
            </div>
            <div className="card skill" >
                Placeholder Text
            </div>
        </div>
    );
}
    
export default GearSelection;
    