import { useState } from 'react';

import { Header } from "./components/Header";
import { Dashboard } from "./components/Dashboard";
import { NewTransactionModal } from './components/NewTransactionModal';

import { TransactionsProvider } from './hooks/useTransactions';

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
    <TransactionsProvider>
      <Header onOpenNewTransactionModal={hanldeOpenNewTransactionModal}/>

      <Dashboard />

      <NewTransactionModal 
        isOpen={isNewTransactionModalOpen}
        onRequestClose={hanldeCloseNewTransactionModal}
      />
      
      <GlobalStyle />
    </TransactionsProvider>
  );
}
