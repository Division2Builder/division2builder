import React from 'react';
import PropTypes from 'prop-types';
import {Modal, Button, Row, Col} from 'react-bootstrap';
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
import Breadbasket from '../../icons/weapons/talents/Breadbasket.png'
import ClosePersonal from '../../icons/weapons/talents/Close & Personal.png'
import Eyeless from '../../icons/weapons/talents/Eyeless.png'
import FastHands from '../../icons/weapons/talents/Fast Hands.png'
import Ignited from '../../icons/weapons/talents/Ignited.png'
import Killer from '../../icons/weapons/talents/Killer.png'
import LuckyShot from '../../icons/weapons/talents/Lucky Shot.png'
import Optimist from '../../icons/weapons/talents/Optimist.png'
import Perpetuation from '../../icons/weapons/talents/Perpetuation.png'
import Preservation from '../../icons/weapons/talents/Preservation.png'
import Ranger from '../../icons/weapons/talents/Ranger.png'
import Reformation from '../../icons/weapons/talents/Reformation.png'
import Rifleman from '../../icons/weapons/talents/Rifleman.png'
import Sadist from '../../icons/weapons/talents/Sadist.png'
import Spike from '../../icons/weapons/talents/Spike.png'
import SteadyHanded from '../../icons/weapons/talents/Steady Handed.png'
import Strained from '../../icons/weapons/talents/Strained.png'
import Vindictive from '../../icons/weapons/talents/Vindictive.png'
import weaponData from './weaponData';
import './selector.scss';

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

const weaponTaletsIcons = {
    breadbasket: Breadbasket,
    closePersonal: ClosePersonal,
    eyeless: Eyeless,
    fasthands: FastHands,
    ignited: Ignited,
    killer: Killer,
    luckyshot: LuckyShot,
    optimist: Optimist,
    perpetuation: Perpetuation,
    preservation: Preservation,
    ranger: Ranger,
    reformation: Reformation,
    rifleman: Rifleman,
    sadist: Sadist,
    spike: Spike,
    steadyHanded: SteadyHanded,
    strained: Strained,
    vindictive: Vindictive
}

function Selector(props) {
    return (
        <div className={`holo-card ${props.category}`} id={props.category}>
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

export function WeaponCard(props) {
    const [show, setShow] = React.useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <div className={`holo-card weapon`} id={"weapon"} onClick={handleShow}>
                {
                    props.weapon.name !== "" ? (
                        <>
                            <img className="icon" src={weaponIcons[props.weapon.type]} alt={props.category}/>
                            <span className={`name ${props.weapon.isNamed && 'named'}`}>{props.weapon.name}</span><br/>
                            <span className="damage">{props.damage}</span>
                            <img className="talentIcon" src={weaponTaletsIcons[props.weapon.talent.icon]} alt={props.weapon.talent.icon}/>
                        </>
                    ):(
                        <span className="unselected">Select an weapon</span>
                    )
                }
                
            </div>
            <Modal show={show} onHide={handleClose} centered size="lg">
                <Modal.Header closeButton>
                    <Modal.Title>{props.weapon.name ? (<>Modal heading</>) : (<>somethign else</>)}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row>
                        <Col>
                            {Object.keys(weaponIcons).map((keyName, keyValue) => {
                                return (
                                    <a href={`#${keyName}`}><img className='sectionIcon' src={weaponIcons[keyName]} alt={keyName}/></a>
                                )
                            })}
                        </Col>
                        <Col lg={10} md="auto" className="weaponSelectorContainer">
                            {
                                Object.keys(weaponIcons).map((keyname, keyvalue) => {
                                    return (
                                        <div className="weaponSelectorSection" id={keyname}>
                                            <div className="weaponSelectorTitle">{keyname}</div>
                                            {
                                                weaponData.filter((weapon) => {
                                                    return weapon.class === keyname
                                                }).sort((weapon1, weapon2) => {
                                                    return weapon1.name.localeCompare(weapon2.name)
                                                }).map((weapon) => {
                                                    return (
                                                        <div className={`weaponSelectorItem ${weapon.isNamed && 'named'} ${weapon.isExotic && 'exotic'}`}>{weapon.name}</div>
                                                    )
                                                })
                                            }
                                        </div>
                                    )
                                })
                            }
                        </Col>
                    </Row>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

WeaponCard.propTypes={
    weapon: PropTypes.shape({
        name: PropTypes.string,
        type: PropTypes.string,
        damage: PropTypes.number,
        talent: PropTypes.shape({
            name: PropTypes.string,
            desc: PropTypes.string,
            icon: PropTypes.string
        }),
        isNamed: PropTypes.bool
    }),
    context: PropTypes.string
}

WeaponCard.defaultProps={
    isSelected: false
}

export default Selector;