import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { title, storyline, imagePath, id } = movie;
    console.log(movie);
    return (
      <div className="row">
        <div className="col s12 m7">
          <div className="card movie-card">
            <div className="card-image">
              <img alt="Movie Cover" className="movie-card-image" src={imagePath} />
              <span className="card-title">{title}</span>
            </div>
            <div className="card-content">
              <p>{storyline}</p>
            </div>
            <div className="card-action">
              <Link to={`/movies/${id}`}>VER DETALHES</Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.number,
    imagePath: PropTypes.string,
    bookmarked: PropTypes.bool,
    genre: PropTypes.string,
  }).isRequired,
};

export default MovieCard;
