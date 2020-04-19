import React from 'react';
import {Modal, Button} from 'react-bootstrap';
import Selector, {WeaponCard} from './shared/card';
import './gear.scss'
import Stats from './stats.js'

class Gear extends React.Component {
    state={
        itemClicked: "",
        primary: {
            name: "Baker's Dozen",
            type: "rifle",
            damage: 235060,
            talent: {
                name: "Perfect Lucky Shot", 
                desc: "Magazine capacity is increased by 30%. Missed shots from cover have a 100% chance to return to the magazine.", 
                icon: "luckyshot"
            },
            isNamed: true
        },
        secondary: {
            name: "",
            type: "",
            damage: 0,
            talent: {
                name: "", 
                desc: "", 
                icon: ""
            },
            isNamed: false
        },
    }

    gearGrid(props) {
        const [show, setShow] = React.useState(false);

        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);

        return (
            <>
                {props.state.itemClicked !== "" && (
                    <div></div>
                )}
                <div className="createBuildGrid col-xs-12 col-lg-9 row">
                    <Selector
                        category="specialization"
                        isSelected
                        specialization="sharpshooter"
                    />
                    <Selector
                        category="grenade"
                    />
                    <WeaponCard
                        weapon={props.state.primary}
                        context="primary"
                    />
                    <WeaponCard
                        weapon={props.state.secondary}
                        context="secondary"
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
                
                <Button variant="primary" onClick={handleShow}>
                    View Stats
                </Button>

                <Modal show={show} onHide={handleClose} centered size="xl">
                    <Modal.Header closeButton>
                        <Modal.Title>Stats</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Stats/>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>
        );
    }

    render() {
        return (<this.gearGrid state={this.state}/>);
    }
}
    
export default Gear;
