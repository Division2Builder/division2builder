import React from 'react';
import Stats from './stats.js'
import Mask from '../icons/gear_types/mask.png'
import Backpack from '../icons/gear_types/backpack.png'
import Vest from '../icons/gear_types/vest.png'
import Glove from '../icons/gear_types/gloves.png'
import Holster from '../icons/gear_types/holster.png'
import Kneepads from '../icons/gear_types/kneepads.png'
import Rifle from '../icons/weapons/Rifle.png'
import './builder.scss'

function GearSelection() {
    return (
        <div className="col-xs-12 col-lg-9 row">
            <div className="holo-card signature">
                Signature
            </div>
            <div className="holo-card grenade">
                Grenade
            </div>
            <div className="holo-card weapon">
                <img className="icon" src={Rifle} alt="primary"/>
                <span className="name named">Baker's Dozen</span>
            </div>
            <div className="holo-card weapon">
                <span className="unselected">Select a Weapon</span>
            </div>
            <div className="holo-card sidearm">
                <span className="unselected">Select a Sidearm</span>
            </div>
            <div className="holo-card armor" id="mask">
                <img className="icon" src={Mask} alt="mask"/>
                <span className="unselected">Select a Mask</span>
            </div>
            <div className="holo-card armor" id="backpack">
                <img className="icon" src={Backpack} alt="backpack"/>
                <span className="name">Yaahl Pack</span>
            </div>
            <div className="holo-card armor" id="vest">
                <img className="icon" src={Vest} alt="vest"/>
                <span className="unselected">Select a Vest</span>
            </div>
            <div className="holo-card armor" id="glove">
                <img className="icon" src={Glove} alt="glove"/>
                <span className="unselected">Select a Glove</span>
            </div>
            <div className="holo-card armor" id="holster">
                <img className="icon" src={Holster} alt="holster"/>
                <span className="unselected">Select a Holster</span>
            </div>
            <div className="holo-card armor" id="kneepads">
                <img className="icon" src={Kneepads} alt="kneepads"/>
                <span className="unselected">Select a KneePad</span>
            </div>
            <div className="holo-card skill" >
                <span className="unselected">Select a skill</span>
            </div>
            <div className="holo-card skill" >
                <span className="unselected">Select a skill</span>
            </div>

            <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#statsModal">
                View Stats
            </button>
            
            <div class="modal fade" id="statsModal" role="dialog" aria-labelledby="statsModalLabel">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="statsModalLabel">Stats</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <Stats/>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
    
export default GearSelection;
