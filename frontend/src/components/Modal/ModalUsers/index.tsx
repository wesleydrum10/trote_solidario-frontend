import { FormEvent, useState, useContext } from 'react';
import { Form, Top } from '../stylesModal'
import Modal from 'react-modal';
import { GrClose } from 'react-icons/gr'
import { api, config } from '../../../services/api';
import { FormGroup, Input, TableCell } from '@mui/material';

interface ModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

interface User {
  id_usuario?: string;
  cod_usuario: string;
  password: string;
  nome_usuario: string;
  ocupacao_usuario: string;
  departamento_usuario: string;
}

export const ModalUser: React.FC<ModalProps> = ({ isOpen, onRequestClose }) => {

  const [user, setUser] = useState<User>({} as User);

  async function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const aux = Object.assign(user, {
      [e.target.name]: e.target.value,
    });

    setUser(aux);
  }

  function createUser(e: FormEvent): void {
    e.preventDefault()

    if (user.id_usuario) {
      alert(`Este usuário já existe`)
    }
    else if (!user.id_usuario) {
      try {
        api
          .post<User>(`/users`, user, config)
          .then(response => alert(`Inserção com sucesso`))
        setUser({} as User);
        onRequestClose()
      }
      catch {
        alert(`Problema ao inserir usuário`)
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
          <h2>Cadastrar usuário</h2>
          <GrClose onClick={onRequestClose} size={20} />
        </FormGroup>
        <FormGroup style={{ fontFamily: "Roboto" }}>
          <TableCell>
            <Input
              fullWidth
              type="text"
              name="nome_usuario"
              placeholder="Nome"
              value={user.nome_usuario}
              onChange={handleChange}
            />
          </TableCell>
          <TableCell>
            <Input
              fullWidth
              type="text"
              name="departamento_usuario"
              placeholder="Departamento"
              value={user.departamento_usuario}
              onChange={handleChange}
            />
          </TableCell>
          <TableCell>
            <Input
              fullWidth
              type="text"
              name="ocupacao_usuario"
              placeholder="Ocupação"
              value={user.ocupacao_usuario}
              onChange={handleChange}
            />
          </TableCell>
          <TableCell>
            <Input
              fullWidth
              type="text"
              name="password"
              placeholder="Senha"
              value={user.password}
              onChange={handleChange}
            />
          </TableCell>
          <TableCell>
            <Input
              fullWidth
              type="text"
              name="cod_usuario"
              placeholder="Código"
              value={user.cod_usuario}
              onChange={handleChange}
            />
          </TableCell>
          <Form>
            <button onClick={createUser} type="submit">
              Cadastrar
            </button>
          </Form>
        </FormGroup>
      </>
    </Modal >
  )
}