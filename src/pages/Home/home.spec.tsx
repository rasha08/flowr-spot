import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components';

import { store } from '../../store';
import { initialThemeState } from '../../store/theme/reducer';
import Home from './Home';

describe('Home Page Snapshot Test', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <ThemeProvider theme={initialThemeState}>
            <Home />
          </ThemeProvider>
        </Provider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
