import React from 'react';
import { Card, Segment, Image } from 'semantic-ui-react';


function Artwork({title, imgUrl, }) {
  return (
    <Segment.Group horizontal basic style={{maxWidth: "30%", margin: "2%"}}>
        <Segment basic>
            <Image 
                floated="left"
                src={imgUrl} 
                size="small" 
            />
        </Segment>
        <Segment basic>
            <p>{title}</p>
            <p>oil on canvas</p>
            <p>26” x 24”</p>
            <p>2019</p>
        </Segment>
    </Segment.Group>
  )
}

export default Artwork;