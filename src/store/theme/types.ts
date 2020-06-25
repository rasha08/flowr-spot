import { ReduxAction } from '../../shared/types/ReduxAction';
import { ReduxReducer } from '../../shared/types/ReduxReducer';

export const SET_THEME_COLORS = 'SET_THEME_COLORS';

export type ThemeColorName =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'danger'
  | 'textSecondary'
  | 'textPrimary'
  | 'disabled'
  | 'backgroundPrimary'
  | 'backgroundSecondary';
export type ThemeColors = {
  [key in ThemeColorName]: string;
};
export type ThemeFontFamily = {
  primary: string;
  secondary: string;
};
export type ThemeFontSize = {
  base: string;
  extraSmall: string;
  small: string;
  normal: string;
  large: string;
  extraLarge: string;
};
export type ThemeFonts = {
  family: ThemeFontFamily;
  size: ThemeFontSize;
};

export type ThemeBreakPoints = {
  desktop: string;
  tablet: string;
  mobile: string;
};

export type AppTheme = {
  colors: ThemeColors;
  fonts: ThemeFonts;
  breakpoints: ThemeBreakPoints;
};

export type SetThemeColorsAction = ReduxAction<typeof SET_THEME_COLORS, ThemeColors>;
export type ThemeReducer = ReduxReducer<AppTheme, SetThemeColorsAction>;
