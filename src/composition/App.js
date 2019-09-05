import React from 'react';
import ParticipantList from './ParticipantList';
import Stage from './stage';
import Chat from './Chat';

function App(props) {
  //Add event handlers to the buttons and a toggle; hide one display when the other is clicked
  return (
    <React.Fragment>
      <div className='participant-and-chat'>
        <div className='button-div'>
          <button>Chat</button>
          <button>Participants</button>
        </div>
        <ul>
          <Chat participants={props.participants} chatEvents={props.chatEvents} />
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
