import { useState, useCallback } from 'react';
import { ChatMessage, ChatConfig } from '../types';
import { useChatConfig } from '../components/ChatProvider';

// ChatProvider 내부에서 사용할 때는 config를 자동으로 가져오고,
// 외부에서 사용할 때는 config를 직접 전달받을 수 있도록 오버로드
export function useChatSession(): {
  messages: ChatMessage[];
  isConnected: boolean;
  sendMessage: (content: string) => void;
  receiveMessage: (content: string) => void;
  connect: () => void;
  disconnect: () => void;
};

export function useChatSession(config: ChatConfig): {
  messages: ChatMessage[];
  isConnected: boolean;
  sendMessage: (content: string) => void;
  receiveMessage: (content: string) => void;
  connect: () => void;
  disconnect: () => void;
};

export function useChatSession(config?: ChatConfig) {
  // ChatProvider 내부에서 사용할 때는 useChatConfig를 사용
  let contextConfig: ChatConfig | undefined;
  try {
    contextConfig = useChatConfig();
  } catch {
    // ChatProvider 외부에서 사용되는 경우
    contextConfig = undefined;
  }
  const finalConfig = config || contextConfig;
  // config 사용 예제:
  if (finalConfig) {
    console.log('AWS 리전:', finalConfig.region);
    console.log('자격 증명:', finalConfig.credentials);
    if (finalConfig.meetingId) {
      console.log('미팅 ID:', finalConfig.meetingId);
    }
    if (finalConfig.attendeeId) {
      console.log('참석자 ID:', finalConfig.attendeeId);
    }
  }
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isConnected, setIsConnected] = useState(false);

  const sendMessage = useCallback((content: string) => {
    const newMessage: ChatMessage = {
      id: Date.now().toString(),
      content,
      createdTimestamp: new Date().toISOString(),
      redacted: false,
      senderName: '나',
      senderId: 'user',
    };

    setMessages(prev => [...prev, newMessage]);

    // TODO: 실제 Chime SDK를 사용한 메시지 전송 로직 구현
    console.log('메시지 전송:', content);

    // 데모용 자동 응답 (실제 구현에서는 Chime SDK에서 받아옴)
    setTimeout(() => {
      receiveMessage(`"${content}"에 대한 응답입니다.`);
    }, 1000);
  }, []);

  const receiveMessage = useCallback((content: string) => {
    const newMessage: ChatMessage = {
      id: Date.now().toString() + '_received',
      content,
      createdTimestamp: new Date().toISOString(),
      redacted: false,
      senderName: '상대방',
      senderId: 'assistant',
    };

    setMessages(prev => [...prev, newMessage]);
    console.log('메시지 수신:', content);
  }, []);

  const connect = useCallback(() => {
    setIsConnected(true);
    console.log('채팅 세션 연결됨');
  }, []);

  const disconnect = useCallback(() => {
    setIsConnected(false);
    console.log('채팅 세션 연결 해제됨');
  }, []);

  return {
    messages,
    isConnected,
    sendMessage,
    receiveMessage,
    connect,
    disconnect,
  };
}
