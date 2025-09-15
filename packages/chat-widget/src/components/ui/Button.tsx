/**
 * 재사용 가능한 버튼 컴포넌트
 * - AWS Chime 스타일
 * - 다양한 버튼 타입 지원
 * - 독립적으로 사용 가능
 */

import React from 'react';
import styled from 'styled-components';

export interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'danger';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  loading?: boolean;
  fullWidth?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
}

const StyledButton = styled.button<ButtonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 0.25rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  position: relative;
  
  ${props => props.fullWidth && 'width: 100%;'}
  
  /* Size variants */
  ${props => {
    switch (props.size) {
      case 'small':
        return `
          padding: 0.5rem 1rem;
          font-size: 0.875rem;
          line-height: 1.25rem;
        `;
      case 'large':
        return `
          padding: 0.75rem 1.5rem;
          font-size: 1.125rem;
          line-height: 1.75rem;
        `;
      default:
        return `
          padding: 0.625rem 1.25rem;
          font-size: 1rem;
          line-height: 1.5rem;
        `;
    }
  }}
  
  /* Color variants */
  ${props => {
    switch (props.variant) {
      case 'primary':
        return `
          background-color: #0078d4;
          color: white;
          
          &:hover:not(:disabled) {
            background-color: #106ebe;
          }
          
          &:active:not(:disabled) {
            background-color: #005a9e;
          }
        `;
      case 'danger':
        return `
          background-color: #d13438;
          color: white;
          
          &:hover:not(:disabled) {
            background-color: #b52d32;
          }
          
          &:active:not(:disabled) {
            background-color: #a0262b;
          }
        `;
      default:
        return `
          background-color: #f3f2f1;
          color: #323130;
          border: 1px solid #d2d0ce;
          
          &:hover:not(:disabled) {
            background-color: #e1dfdd;
          }
          
          &:active:not(:disabled) {
            background-color: #d2d0ce;
          }
        `;
    }
  }}
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  
  &:focus {
    outline: 2px solid #0078d4;
    outline-offset: 2px;
  }
`;

const LoadingSpinner = styled.div`
  width: 1rem;
  height: 1rem;
  border: 2px solid transparent;
  border-top: 2px solid currentColor;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin-right: 0.5rem;
  
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

export const Button: React.FC<ButtonProps> = ({
  variant = 'secondary',
  size = 'medium',
  disabled = false,
  loading = false,
  fullWidth = false,
  children,
  onClick,
  type = 'button',
  ...props
}) => {
  return (
    <StyledButton
      variant={variant}
      size={size}
      disabled={disabled || loading}
      fullWidth={fullWidth}
      onClick={onClick}
      type={type}
      {...props}
    >
      {loading && <LoadingSpinner />}
      {children}
    </StyledButton>
  );
}; 