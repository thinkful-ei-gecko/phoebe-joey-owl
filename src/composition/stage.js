import React from 'react';

export default function Stage(props){
    
    const personStage =    props.participant.map(function (participant){
            if(participant.onStage){
                return(
                    <div>
                        <h2> {participant.name}</h2>
                        <img href={participant.avatar} alt='avatar'/>
                    </div>
                )
            }
})
return personStage;
}