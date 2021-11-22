import { FormEvent, useEffect, useState } from 'react';
import { Form, Top } from '../stylesModal'
import Modal from 'react-modal';
import { GrClose } from 'react-icons/gr'
import { api, config } from '../../../services/api';
import { FormGroup, Input, styled, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
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

interface User {
  id_usuario?: string;
  cod_usuario: string;
  password: string;
  nome_usuario: string;
  ocupacao_usuario: string;
  departamento_usuario: string;
}

export const ModalConsultUser: React.FC<ModalProps> = ({ isOpen, onRequestClose }) => {

  const [user, setUser] = useState<User>({} as User);
  const [users, setUsers] = useState<User[]>([]);
  const [open, setOpen] = useState(false);

  async function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const aux = Object.assign(user, {
      [e.target.name]: e.target.value,
    });

    setUser(aux);
  }

  useEffect(() => {
    try {
      api
        .get<User[]>(`/users`, config)
        .then(response => setUsers(response.data))
        .catch(() => {
          console.error('Não listou os usuários')
        })
    }
    catch {
      alert(`Problema ao consultar usuários`)
    }
  }, [user, open, isOpen])

  function deleteUser(id: string | undefined): void {
    const resp = window.confirm(`Confirma a exclusão do usuário ${id}`)
    if (resp) {
      try {
        api
          .delete<User>(`/users/${id}`, config)
          .then(response => alert(`Remoção com sucesso `))
        setUser({} as User);
      }
      catch {
        alert(`Problema ao remover usuário`)
      }
    }
  }

  function updatedingUser(e: FormEvent): void {
    e.preventDefault()

    let updateUser = {
      cod_usuario: user.cod_usuario,
      password: user.password,
      nome_usuario: user.nome_usuario,
      ocupacao_usuario: user.ocupacao_usuario,
      departamento_usuario: user.departamento_usuario
    }

    try {
      api
        .put<User>(`/users/${user.id_usuario}`, updateUser, config)
        .then(response => alert(`Atualização com sucesso`))
      setUser({} as User)
      onRequestClose()
      setOpen(false)
    }
    catch {
      alert(`Problema ao atualizar usuário`)
    }
  }

  function updateUser(usuario: User | undefined): void {
    setOpen(true)

    if (usuario) {
      const aux = usuario
      setUser(aux)
    }
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
    >
      <Top>
        <h2>Usuários</h2>
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
            <TableCell>Departamento</TableCell>
            <TableCell/>
            <TableCell/>
            <TableCell>Ocupação</TableCell>
            <TableCell/>
            <TableCell/>
            <TableCell>Cód usuário</TableCell>
            <TableCell/>
            <TableCell/>
            <TableCell>Senha</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map(user => (
            <StyledTableRow key={user.id_usuario}>
              <TableCell align="center">
                <AiOutlineCloseCircle
                  color="red"
                  fontSize={16}
                  onClick={() => deleteUser(user.id_usuario)}
                />
              </TableCell>
              <TableCell/>
              <TableCell/>
              <TableCell align="center">
                <FiEdit2 onClick={() => updateUser(user)} />
              </TableCell>
              <TableCell/>
              <TableCell/>
              <TableCell>{user.nome_usuario}</TableCell>
              <TableCell/>
              <TableCell/>
              <TableCell>{user.departamento_usuario}</TableCell>
              <TableCell/>
              <TableCell/>
              <TableCell >{user.ocupacao_usuario}</TableCell>
              <TableCell/>
              <TableCell/>
              <TableCell align="center">{user.cod_usuario}</TableCell>
              <TableCell/>
              <TableCell/>
              <TableCell>******</TableCell>
            </StyledTableRow>
          ))}
        </TableBody>
        {!users.length && (
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
                <Typography
                  style={{ fontFamily: "Roboto", color: "var(--backgroundDark)", marginBottom: "10px" }}
                >
                  Nome
                </Typography>
                <Input
                  fullWidth
                  type="text"
                  name="nome_usuario"
                  placeholder="Nome"
                  defaultValue={user.nome_usuario}
                  onChange={handleChange}
                />
              </TableCell>
              <TableCell>
                <Typography
                  style={{ fontFamily: "Roboto", color: "var(--backgroundDark)", marginBottom: "10px" }}
                >
                  Departamento
                </Typography>
                <Input
                  fullWidth
                  type="text"
                  name="departamento_usuario"
                  placeholder="Departamento"
                  defaultValue={user.departamento_usuario}
                  onChange={handleChange}
                />
              </TableCell>
              <TableCell>
                <Typography
                  style={{ fontFamily: "Roboto", color: "var(--backgroundDark)", marginBottom: "10px" }}
                >
                  Ocupação
                </Typography>
                <Input
                  fullWidth
                  type="text"
                  name="ocupacao_usuario"
                  placeholder="Ocupação"
                  defaultValue={user.ocupacao_usuario}
                  onChange={handleChange}
                />
              </TableCell>
              <TableCell>
                <Typography
                  style={{ fontFamily: "Roboto", color: "var(--backgroundDark)", marginBottom: "10px" }}
                >
                  Senha
                </Typography>
                <Input
                  fullWidth
                  type="text"
                  name="password"
                  placeholder="Senha"
                  defaultValue={user.password}
                  onChange={handleChange}
                />
              </TableCell>
              <TableCell>
                <Typography
                  style={{ fontFamily: "Roboto", color: "var(--backgroundDark)", marginBottom: "10px" }}
                >
                  Cód usuário
                </Typography>
                <Input
                  fullWidth
                  type="text"
                  name="cod_usuario"
                  placeholder="Código"
                  defaultValue={user.cod_usuario}
                  onChange={handleChange}
                />
              </TableCell>
            </FormGroup>
            <Form>
              <button onClick={updatedingUser} type="submit">
                Atualizar
              </button>
            </Form>
          </TableContainer>
        )}
      </TableContainer>
    </Modal >
  )
}