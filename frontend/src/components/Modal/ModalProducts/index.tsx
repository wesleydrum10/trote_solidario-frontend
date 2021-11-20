import { useState } from 'react';
import { Form, Top } from '../stylesModal'
import Modal from 'react-modal';
import { GrClose } from 'react-icons/gr'
import { api } from '../../../services/api';

interface ModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

interface Product {
  id_produto?: string;
  cod_usuario: number;
  descricao_produto: string;
  nome_produto: string;
  quantidade_produto: number;
}

export const ModalProducts: React.FC<ModalProps> = ({ isOpen, onRequestClose }) => {

  const [product, setProduct] = useState<Product>({} as Product);

  const config = {
    headers: {
      'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2MzU4ODMyOTMsImV4cCI6MTYzNTk2OTY5Mywic3ViIjoiOTcxZmZiYjYtNTk1Yi00NDg3LWEyZWUtMjM2NzlhM2JkMDNiIn0.6B1lKPspEHG-sjBeje2IdLe20v-dVhwJK9x6vIzJHnw'
    }
  }


  async function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const aux = Object.assign(product, {
      [e.target.name]: e.target.value,
    });

    setProduct(aux);
  }

  function createProduct(): void {
    if (product.id_produto) {
      alert(`Este produto já existe`)
    }
    else if (!product.id_produto) {
      try {
        api
          .post<Product>(`/produtos`, product, config)
          .then(response => alert(`Inserção com sucesso`))
        setProduct({} as Product);
      }
      catch {
        alert(`Problema ao inserir produto`)
      }
    }
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
    >
      <Form >
        <Top>
          <h2>Cadastrar Produto</h2>
          <GrClose onClick={onRequestClose} size={20} />
        </Top>
        <input
          type="text"
          name="nome_produto"
          placeholder="Nome "
          value={product.nome_produto}
          onChange={handleChange}
        />
        <input
          type="text"
          name="descricao_produto"
          placeholder="Descrição"
          value={product.descricao_produto}
          onChange={handleChange}
        />
        <input
          type="number"
          name="quantidade_produto"
          placeholder="Quantidade"
          value={product.quantidade_produto}
          onChange={handleChange}
        />
        <input
          type="number"
          name="cod_usuario"
          placeholder="Código usuário"
          value={product.cod_usuario}
          onChange={handleChange}
        />
        <button onClick={createProduct} type="submit">
          Cadastrar
        </button>
      </Form>
    </Modal >
  )
}