import { FormEvent, useEffect, useState } from 'react';
import { Form, Top } from '../stylesModal'
import Modal from 'react-modal';
import { GrClose } from 'react-icons/gr'
import { api, config } from '../../../services/api';
import { FormGroup, Input, styled, TableBody, TableCell, tableCellClasses, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { FiEdit2 } from 'react-icons/fi';
import { NoData } from '../../Empty';

Modal.setAppElement('#root')

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: "var(--backgroundBody)",
  },
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

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

export const ModalConsultProducts: React.FC<ModalProps> = ({ isOpen, onRequestClose }) => {

  const [product, setProduct] = useState<Product>({} as Product);
  const [products, setProducts] = useState<Product[]>([]);
  const [open, setOpen] = useState(false);

  async function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const aux = Object.assign(product, {
      [e.target.name]: e.target.value,
    });

    setProduct(aux);
  }

  useEffect(() => {
    try {
      api
        .get<Product[]>(`/products`, config)
        .then(response => setProducts(response.data))
        .catch(() => {
          console.error('Não listou os produtos')
        })
    }
    catch {
      alert(`Problema ao consultar produtos`)
    }
  }, [product, open, isOpen])

  function deleteProduct(id: string | undefined): void {
    const resp = window.confirm(`Confirma a exclusão do produto ${id}`)
    if (resp) {
      try {
        api
          .delete<Product>(`/products/${id}`, config)
          .then(response => alert(`Remoção com sucesso `))
        setProduct({} as Product);
      }
      catch {
        alert(`Problema ao remover produto`)
      }
    }

  }

  function updatedingEvent(e: FormEvent): void {
    e.preventDefault()

    let updateProduct = {
      cod_usuario: product.cod_usuario,
      descricao_produto: product.descricao_produto,
      nome_produto: product.nome_produto,
      quantidade_produto: product.quantidade_produto
    }

    try {
      api
        .put<Product>(`/products/${product.id_produto}`, updateProduct, config)
        .then(response => alert(`Atualização com sucesso`))
      setProduct({} as Product)
      onRequestClose()
      setOpen(false)
    }
    catch {
      alert(`Problema ao atualizar produto`)
    }
  }

  function updateProduct(produto: Product | undefined): void {
    setOpen(true)

    if (produto) {
      const aux = produto
      setProduct(aux)
    }
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
    >
      <Top>
        <h2>Cadastrar Produto</h2>
        <GrClose onClick={onRequestClose} size={20} />
      </Top>
      <TableContainer>
        <TableHead>
          <TableRow>
            <TableCell>Remover</TableCell>
            <TableCell/>
            <TableCell/>
            <TableCell>Editar</TableCell>
            <TableCell/>
            <TableCell/>
            <TableCell>Nome</TableCell>
            <TableCell/>
            <TableCell/>
            <TableCell>Cód usuário</TableCell>
            <TableCell/>
            <TableCell/>
            <TableCell>Quantidade</TableCell>
            <TableCell/>
            <TableCell/>
            <TableCell>Descrição</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map(product => (
            <StyledTableRow key={product.id_produto}>
              <TableCell align="center">
                <AiOutlineCloseCircle
                  color="red"
                  fontSize={16}
                  onClick={() => deleteProduct(product.id_produto)}
                />
              </TableCell>
              <TableCell/>
              <TableCell/>
              <TableCell align="center">
                <FiEdit2 onClick={() => updateProduct(product)} />
              </TableCell>
              <TableCell/>
              <TableCell/>
              <TableCell>{product.nome_produto}</TableCell>
              <TableCell/>
              <TableCell/>
              <TableCell align="center">{product.cod_usuario}</TableCell>
              <TableCell/>
              <TableCell/>
              <TableCell align="center">{product.quantidade_produto}</TableCell>
              <TableCell/>
              <TableCell/>
              <TableCell>{product.descricao_produto}</TableCell>
            </StyledTableRow>
          ))}
        </TableBody>
        {!products.length && (
          <NoData />
        )}
        {open && (
          <TableContainer style={{ background: "var(--backgroundBody)", marginTop: "10px", paddingBottom: "10px" }}>
            <Top>
              <h2>Editar</h2>
              <GrClose size={20} onClick={() => setOpen(false)} />
            </Top>
            <FormGroup row style={{ fontFamily: "Roboto" }}>
              <TableCell>
                <Typography style={{ fontFamily: "Roboto", color: "var(--backgroundDark)", marginBottom: "10px" }}>Nome</Typography>
                <Input
                  fullWidth
                  type="text"
                  name="nome_produto"
                  placeholder="Nome "
                  defaultValue={product.nome_produto}
                  onChange={handleChange}
                />
              </TableCell>
              <TableCell>
                <Typography style={{ fontFamily: "Roboto", color: "var(--backgroundDark)", marginBottom: "10px" }}>Cód usuário</Typography>
                <Input
                  fullWidth
                  type="text"
                  name="cod_usuario"
                  placeholder="Código usuário"
                  defaultValue={product.cod_usuario}
                  onChange={handleChange}
                />
              </TableCell>
              <TableCell>
                <Typography style={{ fontFamily: "Roboto", color: "var(--backgroundDark)", marginBottom: "10px" }}>Cód usuário</Typography>
                <Input
                  fullWidth
                  type="number"
                  name="quantidade_produto"
                  placeholder="Quantidade"
                  defaultValue={product.quantidade_produto}
                  onChange={handleChange}
                />
              </TableCell>
              <TableCell>
                <Typography style={{ fontFamily: "Roboto", color: "var(--backgroundDark)", marginBottom: "10px" }}>Cód usuário</Typography>
                <Input
                  fullWidth
                  type="text"
                  name="descricao_produto"
                  placeholder="Descrição"
                  defaultValue={product.descricao_produto}
                  onChange={handleChange}
                />
              </TableCell>
            </FormGroup>
            <Form>
              <button onClick={updatedingEvent} type="submit">
                Atualizar
              </button>
            </Form>
          </TableContainer>
        )}
      </TableContainer>
    </Modal >
  )
}