import { mount, route } from 'navi';
import React from 'react';

import Flowers from './Flowers';

export default mount({
  '/': route(async () => {
    return {
      view: <Flowers />,
    };
  }),
});
