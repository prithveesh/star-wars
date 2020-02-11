import React from 'react';
import Grid from '../../components/Grid';
import Planet from './components/Planet';
import planetsData from './data/planets';

function PlanetsPage() {
  return (
    <Grid
      results={planetsData.results.map(card => <Planet planet={card} />)}
    />
  )
}

export default PlanetsPage;