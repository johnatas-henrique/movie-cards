import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { MovieDetails, NewMovie, EditMovie, MovieList, NotFound } from './pages/index';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/movie-cards/new" component={NewMovie} />
        <Route exact path="/movie-cards/:id" component={MovieDetails} />
        <Route path="/movie-cards/:id/edit" component={EditMovie} />
        <Route path="/movie-cards" component={MovieList} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
