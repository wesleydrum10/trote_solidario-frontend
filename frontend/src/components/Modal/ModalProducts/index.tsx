import { FormEvent, useEffect, useState } from 'react';
import { Form, Top } from '../stylesModal'
import Modal from 'react-modal';
import { GrClose } from 'react-icons/gr'
import { api, config } from '../../../services/api';
import TableCell from '@mui/material/TableCell';
import { FormGroup, Input } from '@mui/material';

interface ModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

interface Product {
  id_produto?: string;
  cod_usuario: string;
  descricao_produto: string;
  nome_produto: string;
  quantidade_produto: number;
}

export const ModalProducts: React.FC<ModalProps> = ({ isOpen, onRequestClose }) => {

  const [product, setProduct] = useState<Product>({} as Product);

  async function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const aux = Object.assign(product, {
      [e.target.name]: e.target.value,
    });

    setProduct(aux);
  }

  function createProduct(e: FormEvent): void {
    e.preventDefault()

    if (product.id_produto) {
      alert(`Este produto já existe`)
    }
    else if (!product.id_produto) {
      try {
        api
          .post<Product>(`/products`, product, config)
          .then(response => alert(`Inserção com sucesso`))
        setProduct({} as Product);
        onRequestClose()
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
      <>
        <FormGroup row style={{ display: "flex", justifyContent: "space-between", margin: '0px 12px' }} onClick={() => onRequestClose()} >
          <h2>Cadastrar Produto</h2>
          <GrClose size={20} />
        </FormGroup>
        <FormGroup style={{ fontFamily: "Roboto" }}>
          <TableCell>
            <Input
              fullWidth
              type="text"
              name="nome_produto"
              placeholder="Nome "
              value={product.nome_produto}
              onChange={handleChange}
            />
          </TableCell>
          <TableCell>
            <Input
              fullWidth
              type="text"
              name="descricao_produto"
              placeholder="Descrição"
              value={product.descricao_produto}
              onChange={handleChange}
            />
          </TableCell>
          <TableCell>
            <Input
              fullWidth
              type="number"
              name="quantidade_produto"
              placeholder="Quantidade"
              value={product.quantidade_produto}
              onChange={handleChange}
            />
          </TableCell>
          <TableCell>
            <Input
              fullWidth
              type="text"
              name="cod_usuario"
              placeholder="Código usuário"
              value={product.cod_usuario}
              onChange={handleChange}
            />
          </TableCell>
          <Form>
            <button onClick={createProduct} type="submit">
              Cadastrar
            </button>
          </Form>
        </FormGroup>
      </>
    </Modal >
  )
}