import { FormEvent, useState } from 'react';
import { BsFillEyeFill, BsFillEyeSlashFill } from 'react-icons/bs';
import { useHistory } from 'react-router-dom';
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
  cod_usuario: number,
  password: string
}

export function Login() {

  const [seePass, setSeePass] = useState('password')
  const [showPass, setShowPass] = useState(false)
  const [cod, setCod] = useState('')

  const [login, setLogin] = useState<UserSession>({} as UserSession)
  const history = useHistory()

  console.log('Cod_usuario', login.cod_usuario)
  console.log('Password', login.password)

  async function handleChange(e: React.ChangeEvent<HTMLInputElement>) {

    const data = Object.assign(login, {
      [e.target.name]: e.target.value,
    });
    setLogin(data);
  }

  const config = {
    headers: {
      'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2MzU4ODMyOTMsImV4cCI6MTYzNTk2OTY5Mywic3ViIjoiOTcxZmZiYjYtNTk1Yi00NDg3LWEyZWUtMjM2NzlhM2JkMDNiIn0.6B1lKPspEHG-sjBeje2IdLe20v-dVhwJK9x6vIzJHnw'
    }
  }

  function handleLogin() {
    console.log('HandleLogin')
    try {
      api.post<UserSession>(`/session`, login )
        .then(response => {
          if(response.data.cod_usuario === login.cod_usuario) {
            console.log('Data', response.data.cod_usuario)
            console.log('Login', login.cod_usuario)
            history.push('/inicio')
          } 
          else { 
            alert('Dados inválidos!')
          }
        }) 
      history.push('/inicio')
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
                type="number"
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
                  <Span>Mostrar senha</Span>
                </Icons>
                :
                <Icons onClick={hiddenPassword}>
                  <BsFillEyeSlashFill size={15} />
                  <Span>Ocultar senha</Span>
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