import React from 'react';
import { PageRoute } from '../../constants/types.constant';
import HomeView from './Home.view';

const HomeRoute: PageRoute = {
  path: '/',
  element: <HomeView />,
};

export default HomeRoute;
