import React from 'react';
import { ChatHeader } from './ChatHeader';
import { ChatMessages } from './ChatMessages';
import { ChatInputForm } from './ChatInputForm';
import { Message } from '../types';
import { InfiniteList } from 'amazon-chime-sdk-component-library-react';
import styled from 'styled-components';

interface ChatPanelProps {
  isConnected: boolean;
  messages: Message[];
  inputValue: string;
  onInputChange: (value: string) => void;
  onSubmit: (e: React.FormEvent) => void;
}

export const ChatPanel: React.FC<ChatPanelProps> = ({
  isConnected,
  messages,
  inputValue,
  onInputChange,
  onSubmit,
}) => {
  return (
    <div
      className="chat-panel"
      style={{
        position: 'fixed',
        bottom: '90px',
        right: '20px',
        width: '350px',
        height: '700px',
        backgroundColor: 'white',
        border: '1px solid #ddd',
        borderRadius: '8px',
        boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <ChatHeader isConnected={isConnected} />

      <div
        style={{
          flex: 1,
          height: '70%',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <ChatMessages messages={messages} />
        <ChatInputForm
          inputValue={inputValue}
          onInputChange={onInputChange}
          onSubmit={onSubmit}
        />
      </div>
    </div>
  );
};
