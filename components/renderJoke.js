import React from 'react';
import PropTypes from 'prop-types';

export default function renderJoke({ jokeText, btnText }) {
  return (
    <>
      <p>{jokeText.setup}</p>
      <p>{btnText !== 'Get Punchline' ? jokeText.punchline : ''}</p>
    </>
  );
}

renderJoke.propTypes = {
  jokeText: PropTypes.shape({
    setup: PropTypes.string,
    punchline: PropTypes.string,
  }).isRequired,
  btnText: PropTypes.string.isRequired,
};
