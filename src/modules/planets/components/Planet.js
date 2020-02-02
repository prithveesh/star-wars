import React from 'react';
import Card from '../../../components/Card';

function Planet(props) {
  const { planet = {} } = props;
  const title = planet.name;
  const headline = planet.terrain.substr(0, 150);
  const content = `Population: ${planet.population}, Gravity: ${planet.gravity}, Climate ${planet.climate} `;
  return (
    <Card avatar="PT" title={title} headline={headline} content={content} />
  )
}

export default Planet;