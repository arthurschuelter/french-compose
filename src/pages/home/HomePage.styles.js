import styled from 'styled-components';

export const GameCardLink = styled.a`
  min-height: 186px;
  padding: 15px 16px 13px;
  border: 1px solid #e8e7df;
  border-radius: 10px;
  background: #fffefa;
  display: flex;
  flex-direction: column;
  transition: transform 180ms ease, border-color 180ms ease, box-shadow 180ms ease;

  &:hover {
    transform: translateY(-3px);
    border-color: #c9d1c3;
    box-shadow: 0 10px 24px #33351b0a;
  }

  @media (max-width: 700px) {
    min-height: 174px;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;

export const FilterChip = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;
  border: 1px solid ${({ $selected }) => ($selected ? '#536b50' : '#e6e5dc')};
  border-radius: 20px;
  background: ${({ $selected }) => ($selected ? '#536b50' : 'transparent')};
  color: ${({ $selected }) => ($selected ? '#fff' : '#888c83')};
  font: inherit;
  font-size: 10px;
  white-space: nowrap;
  cursor: pointer;
`;
