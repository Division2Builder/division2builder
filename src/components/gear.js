import React from 'react';
import {Modal, Button} from 'react-bootstrap';
import Selector, {WeaponCard} from './shared/card';
import './gear.scss'
import Stats from './stats.js'

class Gear extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            show: false
        }
    };
    
    handleClose = () => {this.setState({show:false})};
    handleShow = () => {this.setState({show:true})};

    render() {
        return (
            <>
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
                        weapon={this.props.primary}
                        context="primary"
                        updateWeapon={this.props.updateWeapon}
                    />
                    <WeaponCard
                        weapon={this.props.secondary}
                        context="secondary"
                        updateWeapon={this.props.updateWeapon}
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
                
                <Button variant="primary" onClick={this.handleShow}>
                    View Stats
                </Button>

                <Modal show={this.state.show} onHide={this.handleClose} centered size="xl">
                    <Modal.Header closeButton>
                        <Modal.Title>Stats</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Stats/>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleClose}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>
        );
    }
}
    
export default Gear;
