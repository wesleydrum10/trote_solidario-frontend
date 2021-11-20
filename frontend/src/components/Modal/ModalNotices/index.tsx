import { FormEvent, useState, useContext } from 'react';
import { Form, Top } from '../stylesModal'
import Modal from 'react-modal';
import { GrClose } from 'react-icons/gr'
import { api } from '../../../services/api';

interface ModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

interface Notice {
  id_aviso?: string; 
  cod_usuario: number;
  descricao_aviso: string;
  titulo_aviso: string;
  prazo_aviso: string;
  data_aviso: string;
  departamento_aviso: string;
}

export const ModalNotices: React.FC<ModalProps> = ({ isOpen, onRequestClose }) => {

  const [notice, setNotice] = useState<Notice>({} as Notice);

  const config = {
    headers: {
      'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2MzU4ODMyOTMsImV4cCI6MTYzNTk2OTY5Mywic3ViIjoiOTcxZmZiYjYtNTk1Yi00NDg3LWEyZWUtMjM2NzlhM2JkMDNiIn0.6B1lKPspEHG-sjBeje2IdLe20v-dVhwJK9x6vIzJHnw'
    }
  }


  async function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const aux =  Object.assign(notice, {
      [e.target.name]: e.target.value,
    });

    setNotice(aux);
  }
  
  function createEvent(): void {
    if (notice.id_aviso){
      alert(`Este aviso já existe`)
    }
    else if (!notice.id_aviso){
      try {
        api
          .post<Notice>(`/avisos`, notice, config)
          .then (response => alert(`Inserção com sucesso`))
        setNotice({} as Notice);
      }
      catch {
        alert(`Problema ao inserir aviso`)
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
          <h2>Cadastrar Aviso</h2>
          <GrClose onClick={onRequestClose} size={20} />
        </Top>
        <input
          type="text"
          name="titulo_aviso"
          placeholder="Título "
          value={notice.titulo_aviso}
          onChange={handleChange}
        />
        <input
          type="text"
          name="descricao_aviso"
          placeholder="Descrição"
          value={notice.descricao_aviso}
          onChange={handleChange}
        />
        <input
          type="text"
          name="data_aviso"
          placeholder="Data"
          value={notice.data_aviso}
          onChange={handleChange}
        />
        <input
          type="text"
          name="prazo_aviso"
          placeholder="Prazo máximo"
          value={notice.prazo_aviso}
          onChange={handleChange}
        />
        <input
          type="number"
          name="cod_usuario"
          placeholder="Código usuário"
          value={notice.cod_usuario}
          onChange={handleChange}
        />
        <input
          type="text"
          name="departamento_aviso"
          placeholder="Departamento"
          value={notice.departamento_aviso}
          onChange={handleChange}
        />
        <button onClick={createEvent} type="submit">
          Cadastrar
        </button>
      </Form>
    </Modal >
  )
}