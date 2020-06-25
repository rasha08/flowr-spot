import { AppTheme } from '../store/theme/types';

export type Theme = AppTheme;

declare module 'styled-components/macro' {
  interface DefaultTheme extends Theme {}
}
