import React, { useState } from 'react';
import { Menu } from 'semantic-ui-react';

function MenuBar(){
  let [ activeItem, setActiveItem ] = useState('features')
  
  const handleItemClick = (e, { name }) => setActiveItem(name)

    return(
      <Menu stackable>
        <Menu.Item
          name='features'
          active={activeItem === 'features'}
          onClick={handleItemClick}
        >
          Features
        </Menu.Item>

        <Menu.Item
          name='testimonials'
          active={activeItem === 'testimonials'}
          onClick={handleItemClick}
        >
          Testimonials
        </Menu.Item>

        <Menu.Item
          name='sign-in'
          active={activeItem === 'sign-in'}
          onClick={handleItemClick}
        >
          Sign-in
        </Menu.Item>
      </Menu>
    )
}

export default MenuBar;
