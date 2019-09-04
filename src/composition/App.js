import React from 'react';
import ParticipantList from './ParticipantList';

function App(props) {
  return (
    <React.Fragment>
      <div>
        <ParticipantList participants={props.participants} />
      </div>
{/*       
      <ChatLog participants={participants}/>
      <Stage participants={participants}/> */}
    </React.Fragment>
  );
}

export default App;
