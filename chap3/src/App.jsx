import './App.css';
import React from 'react';
import { useState } from 'react';
import Title from './components/Title';
import Modal from './components/Modal';

function App() {
  const [showModal, setShowModal] = useState(true);
  const [showEvents, setShowEvents] = useState(true);
  const [events, setEvents] = useState([
    {title: "mario's birthday bash", id: 1},
    {title: "bowser's live stream", id: 2},
    {title: "race on moo moo farm", id: 3}
  ]);

  const handleClose = () => {
    setShowModal(false);
  }

  const handleClick = (id) => {
    setEvents((prevEvents) => {
      prevEvents.filter((event) => {
        return id !== event.id;
    })});
    console.log(id);
  }

  const subtitle = "All the latest events in Marioland"

  return (
    <div className="App">
      <Title title="Events in your area" subtitle={subtitle} />
      
      {showEvents && (
      <div>
        <button onClick={() => {setShowEvents(false)}}>Hide Events</button>
      </div>
      )}
      {!showEvents && (
      <div>
        <button onClick={() => {setShowEvents(true)}}>Show Events</button>
      </div>
      )}
      {showEvents && events.map((event, index) => (
        <React.Fragment key={event.id}>
          <h2>{index} - {event.title}</h2>
          <button onClick={() => {handleClick(event.id)}}>Delete Event</button>
        </React.Fragment>
      ))}

      {showModal && (
        <Modal handleClose={handleClose}>
          <h2>10% Off coupon code!</h2>
          <p>Use the code BOLO10 at the checkout.</p>
        </Modal>
      )}
    </div>
  );
}

export default App;
