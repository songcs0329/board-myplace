import { kakaoMapScript } from 'Apis/kakao';
import React, { useEffect } from 'react';
import Presenter from './Presenter';

export const Container = () => {
  useEffect(() => {
    const map = kakaoMapScript(37.506502, 127.053617)
  }, [])

  return (
    <Presenter />
  );
};