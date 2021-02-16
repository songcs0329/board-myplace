import { faClipboard } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { WriteStyles, WriteWrap } from './WriteStyles';

const Presenter = () => {
  return (
    <WriteStyles>
      <WriteWrap>
        <FontAwesomeIcon icon={faClipboard} size="3x"/>
        <div>
          WritePresenter
        </div>
      </WriteWrap>
    </WriteStyles>
  );
};

export default Presenter;