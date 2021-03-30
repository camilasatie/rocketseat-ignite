import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 4rem;

  table {
    border-spacing: .5rem;

    width: 100%;

    th {
      color: var(--text-body);
      font-weight: 400;
      text-align: left;
      line-height: 1.5rem;

      padding: 1rem 2rem
    }

    td {
      background: var(--shape);
      color: var(--text-body);
      border: 0;
      border-radius: .25rem;
      
      padding: 1rem 2rem;

      &:first-child {
        color: var(--text-title);
      }

      &.deposit {
        color: var(--green)
      }

      &.withdraw {
        color: var(--red)
      }
    }
  }
`;