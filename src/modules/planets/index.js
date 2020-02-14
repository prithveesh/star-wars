import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Grid from '../../components/Grid';
import Planet from './components/Planet';
// import planetsData from './data/planets';

function PlanetsPage() {
  const [planetsData, setPlanetsData] = useState({
    results: []
  });



  useEffect(() => {
    axios.get('http://localhost:8183/planets')
      .then(res => setPlanetsData(res.data))
      .catch(err => console.log(err));
  }, []);
  return (
    <Grid
      results={planetsData.results.map(card => <Planet planet={card} />)}
    />
  )
}

export default PlanetsPage;