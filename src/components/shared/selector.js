import React from 'react';
import PropTypes from 'prop-types';
import Mask from '../../icons/gear_types/mask.png';
import Backpack from '../../icons/gear_types/backpack.png';
import Vest from '../../icons/gear_types/vest.png';
import Glove from '../../icons/gear_types/gloves.png';
import Holster from '../../icons/gear_types/holster.png';
import Kneepads from '../../icons/gear_types/kneepads.png';
import Assault from '../../icons/weapons/AssaultRifle.png';
import LMG from '../../icons/weapons/Light Machine Gun.png';
import Marksman from '../../icons/weapons/Marksman Rifle.png';
import Rifle from '../../icons/weapons/Rifle.png';
import Shotgun from '../../icons/weapons/Shotgun.png';
import Submachine from '../../icons/weapons/Submachine Gun.png';
import Demolistionist from '../../icons/specializations/demolitionist.png';
import Survivalist from '../../icons/specializations/survivalist.png';
import Sharpshooter from '../../icons/specializations/sharpshooter.png';
import Gunner from '../../icons/specializations/gunner.png'
import Technician from '../../icons/specializations/technician.png'
import './selector.css';

const armorIcons = {
    mask: Mask,
    backpack: Backpack,
    vest: Vest,
    glove: Glove,
    holster: Holster,
    kneepads: Kneepads
};

const weaponIcons = {
    assault: Assault,
    lmg: LMG,
    marksman: Marksman,
    rifle: Rifle,
    shotgun: Shotgun,
    submachine: Submachine
};

const specializationIcons = {
    demolitionist: Demolistionist,
    survivalist: Survivalist,
    sharpshooter: Sharpshooter,
    gunner: Gunner,
    technician: Technician
};

function Selector(props) {
    return (
        <div className={`card ${props.category}`} id={props.category}>
            { props.weaponType && (
                <img className="icon" src={weaponIcons[props.weaponType]} alt={props.category}/>
            )}
            
            { props.armorPiece && (
                <img className="icon" src={armorIcons[props.armorPiece]} alt={props.category}/>
            )}
            { props.specialization && (
                <>
                    <img className="icon" src={specializationIcons[props.specialization]} alt={props.category}/>
                    <span className="specializationName">{props.specialization[0].toUpperCase() + props.specialization.slice(1)}</span>
                </>
            )}
            {
                props.isSelected ? (
                    <>
                        <span className={`name ${props.isNamed && 'named'}`}>{props.name}</span>
                    </>
                ):(
                    <span className="unselected">Select an item</span>
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
                                 'submachine']),
    specialization: PropTypes.oneOf(['demolitionist', 'survivalist', 
                                     'sharpshooter', 'gunner', 'technician'])
};

Selector.defaultProps={
    isWeapon: false,
    isSelected: false,
    isNamed: false
}

export default Selector