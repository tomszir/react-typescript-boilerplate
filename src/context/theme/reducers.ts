import { Theme } from '../../types';
import { ThemeAction, ThemeActionType } from './actions';

export const themeReducer = (state: Theme, action: ThemeAction) => {
  switch (action.type) {
    case ThemeActionType.SET_THEME:
      return action.payload.theme;
    case ThemeActionType.RESET_THEME:
      return Theme.LIGHT;
    default:
      return state;
  }
};
