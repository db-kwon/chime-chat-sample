import React, { ReactNode } from 'react';
import { ThemeProvider } from './ThemeProvider';
import { ChatConfig } from '../types';
import { GlobalStyles } from 'amazon-chime-sdk-component-library-react';

interface RootProps {
  config: ChatConfig;
  children: ReactNode;
  theme?: any;
}

export const Root: React.FC<RootProps> = ({ config, children, theme }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
};
