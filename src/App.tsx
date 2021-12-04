import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";
import { useState } from "react";
import Modal from 'react-modal'
import { NewTransactionModal } from "./components/NewTransactionModal";

Modal.setAppElement('#root') //informando a tag onde a aplicação é renderizada

export function App() {
  // estado para controlar se esta aberto/fechado
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false)

  // funções que trocam o estado do modal
  function handleCloseNewTransactionModal() {
    setIsNewTransactionModalOpen(false)
  }
  function handleOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true)
  }

  return (
    <>
      <Header onOpenNewTransactonModal={handleOpenNewTransactionModal}/> {/* passando função do estado da app para um componente filho */}
      <Dashboard />

      {/* Tag modal pode estar em qualquer lugar com seu conteudo dentro da tag*/}
      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />

      <GlobalStyle />
    </>
  );
}

