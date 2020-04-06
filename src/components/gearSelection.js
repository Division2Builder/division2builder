import React from 'react';
import Mask from '../icons/gear_types/mask.png'
import Backpack from '../icons/gear_types/backpack.png'
import Vest from '../icons/gear_types/vest.png'
import Glove from '../icons/gear_types/gloves.png'
import Holster from '../icons/gear_types/holster.png'
import Kneepads from '../icons/gear_types/kneepads.png'
import Rifle from '../icons/weapons/Rifle.png'
import './builder.css'

function GearSelection() {
    return (
        <div className="createBuildGrid">
            <div className="card signature">
                Placeholder Text
            </div>
            <div className="card grenade">
                Placeholder Text
            </div>
            <div className="card weapon">
                <img className="icon" src={Rifle} alt="primary"/>
                <span className="name named">Baker's Dozen</span>
            </div>
            <div className="card weapon">
                <span className="unselected">Select a Weapon</span>
            </div>
            <div className="card sidearm">
                <span className="unselected">Select a Sidearm</span>
            </div>
            <div className="card armor" id="mask">
                <img className="icon" src={Mask} alt="mask"/>
                <span className="unselected">Select a Mask</span>
            </div>
            <div className="card armor" id="backpack">
                <img className="icon" src={Backpack} alt="backpack"/>
                <span className="name">Yaahl Pack</span>
            </div>
            <div className="card armor" id="vest">
                <img className="icon" src={Vest} alt="vest"/>
                <span className="unselected">Select a Vest</span>
            </div>
            <div className="card armor" id="glove">
                <img className="icon" src={Glove} alt="glove"/>
                <span className="unselected">Select a Glove</span>
            </div>
            <div className="card armor" id="holster">
                <img className="icon" src={Holster} alt="holster"/>
                <span className="unselected">Select a Holster</span>
            </div>
            <div className="card armor" id="kneepads">
                <img className="icon" src={Kneepads} alt="kneepads"/>
                <span className="unselected">Select a KneePad</span>
            </div>
            <div className="card skill" >
                <span className="unselected">Select a skill</span>
            </div>
            <div className="card skill" >
                <span className="unselected">Select a skill</span>
            </div>
        </div>
    );
}
    
export default GearSelection;
    