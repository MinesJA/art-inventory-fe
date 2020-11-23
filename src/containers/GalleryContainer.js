import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import { Segment, List } from 'semantic-ui-react';
import MenuBar from './MenuBar';
import { data } from './data';
import ArtworkList from './ArtworkList';
import ArtworkDetail from './ArtworkDetail';


function App() {
  let [ artworks, setArtworks ] = useState([]);

  const listItems = () => {
    return data.map(a => new Date(a.meta.dateCreated).getFullYear())
          .filter((x, i, a) => a.indexOf(x) === i)
          .map(year => 
            <List.Item>
              {year}
            </List.Item>          
          )
  }

  const artworks = () => {
    return data.map(a => a.meta);
  }
  

  return (
    <div className="App">
      <MenuBar />
      <Segment.Group horizontal>
        <Segment>
          <List>
            {listItems()}
          </List>
        </Segment>
        <Segment>
          <ArtworkList artworks={artworks()}/>
        </Segment>
      </Segment.Group>
      <Segment.Group horizontal>
        <Segment>
          <ArtworkDetail />
        </Segment>
      </Segment.Group>
    </div>
  );
}

export default App;
