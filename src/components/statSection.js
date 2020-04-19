import React, {useState} from 'react';
import './statSection.scss'
import DetailedStat from './detailedStat';

function StatSection(props) {
    const [chosen, setChosen] = useState();

    return (
        <div id={props.id} className="statSection">
            <h6>{props.name}</h6>
            {props.stats.map((stat, index) => (
                <DetailedStat
                    key={index}
                    stat = {stat}
                    active={index === chosen}
                    onClick={() => setChosen(index)}
                />
            ))}
        </div>
    );
}

export default StatSection;
