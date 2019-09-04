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
    //set names for the person that is changing the event
    // let name;
    // let avatarUrl;
    
    // props.participants.find(participant => {
    //   if (participant.id === chatEvent.id) {
    //     console.log(participant);
    //     name = participant.name;
    //     avatarUrl = participant.avatar;
    //   }
    // })

    //if someone makes a comment
    if (chatEvent.type === 'message') {
      // (also needs the avatar, and date)
      return (
        <div>
          <img src={chatEvent.avatar} alt="{chatEventsWithParticipants.name}'s avatar" />
          <h2>{chatEvent.name}</h2>
          <p className="timestamp">{new Date(chatEvent.timestamp).toDateString}</p>
          <p className="message">{chatEvent.message}</p>
        </div>
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
      return <p className="not-message"><span className="bold">{chatEvent.name}</span> joined</p>;
    }

    if (chatEvent.type === 'leave') {
      //change their insession status! 
      props.participants.find(participant => {
        if (participant.id === chatEvent.id) {
          participant.inSession = true;
        }
      });
      return <p className="not-message"><span className="bold">{chatEvent.name}</span> left</p>;
    }

    if (chatEvent.type === 'join-stage')  {
      //change their stage status! 
      props.participants.find(participant => {
        if (participant.id === chatEvent.id) {
          participant.onStage = true;
        }
      });
      return <p className="not-message"><span className="bold">{chatEvent.name}</span> joined the stage</p>;
    }

    if (chatEvent.type === 'leave-stage') {
      //change their stage status! 
      props.participants.find(participant => {
        if (participant.id === chatEvent.id) {
          participant.onStage = false;
        }
      });
      return <p className="not-message"><span className="bold">{chatEvent.name}</span> left the stage</p>;
    }

    //if someone gives a thumbs up/down/raises hand/claps
    if (chatEvent.type === 'thumbs-up') {
      return <p className="not-message"><span className="bold">{chatEvent.name}</span> gave a thumbs up 👍</p>;
    }

    if (chatEvent.type === 'thumbs-down') {
      return <p className="not-message"><span className="bold">{chatEvent.name}</span> gave a thumbs down 👎</p>;
    }

    if (chatEvent.type === 'raise-hand') {
      return <p className="not-message"><span className="bold">{chatEvent.name}</span> raised their hand ✋</p>;
    }

    if (chatEvent.type === 'clap') {
      return <p className="not-message"><span className="bold">{chatEvent.name}</span> clapped 👏</p>;
    }

  });
  return htmlChatEvents;
}