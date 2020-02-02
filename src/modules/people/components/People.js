import React from 'react';
import Card from '../../../components/Card';

function People(props) {
  const { people = {} } = props;
  const title = people.name;
  const headline = `Height: ${people.height}, Weight: ${people.mass}`
  const content = `Birth Year: ${people.birth_year}, Eye Color: ${people.eye_color}, Hair Color: ${people.hair_color} `;
  return (
    <Card avatar="PP" title={title} headline={headline} content={content} />
  )
}

export default People;