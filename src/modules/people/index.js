import React from 'react';
import Grid from '../../components/Grid';
import People from './components/People';
import peopleData from './data/people';

function PeoplePage() {
  return (
    <Grid
      card={<People people={peopleData.results[0]} />}
    />
  )
}

export default PeoplePage;