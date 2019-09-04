import React from 'react';
import ParticipantList from './ParticipantList';
import Stage from './stage';
import Chat from './Chat';

function App(props) {
  return (
    <React.Fragment>
      <div>
        <ParticipantList participants={props.participants} />
        <Chat participants={props.participants} chatEvents={props.chatEvents} />
      </div>
      <div className='stage-container'>
        <Stage participants={props.participants} />
      </div>
    </React.Fragment>
  );
}

export default App;
