import React, { FC } from 'react';
import { AppBar, Toolbar, useTheme } from '@mui/material';

import { authorizedNavigationList, unauthorizedNavigationList } from '@/components/navigation/configNavigation';
import NavigationItem from './NavigationItem';

import { INavigation, INavigationElement, IPlan } from './types';

const Navigation: FC<INavigation> = ({ plan = 'unauthorized', activeItem }) => {
  const theme = useTheme();

  const PLAN_VIEW: IPlan = {
    authorized: authorizedNavigationList,
    unauthorized: unauthorizedNavigationList
  }

  const planView = PLAN_VIEW[plan as keyof typeof PLAN_VIEW]

  return (
    <AppBar
      className='component-navigation'
      position="relative"
      sx={{
        width: 'fit-content',
        background: theme.palette.primary.light,
        boxShadow: 'none',
      }}
    >
      <Toolbar
        className='component-navigation-toolbar'
        disableGutters
        sx={{ display: 'flex', flexDirection: 'column', alignItems: 'start', gap: 3 }}
      >
        {planView.map((navItem: INavigationElement) => (
          <NavigationItem
            key={navItem.title}
            navItem={navItem}
            isActiveItem={activeItem === navItem.title}
          />
        ))}
      </Toolbar>
    </AppBar>
  );
};
export default Navigation;
