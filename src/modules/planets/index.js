import React from 'react';
import Grid from '../../components/Grid';
import Planet from './components/Planet';
import planetsData from './data/planets';

function PlanetsPage() {
  return (
    <Grid
      card={<Planet planet={planetsData.results[0]} />}
    />
  )
}

export default PlanetsPage;