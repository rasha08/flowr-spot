import { mount, route } from 'navi';
import React from 'react';

import Home from './Home';

export default mount({
  '/': route(async () => {
    return {
      view: <Home />,
    };
  }),
});
