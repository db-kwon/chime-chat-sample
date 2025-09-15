import React from 'react';
import {
  ChatBubbleContainer,
  ChatBubble,
  ChannelList,
  InfiniteList,
} from 'amazon-chime-sdk-component-library-react';
import { Message } from '../types';
import styled from 'styled-components';

interface ChatMessagesProps {
  messages: Message[];
}

export const ChatMessages: React.FC<ChatMessagesProps> = ({ messages }) => {
  return (
    <div
      style={{
        flex: 1,
        overflowY: 'auto',
        backgroundColor: 'red',
      }}
    >
      {messages.length === 0 ? (
        <div
          style={{
            textAlign: 'center',
            marginTop: '50px',
          }}
        >
          메시지를 입력해보세요
        </div>
      ) : (
        <InfiniteList
          onLoad={() => {}}
          isLoading={false}
          items={messages.map(message => (
            <StyledChatBubbleContainer
              key={message.id}
              timestamp={new Date(message.createdTimestamp).toLocaleString()}
            >
              <ChatBubble
                variant={message.senderId === 'user' ? 'outgoing' : 'incoming'}
                senderName={message.senderName}
                timestamp={new Date(message.createdTimestamp).toLocaleString()}
                showTail
                css="margin: 1rem;"
              >
                {message.content}
              </ChatBubble>
            </StyledChatBubbleContainer>
          ))}
        />
      )}
    </div>
  );
};

const StyledChatBubbleContainer = styled(ChatBubbleContainer)`
  color: '#666';
  background-color: 'red';
`;
