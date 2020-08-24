import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: '',
      showLoading: true,
    };
    this.delete = this.delete.bind(this);
  }

  componentDidMount() {
    const { match } = this.props;

    movieAPI.getMovie(match.params.id).then((respPromise) =>
      this.setState({
        movie: respPromise,
        showLoading: false,
      }),
    );
  }

  delete() {
    const { movie } = this.state;

    movieAPI.deleteMovie(movie.id);
  }

  render() {
    // Change the condition to check the state
    const { showLoading, movie } = this.state;

    if (showLoading) return <Loading />;

    const { title, storyline, imagePath, genre, rating, subtitle, id } = movie;

    return (
      <div className="row">
        <div className="col s12 m7">
          <div className="card">
            <div className="card-image">
              <img alt="Movie Cover" src={`../movie-cards/${imagePath}`} />
              <span className="card-title">{title}</span>
            </div>
            <div className="card-content">
              <p>{`Subtitle: ${subtitle}`}</p>
              <p>{`Storyline: ${storyline}`}</p>
              <p>{`Genre: ${genre}`}</p>
              <p>{`Rating: ${rating}`}</p>
            </div>
            <div className="card-action">
              <Link to={`/movie-cards/${id}/edit`}>EDITAR</Link>
              <Link to="/" onClick={this.delete}>APAGAR</Link>
              <Link to="/">VOLTAR</Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};

export default MovieDetails;
