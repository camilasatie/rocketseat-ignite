import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  margin-top: -10rem;

  div {
    background: var(--shape);
    color: var(--text-title);;
    border-radius: .25rem;
    padding: 1.5rem 2rem;
  
    header {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    strong {
      display: block;
      font-size: 2rem;
      font-weight: 500;
      line-height: 3rem;
      
      margin-top: 1rem;
    }

    &.highlight-bg {
      background: var(--green);
      color: #fff;
    }
  }
`;