import React, { ReactNode } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import {
  darkTheme,
  GlobalStyles,
} from 'amazon-chime-sdk-component-library-react';

interface ThemeProviderProps {
  children: ReactNode;
  theme?: any; // styled-components theme 타입
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({
  children,
  theme = darkTheme,
}) => {
  return (
    <StyledThemeProvider theme={theme}>
      <GlobalStyles />
      {children}
    </StyledThemeProvider>
  );
};
