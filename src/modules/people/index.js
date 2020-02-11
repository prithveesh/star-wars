import React from 'react';
import Grid from '../../components/Grid';
import People from './components/People';
import peopleData from './data/people';

function PeoplePage() {
  return (
    <Grid
      results={peopleData.results.map(card => <People people={card} />)}
    />
  )
}

export default PeoplePage;