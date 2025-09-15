import React from 'react';

interface ChatHeaderProps {
  isConnected: boolean;
}

export const ChatHeader: React.FC<ChatHeaderProps> = ({ isConnected }) => {
  return (
    <div
      className="chat-header"
      style={{
        padding: '15px',
        borderBottom: '1px solid #eee',
        backgroundColor: '#f8f9fa',
        borderRadius: '8px 8px 0 0',
      }}
    >
      <h3 style={{ margin: 0, fontSize: '16px' }}>Chime Chat</h3>
      <div style={{ fontSize: '12px', color: '#666' }}>
        {isConnected ? '연결됨' : '연결 안됨'}
      </div>
    </div>
  );
};
