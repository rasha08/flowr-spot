import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import Banner from '../../components/Banner/Banner';
import Cards from '../../components/Cards/Cards';
import { getFlowersAction } from '../../store/flowers/actions';
import { Content } from '../../styled';

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFlowersAction());
  }, [dispatch]);

  return (
    <>
      <Banner />
      <Content>
        <Cards />
      </Content>
    </>
  );
};

export default Home;
