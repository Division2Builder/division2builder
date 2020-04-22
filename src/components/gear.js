import React from 'react';
import {Modal, Button} from 'react-bootstrap';
import Selector, {WeaponCard, ArmorCard} from './shared/card';
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
                    <ArmorCard
                        context="mask"
                        armor={{
                            name: '',
                            brandSet: '',
                            armor: 0,
                            primaryAttribute: '',
                            secondaryAttributes: [''],
                            talent: null,
                            isNamed: false,
                            isExotic: false,
                            isGearSet: false
                        }}
                    />
                    <ArmorCard
                        context="backpack"
                        armor={{
                            name: 'Garibaldi Pack',
                            brandSet: 'yaahl',
                            armor: 130844,
                            primaryAttribute: 'red',
                            secondaryAttributes: ['red', 'red'],
                            talent: null,
                            isNamed: false,
                            isExotic: false,
                            isGearSet: false
                        }}
                    />
                    <ArmorCard
                        context="vest"
                        armor={{
                            name: '',
                            brandSet: '',
                            armor: 0,
                            primaryAttribute: '',
                            secondaryAttributes: [''],
                            talent: null,
                            isNamed: false,
                            isExotic: false,
                            isGearSet: false
                        }}
                    />
                    <ArmorCard
                        context="glove"
                        armor={{
                            name: '',
                            brandSet: '',
                            armor: 0,
                            primaryAttribute: '',
                            secondaryAttributes: [''],
                            talent: null,
                            isNamed: false,
                            isExotic: false,
                            isGearSet: false
                        }} 
                    />
                    <ArmorCard
                        context="holster"
                        armor={{
                            name: '',
                            brandSet: '',
                            armor: 0,
                            primaryAttribute: '',
                            secondaryAttributes: [''],
                            talent: null,
                            isNamed: false,
                            isExotic: false,
                            isGearSet: false
                        }}
                    />
                    <ArmorCard
                        context="kneepads"
                        armor={{
                            name: '',
                            brandSet: '',
                            armor: 0,
                            primaryAttribute: '',
                            secondaryAttributes: [''],
                            talent: null,
                            isNamed: false,
                            isExotic: false,
                            isGearSet: false
                        }}
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
