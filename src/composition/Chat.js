import React from 'react';

export default function Chat (props) {
  //map the chat events 
  const chatEventsWithParticipants = props.chatEvents.map(chatEvent => {
    const participantInfo = props.participants.find(participant => participant.id === chatEvent.participantId);
    return {
      ...participantInfo,
      ...chatEvent
    }
  });
  console.log(chatEventsWithParticipants);

  const htmlChatEvents = chatEventsWithParticipants.map(chatEvent => {

    //if someone makes a comment
    if (chatEvent.type === 'message') {
      // (also needs the avatar, and date)
      return (
        <li>
          <img src={chatEvent.avatar} alt="{chatEventsWithParticipants.name}'s avatar" />
          <h2>{chatEvent.name}</h2>
          <p className="timestamp">{new Date(chatEvent.timestamp).toDateString}</p>
          <p className="message">{chatEvent.message}</p>
        </li>
      );
    }

    //if someone joins/leaves the stage
    if (chatEvent.type === 'join')  {
      //change their insession status! 
      props.participants.find(participant => {
        if (participant.id === chatEvent.id) {
          participant.inSession = true;
        }
      });
      return <li className="not-message"><span className="bold">{chatEvent.name}</span> joined</li>;
    }

    if (chatEvent.type === 'leave') {
      //change their insession status! 
      props.participants.find(participant => {
        if (participant.id === chatEvent.id) {
          participant.inSession = true;
        }
      });
      return <li className="not-message"><span className="bold">{chatEvent.name}</span> left</li>;
    }

    if (chatEvent.type === 'join-stage')  {
      //change their stage status! 
      props.participants.find(participant => {
        if (participant.id === chatEvent.id) {
          participant.onStage = true;
        }
      });
      return <li className="not-message"><span className="bold">{chatEvent.name}</span> joined the stage</li>;
    }

    if (chatEvent.type === 'leave-stage') {
      //change their stage status! 
      props.participants.find(participant => {
        if (participant.id === chatEvent.id) {
          participant.onStage = false;
        }
      });
      return <li className="not-message"><span className="bold">{chatEvent.name}</span> left the stage</li>;
    }

    //if someone gives a thumbs up/down/raises hand/claps
    if (chatEvent.type === 'thumbs-up') {
      return <li className="not-message"><span className="bold">{chatEvent.name}</span> gave a thumbs up 👍</li>;
    }

    if (chatEvent.type === 'thumbs-down') {
      return <li className="not-message"><span className="bold">{chatEvent.name}</span> gave a thumbs down 👎</li>;
    }

    if (chatEvent.type === 'raise-hand') {
      return <li className="not-message"><span className="bold">{chatEvent.name}</span> raised their hand ✋</li>;
    }

    if (chatEvent.type === 'clap') {
      return <li className="not-message"><span className="bold">{chatEvent.name}</span> clapped 👏</li>;
    }

  });
  return htmlChatEvents;
}