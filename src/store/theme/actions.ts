import { darkThemeColors, lightThemeColors } from './consts';
import { SET_THEME_COLORS, SetThemeColorsAction, ThemeColors } from './types';

const getThemeColorsAction: (colors: ThemeColors) => SetThemeColorsAction = colors => ({
  type: SET_THEME_COLORS,
  payload: colors,
});

export const setLightThemeColors = getThemeColorsAction(lightThemeColors);
export const setDarkThemeColors = getThemeColorsAction(darkThemeColors);
