import React, { FC, PropsWithChildren } from 'react';
import { useColorScheme } from 'react-native';
import { FullTheme, ThemeProvider } from 'react-native-elements';

const APP_COLORS = {
  primaryText: 'black',
  white: 'white',
  black: 'black',
};

const APP_COLORS_DARK = {
  primaryText: 'white',
  white: '#212121',
  black: 'white',
};

export const getTheme = (isDark: boolean): Partial<FullTheme> => ({
  colors: isDark ? APP_COLORS_DARK : APP_COLORS,
  Text: {
    style: {
      color: isDark ? APP_COLORS_DARK.primaryText : APP_COLORS.primaryText,
    },
  },
});

type Props = PropsWithChildren<{}>;

const CustomThemeProvider: FC<Props> = ({ children }: Props) => {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider theme={getTheme(colorScheme === 'dark')}>
      {children}
    </ThemeProvider>
  );
};

export default CustomThemeProvider;
