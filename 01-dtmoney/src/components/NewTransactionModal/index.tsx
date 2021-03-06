import { FormEvent, useState } from 'react';
import Modal from 'react-modal';

import { useTransactions } from '../../hooks/useTransactions';

import * as S from './styles';

import closeImg from '../../assets/close.svg';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';

interface isNewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

Modal.setAppElement('#root');

export function NewTransactionModal(props: isNewTransactionModalProps) {
  const { createTransaction } = useTransactions();

  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState('');
  const [type, setType] = useState('deposit');

  async function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault();

    await createTransaction({
      title,
      amount,
      category,
      type,
    });
    
    setTitle('');
    setAmount(0);
    setCategory('');
    setType('deposit')
    props.onRequestClose();
  }

  return (
    <Modal 
      isOpen={props.isOpen} 
      onRequestClose={props.onRequestClose}
      overlayClassName='react-modal-overlay'
      className='react-modal-content'
    > 

      <button 
        type='button' 
        onClick={props.onRequestClose}
        className='react-modal-close'
      >
        <img src={closeImg} alt="Fechar modal" />
      </button>

      <S.Container onSubmit={handleCreateNewTransaction}>
        <h2>Cadastrar Transação</h2>

        <input 
          placeholder='Título'
          value={title}
          onChange={event => setTitle(event.target.value)}
        />

        <input
          type='number' 
          placeholder='Valor'
          value={amount}
          onChange={event => setAmount(Number(event.target.value))}
        />

        <S.TransactionTypeContainer>
          <S.RadioBox
            type='button'
            onClick={() => {setType('deposit'); }}
            isActive={type === 'deposit'}
            activeColor='green'
          >
            <img src={incomeImg} alt='Entrada' />
            <span>Entrada</span>
          </S.RadioBox>

          <S.RadioBox
            type='button'
            onClick={() => {setType('withdraw'); }}
            isActive={type === 'withdraw'}
            activeColor='red'
          >
            <img src={outcomeImg} alt='Saída' />
            <span>Saída</span>
          </S.RadioBox>
        </S.TransactionTypeContainer>

        <input
          placeholder='Categoria' 
          value={category}
          onChange={event => setCategory(event.target.value)}
        />

        <button type='submit'>
          Cadastrar
        </button>
      </S.Container>
    </Modal>
  );
}
