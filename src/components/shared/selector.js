import React from 'react';
import PropTypes from 'prop-types';
import Mask from '../../icons/gear_types/mask.png';
import Backpack from '../../icons/gear_types/backpack.png';
import Vest from '../../icons/gear_types/vest.png';
import Glove from '../../icons/gear_types/gloves.png';
import Holster from '../../icons/gear_types/holster.png';
import Kneepads from '../../icons/gear_types/kneepads.png';
import Assult from '../../icons/weapons/AssultRifle.png';
import LMG from '../../icons/weapons/Light Machine Gun.png';
import Marksman from '../../icons/weapons/Marksman Rifle.png';
import Rifle from '../../icons/weapons/Rifle.png';
import Shotgun from '../../icons/weapons/Shotgun.png';
import Submachine from '../../icons/weapons/Submachine Gun.png';
import './selector.css';

const armorIcons = {
    mask: Mask,
    backpack: Backpack,
    vest: Vest,
    glove: Glove,
    holster: Holster,
    kneepads: Kneepads
}

const weaponIcons = {
    assult: Assult,
    lmg: LMG,
    marksman: Marksman,
    rifle: Rifle,
    shotgun: Shotgun,
    submachine: Submachine
}

function Selector() {
    return (
        <div className={`card ${this.props.category}`} id={this.props.category}>
            
            {
                this.props.isWeapon ? (
                    <img className="icon" src={weaponIcons[this.props.weaponType]} alt={this.props.category}/>
                ) : (
                    <img className="icon" src={armorIcons[this.props.armorPiece]} alt={this.props.category}/>
                )
            }
            
            {
                this.props.isSelected ? (
                    <>
                        <span className={`name ${this.props.isNamed && 'named'}`}>Baker's Dozen</span>
                    </>
                ):(
                    <span className="unselected">Select a Glove</span>
                )
            }
            
        </div>
    )
}

Selector.propTypes={
    isWeapon: PropTypes.bool,
    isSelected: PropTypes.bool,
    isNamed: PropTypes.bool,
    category: PropTypes.oneOf(['weapon', 'armor', 'sidearm', 'signature', 
                               'gernade', 'skill']).isRequired,
    name: PropTypes.string,
    armorPiece: PropTypes.oneOf(['mask', 'backpack', 'vest', 'glove', 'holster', 
                                 'kneepads']),
    weaponType: PropTypes.oneOf(['assult', 'lmg', 'marksman', 'rifle', 'shotgun', 
                                 'submachine'])
};

Selector.defaultProps={
    isWeapon: false,
    isSelected: false,
    isNamed: false
}

export default Selector