import { FormEvent, useState, useContext } from 'react';
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

interface Notice {
  id_aviso?: string;
  cod_usuario: string;
  descricao_aviso: string;
  titulo_aviso: string;
  prazo_aviso: string;
  data_aviso: string;
  departamento_aviso: string;
}

export const ModalNotices: React.FC<ModalProps> = ({ isOpen, onRequestClose }) => {

  const [notice, setNotice] = useState<Notice>({} as Notice);

  async function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const aux = Object.assign(notice, {
      [e.target.name]: e.target.value,
    });

    setNotice(aux);
  }

  function createEvent(e: FormEvent): void {
    e.preventDefault()

    if (notice.id_aviso) {
      alert(`Este aviso já existe`)
    }
    else if (!notice.id_aviso) {
      try {
        api
          .post<Notice>(`/notices`, notice, config)
          .then(response => alert(`Inserção com sucesso`))
        setNotice({} as Notice);
        onRequestClose();
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
      <>
        <FormGroup row style={{ display: "flex", justifyContent: "space-between", margin: '0px 12px' }} onClick={() => onRequestClose()}>
            <h2>Cadastrar Aviso</h2>
            <GrClose onClick={onRequestClose} size={20} />
        </FormGroup>
        <FormGroup style={{ fontFamily: "Roboto" }}>
          <TableCell>
            <Input
              fullWidth
              type="text"
              name="titulo_aviso"
              placeholder="Título "
              value={notice.titulo_aviso}
              onChange={handleChange}
            />
          </TableCell>
          <TableCell>
            <Input
              fullWidth 
              type="text"
              name="descricao_aviso"
              placeholder="Descrição"
              value={notice.descricao_aviso}
              onChange={handleChange}
            />
          </TableCell>
          <TableCell>
            <Input
              fullWidth 
              type="text"
              name="data_aviso"
              placeholder="Data"
              value={notice.data_aviso}
              onChange={handleChange}
            />
          </TableCell>
          <TableCell>
            <Input
              fullWidth 
              type="text"
              name="prazo_aviso"
              placeholder="Prazo máximo"
              value={notice.prazo_aviso}
              onChange={handleChange}
            />
          </TableCell>
          <TableCell>
            <Input
              fullWidth 
              type="text"
              name="cod_usuario"
              placeholder="Código usuário"
              value={notice.cod_usuario}
              onChange={handleChange}
            />
          </TableCell>
          <TableCell>
            <Input
              fullWidth
              type="text"
              name="departamento_aviso"
              placeholder="Departamento"
              value={notice.departamento_aviso}
              onChange={handleChange}
            />
          </TableCell>
          <Form>
            <button onClick={createEvent} type="submit">
              Cadastrar
            </button>
          </Form>
        </FormGroup>
      </>
    </Modal >
  )
}