import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading';
import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: '',
      showLoading: true,
    };
  }

  componentDidMount() {
    movieAPI.getMovies().then((respPromise) =>
      this.setState({
        movies: respPromise,
        showLoading: false,
      }),
    );
  }

  render() {
    const { movies, showLoading } = this.state;

    // Render Loading here if the request is still happening
    if (showLoading) return <Loading />;

    return (
      <div>
        <div className="movie-list">
          {movies.map((movie) => <MovieCard key={movie.title} movie={movie} />)}
        </div>
        <div className="center-align">
          <Link className="waves-effect waves-light btn" to="/movie-cards/new">ADICIONAR CARTÃO</Link>
        </div>
      </div>
    );
  }
}

export default MovieList;
