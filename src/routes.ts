import { lazy, mount } from 'navi';

import { RoutePaths } from './shared/enums/RoutePaths';

export const routes = mount({
  [RoutePaths.Home]: lazy(() => import('./pages/Home')),
  [RoutePaths.Flowers]: lazy(() => import('./pages/Flowers')),
});
