import React, { useState } from 'react';
import getJoke from '../api/data/jokeData';

function Initialize() {
  // setBtnText sets the value of btnText
  // default state
  const [btnText, setBtnText] = useState('GET A JOKE');

  // setJoke sets the value of joke
  // default state
  const [joke, setJoke] = useState({});

  const setButton = (text) => {
    setBtnText(text);
  };

  const getAJoke = () => {
    getJoke().then((obj) => {
      setJoke({
        setup: obj.setup,
        punchline: obj.delivery,
      });

      setButton('GET PUNCHLINE');
    });
  };

  return (
    <div className="App">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Joke Generator</h5>
          <p className="card-text">{joke.setup}</p>
          <p className="card-text">
            {btnText !== 'GET PUNCHLINE' ? joke.punchline : ''}
          </p>
          {btnText === 'GET A JOKE' || btnText === 'GET A NEW JOKE' ? (
            <button
              onClick={getAJoke}
              className="btn btn-success"
              type="button"
            >
              {btnText}
            </button>
          ) : (
            <button
              onClick={() => setButton('GET A NEW JOKE')}
              className="btn btn-success"
              type="button"
            >
              {btnText}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Initialize;
