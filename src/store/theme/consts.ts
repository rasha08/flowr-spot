import { ThemeColors, ThemeFonts } from './types';

export const lightThemeColors: ThemeColors = {
  primary: '#EAA79E',
  secondary: '#949EA0',
  success: '#8ECDB0',
  danger: '#D9534E',
  textPrimary: '#FFFFFF',
  textSecondary: '#334144',
  backgroundPrimary: '#F2F2F2',
  disabled: '#F5F6F7',
  backgroundSecondary: '#FFFFFF',
};

export const darkThemeColors: ThemeColors = {
  primary: '#EAA79E',
  secondary: '#949EA0',
  success: '#8ECDB0',
  danger: '#D9534E',
  textPrimary: '#F5F6F7',
  textSecondary: '#334144',
  backgroundPrimary: '#000000',
  backgroundSecondary: '#1e1e1e',
  disabled: '#2d2d2d',
};

export const themeFonts: ThemeFonts = {
  family: {
    primary: 'Ubuntu',
    secondary: 'Montserrat',
  },
  size: {
    base: '16px',
    small: '0.95rem',
    extraSmall: '0.7rem',
    normal: '1rem',
    large: '1.2rem',
    extraLarge: '2rem',
  },
};

export const themeBreakPoints = {
  mobile: '520px',
  tablet: '770px',
  desktop: '1024px',
};
