import React from 'react';
import { useParams } from 'react-router-dom';
import Presenter from './Presenter';

const Container = () => {
  const params = useParams()
  console.log(params)
  return (
    <Presenter />
  );
};

export default Container