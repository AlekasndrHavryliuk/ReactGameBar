import styled from 'styled-components';

export const CustomPrevBtn = styled.button`
  width: 50%;
  font-size: 17px;
  padding: 15px;
  border: none;
  text-align: center;
  text-transform: uppercase;
  background-color: ${({ theme }) => theme.loadMoreBtnColor};
  /* color: ${({ theme }) => theme.loadMoreBtnTextColor}; */
  color: ${({ theme }) => theme.headerTextColor};
  cursor: pointer;

  transition: all 0.5s ease 0s;

  &:hover {
    background-color: ${({ theme }) => theme.loadMoreHoverColor};
    color: ${({ theme }) => theme.mainCardTextColor};
  }

  &:disabled {
    background-color: ${({ theme }) => theme.loadMoreDisabledColor};

    &:hover {
      background-color: ${({ theme }) => theme.loadMoreDisabledColor};
      color: ${({ theme }) => theme.headerTextColor};
    }
  }
`;
