import React from 'react';
import Grid from '../../components/Grid';
import Film from './components/Film';
import filmsData from './data/films';

function FilmsPage() {
  return (
    <Grid
      results={filmsData.results.map(film => (
        <Film film={film} />
      ))}
    />
  )
}

export default FilmsPage;