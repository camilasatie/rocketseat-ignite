import styled from 'styled-components';
import { darken, transparentize } from 'polished'; 

export const Container = styled.form`
  h2 {
    color: var(--text-title);
    font-size: 1.5rem;

    margin-bottom: 2rem;
  }

  input {
    background-color: #e7e9ee;
    
    border: 1px solid #d7d7d7;
    border-radius: .25rem;
    font-weight: 400;
    font-size: 1rem;

    width: 100%;
    height: 4rem;
    padding: 0 1.5rem;

    &::placeholder {
      color: var(--text-body);
    }

    & + input {
      margin-top: 1rem;
    }
  }

  button[type="submit"] {
    background: var(--green);
    color: #fff;
    border-radius: .25rem;
    border: 0;
    font-size: 1rem;
    font-weight: 600;

    width: 100%;
    height: 4rem;
    padding: 0 1.5rem;
    margin-top: 1.5rem;

    transition: filter(.2s);

    &:hover {
      filter: brightness(.9);
    }
  }
`;

export const TransactionTypeContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: .5rem;
  margin: 1rem 0 1.5rem;
`;

interface RadioBoxProps {
  isActive: boolean;
  activeColor: 'green' | 'red';
}

const colors = {
  green: '#33cc95',
  red: '#e52e4d'
}

export const RadioBox = styled.button<RadioBoxProps>`
  background: ${(props) => props.isActive 
    ? transparentize(0.9, colors[props.activeColor])
    : 'transparent'
  };

  border: 1px solid #d7d7d7;
  border-radius: .25rem;
  display: flex;
  align-items: center;
  justify-content: center;

  height: 4rem;

  transition: border-color .2s;

  &:hover {
    border-color: ${darken(0.1, '#d7d7d7')};
  }

  img {
    width: 20px;
    height: 20px;
  }

  span {
    color: var(--text-title);
    font-size: 1rem;
    display: inline-block;
    margin-left: 1rem;
  }
`;