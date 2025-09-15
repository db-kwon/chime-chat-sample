import React, { createContext, useContext, ReactNode } from 'react';
import {
  GlobalStyles,
  lightTheme,
  MeetingProvider,
} from 'amazon-chime-sdk-component-library-react';
import { ChatConfig } from '../types';
import { ThemeProvider } from 'styled-components';

interface ChatContextType {
  config: ChatConfig;
}

const ChatContext = createContext<ChatContextType | undefined>(undefined);

interface ChatProviderProps {
  config: ChatConfig;
  children: ReactNode;
}

export const ChatProvider: React.FC<ChatProviderProps> = ({
  config,
  children,
}) => {
  return (
    <ChatContext.Provider value={{ config }}>
      <ThemeProvider theme={lightTheme}>
        <GlobalStyles />
        <MeetingProvider>{children}</MeetingProvider>
      </ThemeProvider>
    </ChatContext.Provider>
  );
};

export const useChatConfig = (): ChatConfig => {
  const context = useContext(ChatContext);
  if (!context) {
    throw new Error('useChatConfig must be used within a ChatProvider');
  }
  return context.config;
};
