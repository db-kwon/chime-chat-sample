import React from 'react';

interface ChatToggleButtonProps {
  isConnected: boolean;
  onClick: () => void;
}

export const ChatToggleButton: React.FC<ChatToggleButtonProps> = ({
  isConnected,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className="chat-toggle-button"
      style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        width: '60px',
        height: '60px',
        borderRadius: '50%',
        border: 'none',
        backgroundColor: isConnected ? '#007bff' : '#ccc',
        color: 'white',
        cursor: 'pointer',
        fontSize: '24px',
        boxShadow: '0 2px 10px rgba(0,0,0,0.2)',
      }}
    >
      💬
    </button>
  );
};
