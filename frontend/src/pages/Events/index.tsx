import { useState } from "react"
import { BsCalendarDate } from "react-icons/bs"
import { Button } from "../../components/Button"
import { CardLight } from "../../components/CardLight"
import TemporaryDrawer from "../../components/Drawer"
import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header'
import { LayoutDefault } from "../../components/LayoutDefault"
import {
  Container,
  Card1,
  ButtonLeft,
  ButtonRight,
  ShowButton
} from '../../components/LayoutDefault/styles'
import { ModalEvents } from "../../components/Modal/ModalEvents/index"
import { ModalEventsConsult } from "../../components/Modal/ModalEvents/consult"

export const Events: React.FC = () => {

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
          title="Eventos"
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
                <BsCalendarDate />
              }
              title="Eventos"
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
          <ModalEvents
            isOpen={open}
            onRequestClose={modalClose}
          />
          <ModalEventsConsult
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