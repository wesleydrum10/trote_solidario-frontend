import { useEffect, useState } from "react"
import {
  BsBagPlus,
  BsChatSquareText, BsPersonPlus,
} from "react-icons/bs"
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
} from '../../components/LayoutDefault/styles';
import { ModalProducts } from "../../components/Modal/ModalProducts/index"
import { ModalConsultProducts } from "../../components/Modal/ModalProducts/consult"

export const Items: React.FC = () => {

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
            title="Produtos"
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
                  <BsBagPlus />
                }
                title="Produtos"
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
            <ModalProducts
              isOpen={open}
              onRequestClose={modalClose}
            />
            <ModalConsultProducts
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