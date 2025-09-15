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
    <form onSubmit={onSubmit}>
      <div style={{ display: 'flex', gap: '10px' }}>
        <ChatInput
          value={inputValue}
          onChange={onInputChange}
          placeholder="내용을 입력해 주세요"
        />
        <button
          type="submit"
          style={{
            borderRadius: '8px',
            border: '1px solid var(--Grey-300, #DADADF)',
            background: 'var(--Grey-200, #ECECEF)',
            display: 'flex',
            width: '80px',
            padding: '12px 16px',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '6px',
            color: 'var(--Grey-500, #A3A3AF)',
            fontSize: '16px',
          }}
        >
          전송
        </button>
      </div>
    </form>
  );
};
