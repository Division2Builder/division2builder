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
                        armor={this.props.mask}
                        updateArmor={this.props.updateArmor}
                    />
                    <ArmorCard
                        context="backpack"
                        armor={this.props.backpack}
                        updateArmor={this.props.updateArmor}
                    />
                    <ArmorCard
                        context="vest"
                        armor={this.props.vest}
                        updateArmor={this.props.updateArmor}
                    />
                    <ArmorCard
                        context="glove"
                        armor={this.props.glove} 
                        updateArmor={this.props.updateArmor}
                    />
                    <ArmorCard
                        context="holster"
                        armor={this.props.holster}
                        updateArmor={this.props.updateArmor}
                    />
                    <ArmorCard
                        context="kneepads"
                        armor={this.props.kneepads}
                        updateArmor={this.props.updateArmor}
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
