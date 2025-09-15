import React from 'react';
import { Input as ChatInput } from './ui/Input';

interface ChatInputFormProps {
  inputValue: string;
  onInputChange: (value: string) => void;
  onSubmit: (e: React.FormEvent) => void;
}

export const ChatInputForm: React.FC<ChatInputFormProps> = ({
  inputValue,
  onInputChange,
  onSubmit,
}) => {
  return (
    <form
      onSubmit={onSubmit}
      style={{ display: 'flex', gap: '10px', marginTop: 'auto' }}
    >
      <ChatInput
        value={inputValue}
        onChange={onInputChange}
        placeholder="메시지를 입력하세요..."
      />
      <button
        type="submit"
        style={{
          padding: '8px 16px',
          backgroundColor: '#007bff',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
        }}
      >
        전송
      </button>
    </form>
  );
};
