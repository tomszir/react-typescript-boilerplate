import React, { useContext } from 'react';
import ReactDOM from 'react-dom';

import { GlobalStyle } from './styles';
import { ThemeProvider } from './context/theme';

const App: React.FunctionComponent = () => {
  return (
    <div>
      <h1>Hello world!</h1>
    </div>
  );
};

ReactDOM.render(
  <>
    <GlobalStyle />
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </>,
  document.getElementById('root'),
);
