import { useState, useContext } from 'react';
import { colors } from "../../color/color";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import UserContext from '../../Contexts/UserContext';

function Entrada() {
  const URL = http://localhost:5009/transacoes
  const { user } = useContext(UserContext);
  const navigate = useNavigate();
  const [value, setValue] = useState('');
  const [description, setDescription] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    const body = {
      description,
      type: 'entrada',
      value: parseFloat(value)
    };
    
    const headers = {
      headers: { Authorization: `Bearer ${user.token}` }
    };
    try {
      await axios.post(URL, body, headers);
      alert('Registro efetuado com sucesso!');
      navigate('/home');
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <Title color={colors.text}>
        Nova entrada
      </Title>
      <form>
        <input
          type="number"
          placeholder="Valor"
          value={value}
          onChange={e => setValue(e.target.value)}
        />
      
        <input
          type="text"
          placeholder="Descrição"
          value={description}
          onChange={e => setDescription(e.target.value)}
        />

        <button type="submit" onClick={handleSubmit}>
          Salvar entrada
        </button>
      </form>
    </div>
  );
}

export default Entrada;

const Title = styled.h1`
  font-family: "Raleway", normal;
  font-size: 26px;
  color: ${(props) => props.color};
  width: 168px;
  height: 31px;
  left: 24px;
  top: 25px;
`;
