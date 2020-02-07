import React from 'react';
import Grid from '../../components/Grid';
import Film from './components/Film';
import filmsData from './data/films';

function FilmsPage() {
  return (
    <Grid
      card={<Film film={filmsData.results[0]} />}
    />
  )
}

export default FilmsPage;