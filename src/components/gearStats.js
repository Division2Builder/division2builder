import React, {useState} from 'react';
import './gearStats.scss'
import { Row } from 'react-bootstrap';

function GearStats(props) {
    const [chosen, setChosen] = useState();
    const weaponTypes = ["rifle", "assault", "marksman", "smg", "lmg", "shotgun", "sidearm"];
    const gearTypes = ["backpack", "mask", "vest", "kneepads", "glove", "holster"];

    if (weaponTypes.includes(props.gearPiece.type)) {
        var info = <Weapon item = {props.gearPiece}/>;
    } 
    else if (gearTypes.includes(props.gearPiece.type)) {
        var info = <GearPiece item = {props.gearPiece}/>;
    }

    return (
        <div id={props.id} className="statSection">
            <h6>{props.gearPiece.name}</h6>
            {info}
        </div>
    );
}

export default GearStats;

export function Weapon(props) {
    return (
        <div>
            <Row>
                <div className="stat">
                    <span className="statName">Type</span>
                    <span className="statAmount">{props.item.type}</span>
                </div>
            </Row>
            <Row>
                <div className="stat">
                    <span className="statName">Damage</span>
                    <span className="statAmount">{props.item.damage}</span>
                </div>
            </Row>
            <Row>
                <div className="stat">
                    <span className="statName">Talent</span>
                    <span className="statAmount">{props.item.talent.name}</span>
                </div>
            </Row>
        </div>
    );
}

export function GearPiece(props) {
    return (
        <div>
            <Row>
                <div className="stat">
                    <span className="statName">Type</span>
                    <span className="statAmount">{props.item.type}</span>
                </div>
            </Row>
            <Row>
                <div className="stat">
                    <span className="statName">Brand Set</span>
                    <span className="statAmount">{props.item.brandSet}</span>
                </div>
            </Row>
            <Row>
                <div className="stat">
                    <span className="statName">Armor</span>
                    <span className="statAmount">{props.item.armor}</span>
                </div>
            </Row>
        </div>
    );
}
