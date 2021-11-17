import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { BsBagPlus, BsCalendarDate, BsChatSquareText, BsHouseFill, BsPersonPlus } from 'react-icons/bs';
import { GiHamburgerMenu } from 'react-icons/gi';
import { Link } from 'react-router-dom';
import { CgLogOff } from 'react-icons/cg';

type Anchor = 'top' | 'left' | 'bottom' | 'right';

export default function TemporaryDrawer() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
      (event: React.KeyboardEvent | React.MouseEvent) => {
        if (
          event.type === 'keydown' &&
          ((event as React.KeyboardEvent).key === 'Tab' ||
            (event as React.KeyboardEvent).key === 'Shift')
        ) {
          return;
        }

        setState({ ...state, [anchor]: open });
      };

  const list = (anchor: Anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
      style={{
        background: 'var(--backgroundDark)',
        height: '100%'
      }}
    >
      <List>
        <Link to="/inicio" style={{ textDecoration: 'none', color: "var(--gold)" }}>
          <ListItem button >
            <ListItemIcon>
              <BsHouseFill color="var(--gold)" fontSize={20} />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItem>
        </Link>
        <Link to="/participantes" style={{ textDecoration: 'none', color: "var(--gold)" }}>
          <ListItem button>
            <ListItemIcon>
              <BsPersonPlus color="var(--gold)" fontSize={20} />
            </ListItemIcon>
            <ListItemText primary="Participantes" />
          </ListItem>
        </Link>
        <Link to="/eventos" style={{ textDecoration: 'none', color: "var(--gold)" }}>
          <ListItem button>
            <ListItemIcon>
              <BsCalendarDate color="var(--gold)" fontSize={20} />
            </ListItemIcon>
            <ListItemText primary="Eventos" />
          </ListItem>
        </Link>
        <Link to="/avisos" style={{ textDecoration: 'none', color: "var(--gold)" }}>
          <ListItem button>
            <ListItemIcon>
              <BsChatSquareText color="var(--gold)" fontSize={20} />
            </ListItemIcon>
            <ListItemText primary="Avisos" />
          </ListItem>
        </Link>
        <Link to="/produtos" style={{ textDecoration: 'none', color: "var(--gold)" }}>
          <ListItem button>
            <ListItemIcon>
              <BsBagPlus color="var(--gold)" fontSize={20} />
            </ListItemIcon>
            <ListItemText primary="Produtos" />
          </ListItem>
        </Link>
        <Link to="/" style={{ textDecoration: 'none', color: "var(--gold)" }}>
          <ListItem button>
            <ListItemIcon>
              <CgLogOff color={'var(--gold)'} fontSize={20}/>
            </ListItemIcon>
            <ListItemText primary="Sair" />
          </ListItem>
        </Link>
      </List>
    </Box>
  );

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Button onClick={toggleDrawer('right', true)}>
          <GiHamburgerMenu color="var(--backgroundLight)" size={20} />
        </Button>
        <Drawer
          anchor="right"
          open={state["right"]}
          onClose={toggleDrawer("right", false)}
        >
          {list('right')}
        </Drawer>
      </div>
    </div>
  );
}
