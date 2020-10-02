import React from 'react';
import ReactDOM from 'react-dom';

import { GlobalStyle } from './styles';

const App: React.FunctionComponent = () => {
  return <div></div>;
};

ReactDOM.render(
  <>
    <GlobalStyle />
    <App />
  </>,
  document.getElementById('root'),
);
