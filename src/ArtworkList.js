import React from 'react';
import { Card } from 'semantic-ui-react';
import Artwork from './Artwork'

function ArtworkList({ artworks }) {
  return (
      <Card.Group itemsPerRow={3}>
        {artworks.map(a => <Artwork title={a.title} imgUrl={a.imgUrl}/>)}
      </Card.Group>
  );
}

export default ArtworkList;