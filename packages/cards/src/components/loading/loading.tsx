import React from 'react';

import { LoadingStyle } from './loading.styles';

const Loading = () => {
  return (
    <LoadingStyle>
      <div className="lds-roller">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </LoadingStyle>
  );
};

export { Loading };
