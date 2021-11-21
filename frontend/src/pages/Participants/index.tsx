import { LayoutDefault } from '../../components/LayoutDefault/index'
import { CardLight } from "../../components/CardLight"
import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header/index'
import {
  Container,
  Card1,
  ButtonLeft,
  ButtonRight,
  ShowButton
} from '../../components/LayoutDefault/styles';
import TemporaryDrawer from '../../components/Drawer'
import { Button } from '../../components/Button'
import { BsPersonPlus } from 'react-icons/bs';
import { useState } from 'react';
import { ModalUser } from '../../components/Modal/ModalUsers/index';
import { ModalConsultUser } from '../../components/Modal/ModalUsers/consult';

export const Participants: React.FC = () => {

  const [open, setOpen] = useState(false)
  const [openConsult, setOpenConsult] = useState(false)

  function modalOpen() {
    setOpen(true)
  }

  function modalClose() {
    setOpen(false)
  }

  function modalOpenConsult() {
    setOpenConsult(true)
  }

  function modalCloseConsult() {
    setOpenConsult(false)
  }

  return (
    <>
      <LayoutDefault
        header={
          <Header
            title="Participantes"
            children={
              <TemporaryDrawer />
            }
          />
        }
        section={
          <Container>
            <Card1>
              <CardLight
                children={
                  <BsPersonPlus />
                }
                title="Participantes"
                description="Seja bem vindo!"
              />
            </Card1>
            <ShowButton>
              <ButtonLeft>
                <Button
                  openModal={modalOpen}
                  color="var(--green)"
                  title="Adicionar"
                />
              </ButtonLeft>
              <ButtonRight>
                <Button
                  openModal={modalOpenConsult}
                  color="var(--blue)"
                  title="Consultar"
                />
              </ButtonRight>
            </ShowButton>
            <ModalUser
              isOpen={open}
              onRequestClose={modalClose}
            />
            <ModalConsultUser
              isOpen={openConsult}
              onRequestClose={modalCloseConsult}
            />
          </Container>
        }
        footer={
          <Footer />
        }
      />
    </>
  )
}