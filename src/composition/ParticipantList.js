import React from 'react';

function ParticipantList (props) {
  function participantListStatus (participant) {
    if (!participant.inSession) {
      return (
        <p>left Session</p>
      );
    }
    if (participant.onStage) {
      return (
        <p>on stage</p>
      );
    }
    else {
      return (
        <p>in session</p>
      );
    }
  }
  
  const participantHtml = props.participants.map(participant => {
    return (
      <li>
        <img src={participant.avatar} alt="{participant.name}'s avatar" />
        <p><span className='bold'>{participant.name}</span></p>
        {participantListStatus(participant)}
      </li>
    )
  });
  
  return participantHtml;
}

export default ParticipantList;