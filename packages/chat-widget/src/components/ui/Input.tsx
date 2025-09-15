/**
 * 재사용 가능한 입력 필드 컴포넌트
 * - AWS Chime 스타일
 * - 다양한 입력 타입 지원
 * - 독립적으로 사용 가능
 */

import React from 'react';
import styled from 'styled-components';

export interface InputProps {
  type?: 'text' | 'email' | 'password' | 'number' | 'tel' | 'url';
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  disabled?: boolean;
  error?: string;
  label?: string;
  fullWidth?: boolean;
  size?: 'small' | 'medium' | 'large';
  required?: boolean;
}

const InputContainer = styled.div<{ $fullWidth?: boolean }>`
  display: flex;
  flex-direction: column;
  ${props => props.$fullWidth && 'width: 100%;'}
`;

const Label = styled.label`
  font-size: 0.875rem;
  font-weight: 500;
  color: #323130;
  margin-bottom: 0.25rem;
`;

const StyledInput = styled.input<{ 
  $fullWidth?: boolean; 
  $size?: 'small' | 'medium' | 'large';
  $error?: string;
}>`
  border: 1px solid #d2d0ce;
  border-radius: 0.25rem;
  background-color: white;
  color: #323130;
  transition: all 0.2s ease-in-out;
  
  ${props => props.$fullWidth && 'width: 100%;'}
  
  /* Size variants */
  ${props => {
    switch (props.$size) {
      case 'small':
        return `
          padding: 0.5rem 0.75rem;
          font-size: 0.875rem;
          line-height: 1.25rem;
        `;
      case 'large':
        return `
          padding: 0.75rem 1rem;
          font-size: 1.125rem;
          line-height: 1.75rem;
        `;
      default:
        return `
          padding: 0.625rem 0.875rem;
          font-size: 1rem;
          line-height: 1.5rem;
        `;
    }
  }}
  
  &:focus {
    outline: none;
    border-color: #0078d4;
    box-shadow: 0 0 0 1px #0078d4;
  }
  
  &:disabled {
    background-color: #f3f2f1;
    border-color: #e1dfdd;
    color: #a19f9d;
    cursor: not-allowed;
  }
  
  &::placeholder {
    color: #a19f9d;
  }
  
  ${props => props.$error && `
    border-color: #d13438;
    
    &:focus {
      border-color: #d13438;
      box-shadow: 0 0 0 1px #d13438;
    }
  `}
`;

const ErrorMessage = styled.div`
  font-size: 0.75rem;
  color: #d13438;
  margin-top: 0.25rem;
`;

const RequiredMark = styled.span`
  color: #d13438;
  margin-left: 0.125rem;
`;

export const Input: React.FC<InputProps> = ({
  type = 'text',
  value,
  onChange,
  placeholder,
  disabled = false,
  error,
  label,
  fullWidth = false,
  size = 'medium',
  required = false,
  ...props
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <InputContainer $fullWidth={fullWidth}>
      {label && (
        <Label>
          {label}
          {required && <RequiredMark>*</RequiredMark>}
        </Label>
      )}
      <StyledInput
        type={type}
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        disabled={disabled}
        $error={error}
        $fullWidth={fullWidth}
        $size={size}
        required={required}
        {...props}
      />
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </InputContainer>
  );
}; 