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
      style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        display: 'flex',
        gap: '10px',
        padding: '16px',
        backgroundColor: 'white',
        borderTop: '1px solid #E5E5E5',
        zIndex: 1000,
      }}
    >
      <div style={{ display: 'flex', gap: '10px', width: '100%' }}>
        <ChatInput
          value={inputValue}
          onChange={onInputChange}
          placeholder="내용을 입력해 주세요"
          fullWidth
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
