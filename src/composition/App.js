import React from 'react';
import ParticipantList from './ParticipantList';
import Stage from './stage';
import Chat from './Chat';

function App(props) {

  return (
    <React.Fragment>
      <div className='participant-and-chat'>
        <div className='button-div'>
          <button className="chatButton">Chat</button>
          <button className="participantsButton">Participants</button>
        </div>
        <ul className='ul--style--general chat-container'>
          <Chat participants={props.participants} chatEvents={props.chatEvents} />
        </ul>
        <ul className='ul--style--general participant-container'>
          <ParticipantList participants={props.participants} />
        </ul>
      </div>
      <div className='stage-container'>
        <Stage participants={props.participants} />
      </div>
    </React.Fragment>
  );
}

export default App;
