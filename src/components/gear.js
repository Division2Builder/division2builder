import React from 'react';
import Selector, {WeaponCard, ArmorCard, SkillCard} from './shared/card';
import './gear.scss'

class Gear extends React.Component {
    constructor(props){
        super(props)
    };

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
                    <SkillCard
                        context="skill1"
                        name={this.props.skill1.name}
                        updateSkill={this.props.updateSkill}
                        baseStats={this.props.skill1.baseStats}
                    />
                    <SkillCard
                        context="skill2"
                        name={this.props.skill2.name}
                        updateSkill={this.props.updateSkill}
                        baseStats={this.props.skill2.baseStats}
                    />
                </div>
            </>
        );
    }
}
    
export default Gear;
