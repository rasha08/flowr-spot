import { ThemeColorName } from '../../store/theme/types';

export type ButtonVariant = 'outline' | 'danger' | 'success' | 'default' | 'primary' | 'link';

export type ButtonProps = {
  variant: ButtonVariant;
  color?: keyof ThemeColorName;
  round?: boolean;
};
