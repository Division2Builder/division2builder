import React from 'react';
import PropTypes from 'prop-types';
import {Button, Col, Modal, Row} from 'react-bootstrap';
// Armor Types
import Mask from '../../icons/gear_types/mask.png';
import Backpack from '../../icons/gear_types/backpack.png';
import Vest from '../../icons/gear_types/vest.png';
import Glove from '../../icons/gear_types/gloves.png';
import Holster from '../../icons/gear_types/holster.png';
import Kneepads from '../../icons/gear_types/kneepads.png';
// Weapons
import Assault from '../../icons/weapons/AssaultRifle.png';
import LMG from '../../icons/weapons/Light Machine Gun.png';
import Marksman from '../../icons/weapons/Marksman Rifle.png';
import Rifle from '../../icons/weapons/Rifle.png';
import Shotgun from '../../icons/weapons/Shotgun.png';
import Submachine from '../../icons/weapons/Submachine Gun.png';
// Specializations
import Demolistionist from '../../icons/specializations/demolitionist.png';
import Survivalist from '../../icons/specializations/survivalist.png';
import Sharpshooter from '../../icons/specializations/sharpshooter.png';
import Gunner from '../../icons/specializations/gunner.png';
import Technician from '../../icons/specializations/technician.png';
// Weapon Talents
import Breadbasket from '../../icons/weapons/talents/Breadbasket.png';
import ClosePersonal from '../../icons/weapons/talents/Close & Personal.png';
import Eyeless from '../../icons/weapons/talents/Eyeless.png';
import FastHands from '../../icons/weapons/talents/Fast Hands.png';
import Ignited from '../../icons/weapons/talents/Ignited.png';
import Killer from '../../icons/weapons/talents/Killer.png';
import LuckyShot from '../../icons/weapons/talents/Lucky Shot.png';
import Optimist from '../../icons/weapons/talents/Optimist.png';
import Perpetuation from '../../icons/weapons/talents/Perpetuation.png';
import Preservation from '../../icons/weapons/talents/Preservation.png';
import Ranger from '../../icons/weapons/talents/Ranger.png';
import Reformation from '../../icons/weapons/talents/Reformation.png';
import Rifleman from '../../icons/weapons/talents/Rifleman.png';
import Sadist from '../../icons/weapons/talents/Sadist.png';
import Spike from '../../icons/weapons/talents/Spike.png';
import SteadyHanded from '../../icons/weapons/talents/Steady Handed.png';
import Strained from '../../icons/weapons/talents/Strained.png';
import Vindictive from '../../icons/weapons/talents/Vindictive.png';
// Brand Sets
import FiveOneOne from '../../icons/gear_sets/511.png';
import AcesAndEights from '../../icons/gear_sets/AcesAndEights.png';
import Airaldi from '../../icons/gear_sets/Airaldi.png';
import Alps from '../../icons/gear_sets/Alps.png';
import Badger from '../../icons/gear_sets/Badger.png';
import China from '../../icons/gear_sets/China.png';
import Douglas from '../../icons/gear_sets/Douglas.png';
import Fenris from '../../icons/gear_sets/Fenris.png';
import Gila from '../../icons/gear_sets/Gila.png';
import HardWire from '../../icons/gear_sets/HardWired.png';
import Murakami from '../../icons/gear_sets/Murakami.png';
import NegotiatorsDilemma from '../../icons/gear_sets/NegotiatorsDilemma.png';
import OngoingDirective from '../../icons/gear_sets/OngoingDirective.png';
import Overlord from '../../icons/gear_sets/Overlord.png';
import Petrov from '../../icons/gear_sets/Petrov.png';
import Providence from '../../icons/gear_sets/Providence.png';
import Richter from '../../icons/gear_sets/Richter.png';
import Sokolov from '../../icons/gear_sets/Sokolov.png';
import TipOfTheSpear from '../../icons/gear_sets/TipOfTheSpear.png';
import TruePatriot from '../../icons/gear_sets/TruePatriot.png';
import Wyvern from '../../icons/gear_sets/Wyvern.png';
import Yaahl from '../../icons/gear_sets/Yaahl.png';
// Armor Talents
import Vigilance from '../../icons/gear_sets/talents/Vigilance.png';
// Skills
import StickyBomb from '../../icons/skills/StickyBomb.png';
// import TripWireTrap from '../../icons/skills/TripWireTrap.png';
// import Decoy from '../../icons/skills/Decoy.png';
import ChemLauncher from '../../icons/skills/ChemLauncher.png';
import Drone from '../../icons/skills/Drone.png';
import Firefly from '../../icons/skills/Firefly.png';
import Hive from '../../icons/skills/Hive.png';
import Pulse from '../../icons/skills/Pulse.png';
import SeekerMine from '../../icons/skills/SeekerMine.png';
import Shield from '../../icons/skills/Shield.png';
import Turret from '../../icons/skills/Turret.png';
// Data
import weaponData from './data/weapons';
import armorData from './data/armor';
import skillData from './data/skills';
import './selector.scss';

const armorIcons = {
    mask: Mask,
    backpack: Backpack,
    vest: Vest,
    glove: Glove,
    holster: Holster,
    kneepads: Kneepads,
};

