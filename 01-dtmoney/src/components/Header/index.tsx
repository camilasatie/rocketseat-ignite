import logo from '../../assets/logo.svg';

import * as S from './styles';

interface HeaderProps {
  onOpenNewTransactionModal: () => void;
}

export function Header(props: HeaderProps) {
  return (
    <S.Container>
      <S.Content>
        <img src={logo} alt="dt money"/>
        <button type="button" onClick={props.onOpenNewTransactionModal}>
          Nova transação
        </button>
      </S.Content>
    </S.Container>
  )
}
