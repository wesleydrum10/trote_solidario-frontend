import { Link } from 'react-router-dom';
import {
  CardMenu,
  CardTitle,
  Container,
  Logoff,
  NavDesktop,
  NavMobile,
  TitleCard
} from './styles'
import { CgLogOff } from 'react-icons/cg'

type Props = {
  title: string,
  children: JSX.Element;
};

export const Header: React.FC<Props> = ({ title, children }) => {

  return (
    <Container>
      <NavDesktop>
        <Link to="/inicio" style={{ textDecoration: "none" }}>
          {title === 'Home' ?
            <TitleCard style={{ boxShadow: '-1px 4px 15px var(--gold)' }}>Home</TitleCard>
            :
            <TitleCard>Home</TitleCard>
          }
        </Link>
        <Link to="/participantes" style={{ textDecoration: "none" }}>
          {title === 'Participantes' ?
            <TitleCard style={{ boxShadow: '-1px 4px 15px var(--gold)' }}>Participantes</TitleCard>
            :
            <TitleCard>Participantes</TitleCard>
          }
        </Link>
        <Link to="/eventos" style={{ textDecoration: "none" }}>
          {title === 'Eventos' ?
            <TitleCard style={{ boxShadow: '-1px 4px 15px var(--gold)' }}>Eventos</TitleCard>
            :
            <TitleCard>Eventos</TitleCard>
          }
        </Link>
        <Link to="/avisos" style={{ textDecoration: "none" }}>
          {title === 'Avisos' ?
            <TitleCard style={{ boxShadow: '-1px 4px 15px var(--gold)' }}>Avisos</TitleCard>
            :
            <TitleCard>Avisos</TitleCard>
          }
        </Link>
        <Link to="/produtos" style={{ textDecoration: "none" }}>
          {title === 'Produtos' ?
            <TitleCard style={{ boxShadow: '-1px 4px 15px var(--gold)' }}>Produtos</TitleCard>
            :
            <TitleCard>Produtos</TitleCard>
          }
        </Link>
      </NavDesktop>
      <Logoff>
        <Link to="/" style={{ textDecoration: "none" }}>
          <div>
            <CgLogOff color={'var(--gold)'} />
          </div>
        </Link>
      </Logoff>
      <NavMobile>
        <CardMenu>
          {children}
        </CardMenu>
        <CardTitle>
          {title}
        </CardTitle>
      </NavMobile>
    </Container>
  )
}
