import React, { useState } from 'react';
import { useChatSession } from '../hooks/useChatSession';
import { ChatProvider } from './ChatProvider';
import { ChatToggleButton } from './ChatToggleButton';
import { ChatPanel } from './ChatPanel';
import { ChatConfig } from '../types';

interface ChatWidgetProps {
  config: ChatConfig;
  className?: string;
}

const ChatWidgetContent: React.FC<{ className?: string }> = ({ className }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const { messages, isConnected, sendMessage, connect, disconnect } =
    useChatSession();

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim()) {
      sendMessage(inputValue);
      setInputValue('');
    }
  };

  const handleInputChange = (value: string) => {
    setInputValue(value);
  };

  const handleToggle = () => {
    if (!isConnected) {
      connect();
    }
    setIsOpen(!isOpen);
  };

  return (
    <div className={`chat-widget ${className || ''}`}>
      <ChatToggleButton isConnected={isConnected} onClick={handleToggle} />

      {isOpen && (
        <ChatPanel
          isConnected={isConnected}
          messages={messages}
          inputValue={inputValue}
          onInputChange={handleInputChange}
          onSubmit={handleSendMessage}
        />
      )}
    </div>
  );
};

export const ChatWidget: React.FC<ChatWidgetProps> = ({
  config,
  className,
}) => {
  return (
    <ChatProvider config={config}>
      <ChatWidgetContent className={className} />
    </ChatProvider>
  );
};
