import {
  BsPersonPlus,
  BsCalendarDate,
  BsChatSquareText,
  BsBagPlus
} from 'react-icons/bs'
import { AiOutlineRight } from 'react-icons/ai'
import { CardLight } from "../../components/CardLight"
import { Header } from "../../components/Header/index"
import { Footer } from "../../components/Footer/index"
import { Link } from "react-router-dom"
import {
  Container,
  Card1,
  Card2,
  Card3,
  Card4
} from "./styles"
import TemporaryDrawer from '../../components/Drawer'
import { LayoutDefault } from '../../components/LayoutDefault'

export const Home: React.FC = () => {

  return (
    <>
      <LayoutDefault
        header={
          <Header
            title="Home"
            children={
              <TemporaryDrawer />
            }
          />
        }
        section={
          <Container>
            <Link to={`/participantes`} style={{ textDecoration: "none" }}>
              <Card1>
                <CardLight
                  children={
                    <BsPersonPlus />
                  }
                  next={<AiOutlineRight size={20} />}
                  title={"Participantes"}
                  description="Consulte, adicione, remova e atualize os participantes do evento."
                />
              </Card1>
            </Link>
            <Link to={`/eventos`} style={{ textDecoration: "none" }}>
              <Card2>
                <CardLight
                  children={
                    <BsCalendarDate />
                  }
                  next={<AiOutlineRight size={20} />}
                  title="Eventos"
                  description="Consulte, adicione, remova e atualize os eventos do projeto."
                />
              </Card2>
            </Link>
            <Link to={`/avisos`} style={{ textDecoration: "none" }}>
              <Card3>
                <CardLight
                  children={
                    <BsChatSquareText />
                  }
                  next={<AiOutlineRight size={20} />}
                  title="Avisos"
                  description="Consulte, adicione, remova e atualize os avisos."
                />
              </Card3>
            </Link>
            <Link to={`/produtos`} style={{ textDecoration: "none" }}>
              <Card4>
                <CardLight
                  children={
                    <BsBagPlus />
                  }
                  next={<AiOutlineRight size={20} />}
                  title={"Kits"}
                  description="Consulte, adicione, remova e atualize os produtos."
                />
              </Card4>
            </Link>
          </Container>
        }
        footer={
          <Footer />
        }
      />
    </>
  )
}