import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserContextProvider } from "./context/UserContext";

import GlobalStyle from "../assets/GlobalStyles";
import Header from "./header/Header";
import Home from "./Home";
import Register from "./Register";

export default function App() {
    return (
        <UserContextProvider>
            <BrowserRouter>
                    <GlobalStyle />
                    <Header />
                    <Routes>
                        <Route path="/signIn" element={<Home />} />
                        <Route path="/signUp" element={<Register />} />
                     
                    </Routes>
            </BrowserRouter>
        </UserContextProvider>
    )
}