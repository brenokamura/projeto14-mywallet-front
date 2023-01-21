import axios from 'axios';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from "styled-components";
import { color } from "./Color/Color";

function Cadastro() {
  const body = { name, email, password, confirmPassword };
  const URL = 'http://localhost:5009/cadastro'
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await axios.post(URL, body);

      navigate('/');
    } catch (error) {
      console.error('Erro ao cadastrar o usuário');
    }
  }                                                                                                                                                                                                                                                                                                                                                                                    

  return (
    <Body color={color.body}>
      <Title color={color.text}>MyWallet</Title>
      <form submit={createAccount} isDisabled={disabled}>
        <input data-test="name" type="text" onChange={e => setName(e.target.value)} placeholder="Nome" />
        <br />
        <input data-test="email" type="text" onChange={e => setEmail(e.target.value)} placeholder="Email" />
        <br />
        <input data-test="password"
          type="password"
          onChange={e => setPassword(e.target.value)}
          placeholder="Senha"
        />
        <br />
        <input ddata-test="confirm-password"
          type="password"
          onChange={e => setConfirmPassword(e.target.value)}
          placeholder="Confirme a Senha"
        />
        <button data-test="sign-up-submit" type="submit" onClick={handleSubmit}>
          Cadastrar
        </button>
        <p>
          <Link to="/" color={color.text}>
            Já tem uma conta? Entre agora!
          </Link>
        </p>
      </form>
    </Body>
  );
}
export default Cadastro;

const Body = styled.div`
  background-color: ${(props) => props.color};
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
`;

const Title = styled.h1`
  font-family: "Saira Stencil One", cursive;
  font-size: 32px;
  color: ${(props) => props.color};
  text-align: center;
  margin-top: 159px;
`;

const LoginLink = styled(Link)`
  font-family: "Raleway", sans-serif;
  font-weight: 700;
  font-size: 15px;
  text-decoration: none;
  color: ${(props) => props.color};
`;
