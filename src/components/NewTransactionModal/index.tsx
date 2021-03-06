import Modal from 'react-modal'
import { Container } from './styles'
import closeImg from '../../assets/close.svg'

interface NewTransactionModalProps {
    isOpen: boolean,
    onRequestClose: () => void
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {
    return (
        <Modal 
            isOpen={isOpen}  //propriedade obrigatoria -> controla se ja carrega aberta
            onRequestClose={onRequestClose} //propriedade para executar a funçao de fechar quando usuario requerir
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >
          <button 
            type="button" 
            onClick={onRequestClose} 
            className="react-modal-close"
          >
              <img src={closeImg} alt="Fechar" />
          </button>
          <Container>
            <h2>Cadastrar transação</h2>
            <input placeholder="Título"/>
            <input placeholder="Valor" type="number"/>
            <input placeholder="Categoria"/>
            <button type="submit">Cadastrar</button>
          </Container>
        </Modal>
    )
} 