import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import Cards from '../../components/Cards/Cards';
import { getFlowersAction } from '../../store/flowers/actions';
import { Content } from '../../styled';

const Flowers = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFlowersAction());
  }, [dispatch]);

  return (
    <Content>
      <Cards />
    </Content>
  );
};

export default Flowers;
