import { useState, useEffect } from 'react';
import { Container, Top } from '../stylesConsult'
import Modal from 'react-modal';
import { GrClose } from 'react-icons/gr'
import { api } from '../../../services/api';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { FiEdit2 } from 'react-icons/fi';

Modal.setAppElement('#root')

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

export const ModalNoticesConsult: React.FC<ModalProps> = ({ isOpen, onRequestClose }) => {

  const [notice, setNotice] = useState<Notice>({} as Notice);
  const [notices, setNotices] = useState<Notice[]>([]);

  const config = {
    headers: {
      'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2MzU4ODMyOTMsImV4cCI6MTYzNTk2OTY5Mywic3ViIjoiOTcxZmZiYjYtNTk1Yi00NDg3LWEyZWUtMjM2NzlhM2JkMDNiIn0.6B1lKPspEHG-sjBeje2IdLe20v-dVhwJK9x6vIzJHnw'
    }
  }

  function load() {
    api.get<Notice[]>('/notices')
    .then(res => setNotices(res.data))
  }

  useEffect(() => {
    load()
  }, [])

  console.log('Notices', notices)

  async function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const aux = Object.assign(notice, {
      [e.target.name]: e.target.value,
    });

    setNotice(aux);
  }

  function createEvent(): void {
    if (notice.id_aviso) {
      alert(`Este aviso já existe`)
    }
    else if (!notice.id_aviso) {
      try {
        api
          .post<Notice>(`/avisos`, notice, config)
          .then(response => alert(`Inserção com sucesso`))
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
      <Container>
        <Top>
          <h2>Eventos</h2>
          <p onClick={onRequestClose}>
            Fechar
            <GrClose size={20} />
          </p>
        </Top>
        <table>
          <thead>
            <tr>
              <th>Remover</th>
              <th>Editar</th>
              <th>Título</th>
              <th>Cod Usuário</th>
              <th>Data</th>
              <th>Prazo</th>
              <th>Descrição</th>
            </tr>
          </thead>
          <tbody>
            {notices.map(notice => (
              <tr key={notice.id_aviso}>
                <td><AiOutlineCloseCircle color="red" fontSize={20} /></td>
                <td><FiEdit2 /></td>
                <td>{notice.titulo_aviso}</td>
                <td>{notice.cod_usuario}</td>
                <td>{notice.data_aviso}</td>
                <td>{notice.prazo_aviso}</td>
                <td>{notice.descricao_aviso}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Container>
    </Modal >
  )
}
