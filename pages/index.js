import { useState } from 'react';
import getJoke from '../api/jokeData';

function Home() {
  const [btnTxt, setBtnTxt] = useState('Get Joke');
  const [joke, setJoke] = useState(0);

  const jokeGetter = () => {
    if (btnTxt === 'Get Joke') {
      getJoke().then((response) => setJoke(response));
      setBtnTxt('Get Punchline');
    } else if (btnTxt === 'Get Punchline') {
      setBtnTxt('Get Another Joke');
    } else if (btnTxt === 'Get Another Joke') {
      setJoke(0);
      getJoke().then((response) => setJoke(response));
      setBtnTxt('Get Punchline');
    }
  };

  return (
    <>
      <div
        className="text-center d-flex flex-column justify-content-center align-content-center"
        style={{
          height: '90vh',
          padding: '30px',
          maxWidth: '400px',
          margin: '0 auto',
        }}
      >
        <h2>{btnTxt === 'Get Punchline' ? joke.setup : joke.delivery}</h2>
        <button type="button" onClick={jokeGetter}>
          {btnTxt}
        </button>
      </div>
    </>
  );
}

export default Home;
