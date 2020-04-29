import React from 'react';
import {Container, Col, Row, Modal, Button} from 'react-bootstrap';
import './stats.scss'
import Mask from '../icons/gear_types/mask.png';
import Backpack from '../icons/gear_types/backpack.png';
import Vest from '../icons/gear_types/vest.png';
import Glove from '../icons/gear_types/gloves.png';
import Holster from '../icons/gear_types/holster.png';
import Kneepads from '../icons/gear_types/kneepads.png';
import Assault from '../icons/weapons/AssaultRifle.png';
import GearStats from './gearStats';
import Breakdown from './breakdown';

class TempStats extends React.Component {
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
            <Container>
                <Button variant="primary" onClick={this.handleShow}>
                        View Stats
                    </Button>

                    <Modal show={this.state.show} onHide={this.handleClose} centered size="xl">
                        <Modal.Header closeButton>
                            <Modal.Title>Stats</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Row>
                                <Col xs={1} className="grid sectionSelectionGrid">
                                    <a href="#primary"><img className="sectionIcon" src={Assault} alt="Primary"/></a>
                                    <a href="#secondary"><img className="sectionIcon" src={Assault} alt="Secondary"/></a>
                                    <a href="#mask"><img className="sectionIcon" src={Mask} alt="Mask"/></a>
                                    <a href="#backpack"><img className="sectionIcon" src={Backpack} alt="Backpack"/></a>
                                    <a href="#vest"><img className="sectionIcon" src={Vest} alt="Vest"/></a>
                                    <a href="#glove"><img className="sectionIcon" src={Glove} alt="Glove"/></a>
                                    <a href="#holster"><img className="sectionIcon" src={Holster} alt="Holster"/></a>
                                    <a href="#kneepads"><img className="sectionIcon" src={Kneepads} alt="Kneepads"/></a>
                                </Col>
                                <Col className="grid statValuesGrid">
                                    <GearStats id = "primary" gearPiece = {this.props.selectedGear.primary}/>
                                    <GearStats id = "secondary" gearPiece = {this.props.selectedGear.secondary}/>
                                    <GearStats id = "mask" gearPiece = {this.props.selectedGear.mask}/>
                                    <GearStats id = "backpack" gearPiece = {this.props.selectedGear.backpack}/>
                                    <GearStats id = "vest" gearPiece = {this.props.selectedGear.vest}/>
                                    <GearStats id = "glove" gearPiece = {this.props.selectedGear.glove}/>
                                    <GearStats id = "holster" gearPiece = {this.props.selectedGear.holster}/>
                                    <GearStats id = "kneepads" gearPiece = {this.props.selectedGear.kneepads}/>
                                </Col>
                                <Col className="grid statBreakdownGrid">
                                    <Breakdown/>
                                </Col>
                            </Row>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={this.handleClose}>
                                Close
                            </Button>
                        </Modal.Footer>
                    </Modal>
            </Container>
        );
    } 
}

export default TempStats;
    