const gearSets = {
    fiveoneone: FiveOneOne,
    aces: AcesAndEights,
    airaldi: Airaldi,
    alps: Alps,
    badger: Badger,
    china: China,
    douglas: Douglas,
    fenris: Fenris,
    gila: Gila,
    hardwire: HardWire,
    murakami: Murakami,
    negotiators: NegotiatorsDilemma,
    ongoing: OngoingDirective,
    overlord: Overlord,
    petrov: Petrov,
    providence: Providence,
    richter: Richter,
    sokolov: Sokolov,
    tipofthespear: TipOfTheSpear,
    truepatriot: TruePatriot,
    wyvern: Wyvern,
    yaahl: Yaahl
};

const armorTalents = {
    vigilance: Vigilance
}

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

const weaponTalentsIcons = {
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

const skillGroups = {
    "Sticky Bomb": StickyBomb,
    // "Trip-Wire Trap": TripWireTrap,
    // Decoy,
    "Chem Launcher": ChemLauncher,
    Drone,
    Firefly,
    Hive,
    Pulse,
    "Seeker Mine": SeekerMine,
    Shield,
    Turret
}

const skillIcons = {
    "Burn Sticky Bomb": StickyBomb,
    "Explosive Sticky Bomb": StickyBomb
}

function Selector(props) {
    return (
        <div className={`holo-card ${props.category}`} id={props.category}>
            {props.weaponType && (
                <img className="icon" src={weaponIcons[props.weaponType]} alt={props.category}/>
            )}

            {props.armorPiece && (
                <img className="icon" src={armorIcons[props.armorPiece]} alt={props.category}/>
            )}
            {props.specialization && (
                <>
                    <img className="icon" src={specializationIcons[props.specialization]} alt={props.category}/>
                    <span
                        className="specializationName">{props.specialization[0].toUpperCase() + props.specialization.slice(1)}</span>
                </>
            )}
            {
                props.isSelected ? (
                    <>
                        <span className={`name ${props.isNamed && 'named'}`}>{props.name}</span>
                    </>
                ) : (
                    <span className="unselected">Select an item</span>
                )
            }

        </div>
    )
}

Selector.propTypes = {
    isWeapon: PropTypes.bool,
    isSelected: PropTypes.bool,
    isNamed: PropTypes.bool,
    category: PropTypes.oneOf(['weapon', 'armor', 'sidearm', 'specialization',
        'skill']).isRequired,
    name: PropTypes.string,
    armorPiece: PropTypes.oneOf(['mask', 'backpack', 'vest', 'glove', 'holster',
        'kneepads']),
    weaponType: PropTypes.oneOf(['assult', 'lmg', 'marksman', 'rifle', 'shotgun',
        'submachine']),
    specialization: PropTypes.oneOf(['demolitionist', 'survivalist',
        'sharpshooter', 'gunner', 'technician'])
};

Selector.defaultProps = {
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
                            <span
                                className={`name ${props.weapon.isNamed && 'named'} ${props.weapon.isExotic && 'exotic'}`}>{props.weapon.name}</span><br/>
                            <span className="damage">{props.damage}</span>
                            <img className="talentIcon" src={weaponTalentsIcons[props.weapon.talent.icon]}
                                 alt={props.weapon.talent.icon}/>
                        </>
                    ) : (
                        <span className="unselected">Select a weapon</span>
                    )
                }

            </div>
            <Modal show={show} onHide={handleClose} centered size="lg">
                <Modal.Header closeButton>
                    <Modal.Title>Select a weapon</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row>
                        <Col>
                            {Object.keys(weaponIcons).map((keyName, keyValue) => {
                                return (
                                    <a href={`#${keyName}`}><img className='sectionIcon' src={weaponIcons[keyName]}
                                                                 alt={keyName}/></a>
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
                                                    return weapon.type === keyname
                                                }).sort((weapon1, weapon2) => {
                                                    return weapon1.name.localeCompare(weapon2.name)
                                                }).map((weapon) => {
                                                    return (
                                                        <div
                                                            className={`weaponSelectorItem ${weapon.isNamed && 'named'} ${weapon.isExotic && 'exotic'}`}
                                                            onClick={() => {
                                                                props.updateWeapon(weapon, props.context);
                                                                handleClose();
                                                            }}>{weapon.name}</div>
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

WeaponCard.propTypes = {
    weapon: PropTypes.shape({
        name: PropTypes.string,
        type: PropTypes.string,
        damage: PropTypes.number,
        talent: PropTypes.shape({
            name: PropTypes.string,
            desc: PropTypes.string,
            icon: PropTypes.string
        }),
        isNamed: PropTypes.bool,
        isExotic: PropTypes.bool
    }),
    context: PropTypes.oneOf(['primary', 'secondary'])
}

export function ArmorCard(props) {
    const [show, setShow] = React.useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <div className={`holo-card armor`} id={"armor"} onClick={handleShow}>
                {
                    props.armor.name !== "" ? (
                        <div className="selectedArmor" style={{position: 'relative', zIndex: 1, height: '100%'}}
                        >
                            {/* This is kinda hacky but the only way I can get the image in the background and transparent */}
                            <div style={{
                                backgroundImage: `url(${armorIcons[props.context]})`,
                                backgroundRepeat: 'no-repeat',
                                opacity: 0.3,
                                backgroundPosition: 'center',
                                height: '100%',
                                zIndex: -1,
                                position: "absolute",
                                top: 0,
                                bottom: 0,
                                left: 0,
                                right: 0,
                                width: '100%'
                            }}/>
                            <img className="icon" src={gearSets[props.armor.brandSet]} alt={props.armor.brandSet}/>
                            <div className={`armorName ${props.armor.isNamed && 'named'}`}>{props.armor.name}</div>
                            <div className="armorValue">{props.armor.armor}</div>
                            <img className="icon" src={armorTalents[props.armor.talent.icon]}
                                 alt={props.armor.talent.name}/>
                        </div>
                    ) : (
                        <>
                            <img className="icon" src={armorIcons[props.context]} alt={props.context}/>
                            <span className="unselected">Select a {props.context}</span>
                        </>
                    )
                }

            </div>
            <Modal show={show} onHide={handleClose} centered size="lg">
                <Modal.Header closeButton>
                    <Modal.Title>Select a {props.context}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row>
                        <Col className="gearsetSelectorContainer">
                            {Object.keys(gearSets).map((keyName, keyValue) => {
                                return (
                                    <a href={`#${keyName}`}><img className='sectionIcon' src={gearSets[keyName]}
                                                                 alt={keyName}/></a>
                                )
                            })}
                        </Col>
                        <Col lg={10} md="auto" className="armorSelectorContainer">
                            {
                                Object.keys(gearSets).map((keyname, keyvalue) => {
                                    return (
                                        <div className="armorSelectorSection" id={keyname}>
                                            <div className="armorSelectorTitle">{keyname}</div>
                                            {
                                                armorData.filter((armor) => {
                                                    return armor.brandSet === keyname && armor.type === props.context
                                                }).sort((armor1, armor2) => {
                                                    return armor1.name.localeCompare(armor2.name)
                                                }).map((armor) => {
                                                    return (
                                                        <div
                                                            className={`armorSelectorItem ${armor.isNamed && 'named'} ${armor.isExotic && 'exotic'}`}
                                                            onClick={() => {
                                                                props.updateArmor(armor, props.context);
                                                                handleClose();
                                                            }}>{armor.name}</div>
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

ArmorCard.propTypes = {
    armor: PropTypes.shape({
        name: PropTypes.string,
        brandSet: PropTypes.oneOf([
            'fiveoneone', 'aces', 'airaldi', 'alps', 'badger', 'china',
            'douglas', 'fenris', 'gila', 'hardwire', 'murakami', 'negotiators',
            'ongoing', 'overlord', 'petrov', 'providence', 'richter', 'sokolov',
            'tipofthespear', 'truepatriot', 'wvyvern', 'yaahl'
        ]),
        armor: PropTypes.number,
        primaryAttribute: PropTypes.string,
        secondaryAttributes: PropTypes.arrayOf(PropTypes.string),
        talent: PropTypes.shape({
            name: PropTypes.string,
            desc: PropTypes.string,
            icon: PropTypes.string
        }),
        isNamed: PropTypes.bool,
        isExotic: PropTypes.bool,
        isGearSet: PropTypes.bool
    }),
    context: PropTypes.oneOf(['mask', 'backpack', 'chest', 'gloves', 'holster', 'kneepads']),
    updateArmor: PropTypes.func
}

export function SkillCard(props) {
    const [show, setShow] = React.useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <div className={`holo-card skill`} id={"skill"} onClick={handleShow}>
                {
                    props.name !== "" ? (
                        <>
                            <img className="icon" src={skillIcons[props.name]} alt={props.name}/>
                            <span className="name">{props.name}</span><br/>

                            {Object.entries(props.baseStats).forEach(([key, value]) =>
                                <span className="damage">{key} : {value}</span>
                            )}
                        </>
                    ) : (
                        <span className="unselected">Select a skill</span>
                    )
                }
            </div>

            <Modal show={show} onHide={handleClose} centered size="lg">
                <Modal.Header closeButton>
                    <Modal.Title>Select a skill</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row>
                        <Col>
                            {Object.keys(skillGroups).map((key) => {
                                return (
                                    <a href={`#${key}`}><img className='sectionIcon' src={skillGroups[key]}
                                                                 alt={key}/></a>
                                )
                            })}
                        </Col>
                        <Col lg={10} md="auto" className="weaponSelectorContainer">
                            {
                                Object.keys(skillGroups).map((key) => {
                                    return (
                                        <div className="weaponSelectorSection" id={`${key}-section`}>
                                            <div className="weaponSelectorTitle">{key}</div>
                                            {
                                                skillData[key].map((skill) => {
                                                    return (
                                                        <div
                                                            className='weaponSelectorItem'
                                                            onClick={() => {
                                                                props.updateSkill(skill, props.context);
                                                                handleClose();
                                                            }}>{skill.name}</div>
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

export default Selector;
