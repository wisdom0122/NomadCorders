import React from 'react';
import PropTypes from 'prop-types';

const Movie = ({ id, title }) => {
    return <h3>{title}</h3>;
};

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    // year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    // summary: PropTypes.string.isRequired,
    // poster: PropTypes.string.isRequired,
};

export default Movie;
