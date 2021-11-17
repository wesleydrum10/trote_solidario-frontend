import { useEffect, useState } from "react"
import { BsChatSquareText } from "react-icons/bs"
import { Button } from "../../components/Button"
import { CardLight } from "../../components/CardLight"
import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header'
import {
  Container,
  Card1,
  ButtonLeft,
  ButtonRight,
  ShowButton
} from '../../components/LayoutDefault/styles';
import TemporaryDrawer from "../../components/Drawer"
import { LayoutDefault } from "../../components/LayoutDefault"
import { ModalNotices } from "../../components/Modal/ModalNotices/index"
import { ModalNoticesConsult } from "../../components/Modal/ModalNotices/consult"

export const Notices: React.FC = () => {

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
    <LayoutDefault
      header={
        <Header
          title="Avisos"
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
                <BsChatSquareText />
              }
              title="Avisos"
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
          <ModalNotices
            isOpen={open}
            onRequestClose={modalClose}
          />
          <ModalNoticesConsult
            isOpen={openConsult}
            onRequestClose={modalCloseConsult}
          />
        </Container>
      }
      footer={
        <Footer />
      }
    />

  )
}
