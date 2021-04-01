import { useState } from 'react';

import { Header } from "./components/Header";
import { Dashboard } from "./components/Dashboard";
import { NewTransactionModal } from './components/NewTransactionModal';

import { GlobalStyle } from "../src/styles/global";

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

  function hanldeOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true)
  }

  function hanldeCloseNewTransactionModal() {
    setIsNewTransactionModalOpen(false)
  }

  return (
    <>
      <Header onOpenNewTransactionModal={hanldeOpenNewTransactionModal}/>
      <Dashboard />

      <NewTransactionModal 
        isOpen={isNewTransactionModalOpen}
        onRequestClose={hanldeCloseNewTransactionModal}
      />
      <GlobalStyle />
    </>
  );
}
