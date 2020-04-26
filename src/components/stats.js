import React from 'react';
import {Container, Col, Row, Modal, Button} from 'react-bootstrap';
import './stats.scss'
import statSections from './shared/statData'
import Vest from '../icons/gear_types/vest.png'
import Breakdown from './breakdown';
import StatSection from './statSection';

class Stats extends React.Component {
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
                                    <a href="#weaponTalents"><img className="sectionIcon" src={Vest} alt="Weapon Talents"/></a>
                                    <a href="#weaponStats"><img className="sectionIcon" src={Vest} alt="Weapon Stats"/></a>
                                    <a href="#offense"><img className="sectionIcon" src={Vest} alt="Offense"/></a>
                                    <a href="#gearTalents"><img className="sectionIcon" src={Vest} alt="Gear Talents"/></a>
                                    <a href="#gearBrands"><img className="sectionIcon" src={Vest} alt="Gear Brands/Sets"/></a>
                                    <a href="#defense"><img className="sectionIcon" src={Vest} alt="Defense"/></a>
                                    <a href="#ss1"><img className="sectionIcon" src={Vest} alt="Skill Slot 1"/></a>
                                    <a href="#ss2"><img className="sectionIcon" src={Vest} alt="Skill Slot 2"/></a>
                                </Col>
                                <Col className="grid statValuesGrid">
                                    {statSections.map((statSection, index) => (
                                        <div key={index}>
                                            <StatSection
                                                id={statSection.id} 
                                                name={statSection.name}
                                                stats={statSection.stats}
                                            />
                                        </div>
                                    ))}
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

export default Stats;
    