import { useState } from 'react';
import { Form, Top } from '../stylesModal'
import Modal from 'react-modal';
import { GrClose } from 'react-icons/gr'
import { api } from '../../../services/api';

interface ModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

interface People {
  id_usuario?: string;
  cod_usuario: number;
  password: string;
  nome_usuario: string;
  ocupacao_usuario: string;
  departamento_usuario: string;
}

export const ModalUser: React.FC<ModalProps> = ({ isOpen, onRequestClose }) => {

  const [user, setUser] = useState<People>({} as People);

  const config = {
    headers: {
      'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2MzU4ODMyOTMsImV4cCI6MTYzNTk2OTY5Mywic3ViIjoiOTcxZmZiYjYtNTk1Yi00NDg3LWEyZWUtMjM2NzlhM2JkMDNiIn0.6B1lKPspEHG-sjBeje2IdLe20v-dVhwJK9x6vIzJHnw'
    }
  }


  async function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const aux =  Object.assign(user, {
      [e.target.name]: e.target.value,
    });

    setUser(aux);
  }
  
  function createUser(): void {
    if (user.nome_usuario){
      alert(`Este usuário já existe`)
    }
    else if (!user.id_usuario){
      try {
        api
          .post<People>(`/users`, user, config)
          .then (response => alert(`Inserção com sucesso`))
        setUser({} as People);
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
      <Form>
        <Top>
          <h2>Cadastrar usuário</h2>
          <GrClose onClick={onRequestClose} size={20} />
        </Top>
        <input
          type="text"
          name="nome_usuario"
          placeholder="Nome"
          value={user.nome_usuario}
          onChange={handleChange}
        />
        <input
          type="text"
          name="departamento_usuario"
          placeholder="Departamento"
          value={user.departamento_usuario}
          onChange={handleChange}
        />
        <input
          type="text"
          name="ocupacao_usuario"
          placeholder="Ocupação"
          value={user.ocupacao_usuario}
          onChange={handleChange}
        />
        <input
          type="text"
          name="password"
          placeholder="Senha"
          value={user.password}
          onChange={handleChange}
        />
        <input
          type="number"
          name="cod_usuario"
          placeholder="Código"
          value={user.cod_usuario}
          onChange={handleChange}
        />
        <button onClick={createUser} type="submit">
          Cadastrar
        </button>
      </Form>
    </Modal >
  )
}