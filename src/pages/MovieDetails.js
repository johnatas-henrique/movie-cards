import React, { Component } from 'react';

import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: '',
      showLoading: true,
    };
  }

  componentDidMount() {
    movieAPI.getMovie(movieId).then((respPromise) =>
      this.setState({
        movie: respPromise,
        showLoading: false,
      }),
    );
  }

  render() {
    // Change the condition to check the state
    if (this.state.showLoading) return <Loading />;

    const { title, storyline, imagePath, genre, rating, subtitle } = movie;

    return (
      <div className="row">
        <div className="col s12 m7">
          <div className="card">
            <div className="card-image">
              <img alt="Movie Cover" src={`../${imagePath}`} />
              <span className="card-title">{title}</span>
            </div>
            <div className="card-content">
              <p>{`Subtitle: ${subtitle}`}</p>
              <p>{`Storyline: ${storyline}`}</p>
              <p>{`Genre: ${genre}`}</p>
              <p>{`Rating: ${rating}`}</p>
            </div>
            <div className="card-action">
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MovieDetails;
