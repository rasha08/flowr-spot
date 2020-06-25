import { ButtonVariant } from '../../components/Botton/types';
import { AppTheme } from '../../store/theme/types';

export const getColorByVariant = (variant: ButtonVariant, theme: AppTheme, isBackground: boolean): string => {
  switch (variant) {
    case 'danger':
      return isBackground ? theme.colors.danger : theme.colors.textPrimary;
    case 'link':
      return isBackground ? theme.colors.backgroundSecondary : theme.colors.primary;
    case 'outline':
      return isBackground ? theme.colors.backgroundSecondary : theme.colors.secondary;
    case 'primary':
      return isBackground ? theme.colors.primary : theme.colors.textPrimary;
    case 'success':
      return isBackground ? theme.colors.success : theme.colors.textPrimary;
    default:
      return isBackground ? theme.colors.backgroundSecondary : theme.colors.textPrimary;
  }
};
