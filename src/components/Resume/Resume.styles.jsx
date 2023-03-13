import styled from 'styled-components';

export const ResumeSectionContainer = styled.section`
  margin-bottom: 2rem;

  h3 {
    margin-bottom: 0.5rem;
    font-size: 1.5rem;
    font-weight: bold;
  }

  ul {
    margin-left: 2rem;
    li {
      margin-bottom: 0.5rem;
      font-size: 1.25rem;
    }
  }
`;

export const DownloadButton = styled.button`
  display: inline-flex;
  align-items: center;
  background-color: #0077b5;
  color: #fff;
  border-radius: 3px;
  font-size: 1.25rem;
  padding: 0.5rem 1rem;
  border: none;
  cursor: pointer;

  svg {
    margin-right: 0.5rem;
    font-size: 1.5rem;
  }

  &:hover {
    background-color: #005e91;
  }
`;
