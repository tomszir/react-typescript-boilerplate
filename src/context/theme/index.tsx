import React, { useReducer } from 'react';

import { Theme } from '../../types';
import { ThemeAction } from './actions';
import { themeReducer } from './reducers';

export type ThemeState = {
  theme: Theme;
};

const initialState: ThemeState = {
  theme: Theme.LIGHT,
};

const mainReducer = ({ theme }: ThemeState, action: ThemeAction) => ({
  theme: themeReducer(theme, action),
});

const ThemeContext = React.createContext<{
  state: Partial<ThemeState>;
  dispatch: React.Dispatch<ThemeAction>;
}>({
  state: initialState,
  dispatch: () => null,
});

export const ThemeProvider: React.FunctionComponent = ({ children }) => {
  const [state, dispatch] = useReducer(mainReducer, initialState);

  return (
    <ThemeContext.Provider value={{ state, dispatch }}>{children}</ThemeContext.Provider>
  );
};

export default ThemeContext;
