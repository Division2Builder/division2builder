import React from 'react';
import {Container, Col, Row} from 'react-bootstrap';
import './stats.scss'
import Vest from '../icons/gear_types/vest.png'
import Breakdown from './breakdown';
import StatSection from './statSection';

function Stats() {
    return (
        <Container>
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
                    <StatSection name="Weapon Talents" id="weaponTalents"/>
                    <StatSection name="Weapon Stats" id="weaponStats"/>
                    <StatSection name="Offense" id="offense"/>
                    <StatSection name="Gear Talents" id="gearTalents"/>
                    <StatSection name="Gear Brands" id="gearBrands"/>
                    <StatSection name="Defense" id="defense"/>
                    <StatSection name="Skill Slot 1" id="ss1"/>
                    <StatSection name="Skill Slot 2" id="ss2"/>
                </Col>
                <Col className="grid statBreakdownGrid">
                    <Breakdown/>
                </Col>
            </Row>
        </Container>
    );
}
    
export default Stats;
    