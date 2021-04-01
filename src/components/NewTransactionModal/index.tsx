import Modal from 'react-modal';

import * as S from './styles';

interface isNewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

Modal.setAppElement('#root');

export function NewTransactionModal(props: isNewTransactionModalProps) {
  return (
    <Modal 
      isOpen={props.isOpen} 
      onRequestClose={props.onRequestClose}
      overlayClassName='react-modal-overlay'
      className='react-modal-content'
    > 
      <S.Container>
        <h2>Cadastrar Transação</h2>

        <input 
          placeholder='Título'

        />

        <input
          type='number' 
          placeholder='Valor'
          
        />

        <input
          placeholder='Categoria'
          
        />

        <button type='submit'>
          Cadastrar
        </button>
      </S.Container>
    </Modal>
  )
}