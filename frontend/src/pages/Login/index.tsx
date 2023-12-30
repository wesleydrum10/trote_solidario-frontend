import { useState } from 'react';
import { BsFillEyeFill, BsFillEyeSlashFill } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/trote.png';
import { api } from '../../services/api';
import {
  Body,
  Container,
  Logo,
  Forms,
  Content,
  Label,
  Input,
  Span,
  Button,
  Icons,
  Img
} from '../Login/styles';

interface UserSession {
  cod_usuario: string,
  password: string
}

export function Login() {

  const [seePass, setSeePass] = useState('password')
  const [showPass, setShowPass] = useState(false)

  const [login, setLogin] = useState<UserSession>({} as UserSession)
  const history = useNavigate()

  async function handleChange(e: React.ChangeEvent<HTMLInputElement>) {

    const aux = Object.assign(login, {
      [e.target.name]: e.target.value,
    });
    setLogin(aux);
  }

  function handleLogin() {

    try {
      api.post<String>(`/users/${login.cod_usuario}/${login.password}`)
        .then(response => {
          if (response.data === "Usuário Ok") {
            history('/inicio')
            return response.config
          }
          else {
            alert(response.data)
          }
        })
    }
    catch {
      alert(`Problema ao consultar usuário/senha`)
    }
  }


  function showPassword() {
    setShowPass(true)

    if (!showPass) {
      setSeePass('text')
    }
  }

  function hiddenPassword() {
    setShowPass(false)

    if (showPass) {
      setSeePass('password')
    }
  }

  return (
    <Body>
      <Container>
        <Logo>
          <Img src={logo} alt="Logo" />
        </Logo>
        <Forms >
          <Content>
            <Label>Código</Label>
          </Content>
          <Content>
            <Content>
              <Input
                type={seePass}
                name="cod_usuario"
                maxLength={16}
                onChange={handleChange}
              />
            </Content>
            <Content>
              <Label>Senha</Label>
            </Content>
            <Content>
              <Input
                type={seePass}
                name="password"
                maxLength={8}
                onChange={handleChange}
              />
              {!showPass ?
                <Icons onClick={showPassword}>
                  <BsFillEyeFill size={15} />
                  <Span>Mostrar credenciais</Span>
                </Icons>
                :
                <Icons onClick={hiddenPassword}>
                  <BsFillEyeSlashFill size={15} />
                  <Span>Ocultar credenciais</Span>
                </Icons>
              }
            </Content>
            <Content>
              <Span>Suas credenciais usadas no AVA</Span>
            </Content>
            <Content>
              <Button type="button" onClick={handleLogin}>Login</Button>
            </Content>
          </Content>
        </Forms>
      </Container>
    </Body>
  )
}