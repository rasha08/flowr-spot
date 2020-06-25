import React, { Suspense, useEffect } from 'react';
import { Router, View } from 'react-navi';
import { useDispatch, useSelector } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import Header from './components/Header/Header';
import Spinner from './components/Spinner/Spinner';
import Modal from './features/Modal/Modal';
import { routes } from './routes';
import { StoreState } from './store';
import { getFlowersAction } from './store/flowers/actions';
import { getUserDataAction } from './store/users/actions';
import { GlobalStyle } from './styled';

function App() {
  const dispatch = useDispatch();
  const { theme, user }: StoreState = useSelector<StoreState, StoreState>(s => s);

  useEffect(() => {
    dispatch(getFlowersAction());
  }, [dispatch]);

  useEffect(() => {
    if (user.authenticated && !user.data.first_name) {
      dispatch(getUserDataAction());
    }
  }, [dispatch, user.authenticated, user.data.first_name]);

  return (
    <ThemeProvider theme={theme}>
      <Router routes={routes}>
        <GlobalStyle />
        <Header />
        <Suspense fallback={<Spinner />}>
          <View />
        </Suspense>
        <Modal />
      </Router>
    </ThemeProvider>
  );
}

export default App;
