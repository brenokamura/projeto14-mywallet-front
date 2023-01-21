import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GlobalStyle from "./Components/GlobalStyle"
import Entry from "./Pages/Entry";
import Exit from "./Pages/Exit";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Register from "./Pages/Register/Register";
import { UserContext } from "./contexts/UserContext";
import { useState } from "react";
import styled from "styled-components";

function App() {

  const [user, setUser] = useState(null);
  return (
        <Body>
          <GlobalStyle/>
          <UserContext.Provider value={{ user, setUser }}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/cadastro" element={<Register />} />
              <Route path="/home" element={<Home />} />
              <Route path="/entrada" element={<Entry />} />
              <Route path="/saida" element={<Exit />} />
            </Routes>
          </BrowserRouter>
          </UserContext.Provider>
        </Body>  
  );
}
export default App;


const Body = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  background-color: #8C11BE;
  position: relative;
;
`;
