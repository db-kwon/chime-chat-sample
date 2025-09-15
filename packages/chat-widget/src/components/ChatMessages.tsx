import React from 'react';
import {
  ChatBubbleContainer,
  ChatBubble,
  InfiniteList,
} from 'amazon-chime-sdk-component-library-react';
import { Message } from '../types';
import styled from 'styled-components';

interface ChatMessagesProps {
  messages: Message[];
}

export const ChatMessages: React.FC<ChatMessagesProps> = ({ messages }) => {
  // 메시지들을 날짜별로 그룹화하는 함수
  const groupMessagesByDate = (messages: Message[]) => {
    const grouped: { [date: string]: Message[] } = {};

    messages.forEach(message => {
      const messageDate = new Date(message.createdTimestamp);
      const dateKey = messageDate.toLocaleDateString('ko-KR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      });

      if (!grouped[dateKey]) {
        grouped[dateKey] = [];
      }
      grouped[dateKey].push(message);
    });

    return grouped;
  };

  // 날짜별로 그룹화된 메시지들
  const groupedMessages = groupMessagesByDate(messages);
  const dateKeys = Object.keys(groupedMessages).sort((a, b) => {
    return new Date(a).getTime() - new Date(b).getTime();
  });

  // 모든 메시지와 날짜 구분선을 포함한 아이템들 생성
  const renderItems = () => {
    const items: React.ReactNode[] = [];

    dateKeys.forEach(dateKey => {
      // 날짜 구분선 추가
      items.push(
        <DateSeparator key={`date-${dateKey}`}>
          <span>{dateKey}</span>
        </DateSeparator>
      );

      // 해당 날짜의 메시지들 추가
      groupedMessages[dateKey].forEach(message => {
        items.push(
          <StyledChatBubbleContainer
            key={message.id}
            $isUser={message.senderId === 'user'}
          >
            <StyledChatBubble
              variant={message.senderId === 'user' ? 'outgoing' : 'incoming'}
              senderName={message.senderName}
              timestamp={new Date(message.createdTimestamp).toLocaleTimeString(
                'ko-KR',
                {
                  hour: '2-digit',
                  minute: '2-digit',
                  hour12: true,
                }
              )}
              $isUser={message.senderId === 'user'}
            >
              {message.content}
            </StyledChatBubble>
          </StyledChatBubbleContainer>
        );
      });
    });

    return items;
  };

  return (
    <div
      style={{
        overflowY: 'auto',
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
          items={renderItems()}
        />
      )}
    </div>
  );
};

const StyledChatBubbleContainer = styled(ChatBubbleContainer)<{
  $isUser: boolean;
}>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0;
  align-items: ${props => (props.$isUser ? 'flex-end' : 'flex-start')};
  align-self: ${props => (props.$isUser ? 'flex-end' : 'flex-start')};
`;

const StyledChatBubble = styled(ChatBubble)<{ $isUser: boolean }>`
  margin: 1rem;
  min-width: 150px;
  background-color: ${props => (props.$isUser ? '#8841FA' : 'Grey/1000')};
  border-radius: ${props =>
    props.$isUser ? '12px 0 12px 12px' : '0 12px 12px 12px'};
`;

const DateSeparator = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1rem 0;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    height: 1px;
    background-color: #e0e0e0;
    z-index: 1;
  }

  &::after {
    content: '';
    background-color: white;
    padding: 0 1rem;
    color: #666;
    font-size: 0.875rem;
    font-weight: 500;
    z-index: 2;
    position: relative;
  }

  span {
    padding: 0 1rem;
    color: #666;
    font-size: 0.875rem;
    font-weight: 500;
    z-index: 2;
    position: relative;
  }
`;
