import { lightThemeColors, themeBreakPoints, themeFonts } from './consts';
import { AppTheme, SET_THEME_COLORS, ThemeReducer } from './types';

export const initialThemeState: AppTheme = {
  colors: lightThemeColors,
  fonts: themeFonts,
  breakpoints: themeBreakPoints,
};

export const themeReducer: ThemeReducer = (state = initialThemeState, action) => {
  switch (action.type) {
    case SET_THEME_COLORS:
      return {
        ...state,
        colors: action.payload,
      };
    default:
      return state;
  }
};
