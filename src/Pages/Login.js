import axios from 'axios';
import { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { color } from "../Color/Color";
import UserContext from '../../contexts/UserContext';

function Login() {
  const body = { email, password };
  const URL = 'http://localhost:5009/login'
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    const body = { email, password };
    try {
      const { data } = await axios.post(URL, body);

      setUser(data);
      navigate('/home');
    } catch (error) {
      console.error('Erro ao fazer o login');
    }
  }

  return (
    <div>
     <Title color={colors.text}>MyWallet</Title>
      <form >
        <input type="text" onChange={e => setEmail(e.target.value)} placeholder="Email" />
        <br />
        <input
          type="password"
          onChange={e => setPassword(e.target.value)}
          placeholder="Senha"
        />
        <br />
        <button type="submit" onClick={handleSubmit}>
          Entrar
        </button>
        <p>
          <Link to="/cadastro" color={colors.text}>
            Primeira vez? Cadastrate-se!
          </Link>
        </p>
      </form>
    </div>
  );
}
export default Login

const Title = styled.h1`
  font-family: "Saira Stencil One", cursive;
  font-size: 32px;
  color: ${(props) => props.color};
  text-align: center;
  margin-top: 159px;
`;

const Link = styled(Link)`
  font-family: "Raleway", sans-serif;
  font-size: 15px;
  font-weight: 700;
  text-decoration: none;
  color: ${(props) => props.color};
`;
