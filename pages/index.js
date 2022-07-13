import { useState } from 'react';
import getJoke from '../api/jokeData';

function Home() {
  const [btnText, setBtnText] = useState('Get A Joke');
  const [jokeText, setJokeText] = useState({});

  const setButton = (str) => {
    setBtnText(str);
  };

  const jokeGetter = () => {
    getJoke().then((obj) => {
      setJokeText({
        setup: obj.setup,
        delivery: obj.delivery,
      });

      setButton('Get Punchline');
    });
  };

  return (
    <div>
      <>
        <h1>{jokeText.setup}</h1>
        <h2>{btnText === 'Get Punchline!' ? jokeText.delivery : ''}</h2>
        <div>
          {btnText === 'Get a Joke!' || btnText === 'Get Another Joke?' ? (
            <button type="button" onClick={jokeGetter}>
              {btnText}
            </button>
          ) : (
            <button type="button" onClick={() => setButton('Get Another Joke?')}>
              {btnText}
            </button>
          )}
        </div>
      </>
    </div>
  );
}

export default Home;
