import './App.css';
import { useState } from 'react';
import Title from './components/Title';
import Modal from './components/Modal';
import EventList from './components/EventList';

function App() {
  const [showModal, setShowModal] = useState(false);
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
      return prevEvents.filter((event) => {
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
      {showEvents && <EventList events={events} handleClick={handleClick} />}

      {showModal && (
        <Modal handleClose={handleClose}>
          <h2>10% Off coupon code!</h2>
          <p>Use the code BOLO10 at the checkout.</p>
        </Modal>
      )}
      {!showModal && (
        <div>
          <br />
          <button onClick={() => {setShowModal(true)}}>
            Show modal
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
