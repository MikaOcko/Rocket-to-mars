// React importation
import React from 'react';

// Style importation
import './style/App.css';

// Component importation
import Timer from './components/Timer';

function App() {
  return (
    <>
      <div className="logo">
        <img src={process.env.PUBLIC_URL + "/assets/image/rocket.png"} alt="icône d'une fusée blanche et rouge en train de décoller" />
      </div>

      <div className="speech">
        <div className="speech__paragraph">
          <h1>Get your seat to Mars</h1>
          <p>
            Earth is doomed, but don't worry ! The last rocket is leaving for Mars soon, so hurry up and book your flight !
          </p>
        </div>

        <div className="speech__image">
          <img src={process.env.PUBLIC_URL + "/assets/image/astronaut_rocket.jpg"} alt="image d'un astronaute assis sur une fusée" />
        </div>
      </div>

      <div className="timers">
        <Timer />
      </div>
    </>
  );
}

export default App;
