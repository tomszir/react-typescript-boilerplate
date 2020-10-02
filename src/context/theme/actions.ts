import { Theme } from '../../types';

export enum ThemeActionType {
  SET_THEME,
  RESET_THEME,
}

export type ThemeAction =
  | {
      type: ThemeActionType.SET_THEME;
      payload: {
        theme: Theme;
      };
    }
  | { type: ThemeActionType.RESET_THEME };

export const setTheme: (theme: Theme) => ThemeAction = theme => {
  return {
    type: ThemeActionType.SET_THEME,
    payload: {
      theme,
    },
  };
};

export const resetTheme: () => ThemeAction = () => {
  return { type: ThemeActionType.RESET_THEME };
};
