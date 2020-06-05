import React from 'react';

import { MenuItems } from './styled';
import MenuItem from './MenuItem';

import { useScrollMenu } from '../../hooks';

const Menu = ({ menuItems }) => {
  const { activeItem } = useScrollMenu(menuItems);

  return (
    <MenuItems>
      {menuItems.map(({ id, title }) => (
        <MenuItem key={id} targetId={id} title={title} active={id === activeItem} />
      ))}
    </MenuItems>
  );
};

export default Menu;
