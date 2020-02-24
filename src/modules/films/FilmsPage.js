import React, { useEffect, useState } from 'react';
import Grid from '../../components/Grid';
import Film from './components/Film';
// import filmsData from './data/films';

function FilmsPage() {
  const [filmsData, setFilmsData] = useState(null);


  useEffect(() => {
    const fetchData = async () => {
      console.log('Fetching data');
      const response = await fetch("http://localhost:8183/films");
      console.log('Response ', response);
      const data = await response.json();
      console.log('data ', data);
      setFilmsData(data);
    }
    fetchData();
    // fetch("http://localhost:8183/films")
    //   .then(res => {
    //     console.log(res)
    //     return res.json();
    //   })
    //   .then(res => setFilmsData(res));
  }, []);

  if (filmsData == null) {
    return <div>Fetching Data from Server</div>
  }

  return (
    <Grid
      results={filmsData.results.map(film => (
        <Film film={film} />
      ))}
    />
  )
}

export default FilmsPage;