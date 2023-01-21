import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GlobalStyle from "./Components/GlobalStyle"
import Entry from "./Pages/Entry";
import Exit from "./Pages/Exit";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Register from "./Pages/Register";

function App() {
  
  return (
        <Body>
          <GlobalStyle/>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/cadastro" element={<Register />} />
              <Route path="/home" element={<Home />} />
              <Route path="/entrada" element={<Entry />} />
              <Route path="/saida" element={<Exit />} />
            </Routes>
          </BrowserRouter>
        </Body>  
  );
}
export default App;
