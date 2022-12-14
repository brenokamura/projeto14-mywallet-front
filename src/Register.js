import { Link, useNavigate } from "react-router-dom"
import { useState, useEffect, useContext } from "react";
import { ThreeDots } from "react-loader-spinner";

import axios from "axios";
import styled from "styled-components";
import logo from "../assets/trackit_logo.png"
import UserContext from "./context/UserContext";




export default function Register() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [userName, setUserName] = useState('')
    const [picture, setPicture] = useState('')
    const [interact, setInteract] = useState(true)

    function userRegister(e) {
        e.preventDefault();
        e.target.blur();
        const registry = { email: email, name: userName, image: picture, password: password }
        setInteract(false)


    function toggleInputs() {
        setInteract(true);
        setEmail('');
        setPassword('');
        setUserName('');
        setPicture('');
    }

    const IsLoading = (() => {
        if(interact) {
            return (<Button type={'submit'} interact={interact}>Cadastrar</Button>)
        }
        return <Button><ThreeDots height="15px" width="60px" color="#FFFFFF" /></Button>
    })

    return (
        <Container>
            <Logo src={logo} alt="Logotipo da aplicação" />
            <InputWrapper onSubmit={userRegister}>
                <input data-identifier="input-email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type={'email'}
                    placeholder='email'
                    required
                />
                <input data-identifier="input-password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type={'password'}
                    placeholder='senha'
                    required
                />
                <input data-identifier="input-name"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    type={'text'}
                    placeholder='nome'
                    required
                />
                <input data-identifier="input-photo"
                    value={picture}
                    onChange={(e) => setPicture(e.target.value)}
                    type={'text'}
                    placeholder='foto'
                    pattern={"^https?://(?:[a-z-]+.)+[a-z]{2,6}(?:/[^/#?]+)+.(?:jpe?g|gif|png)$"}
                    title={"Link de imagem terminado com formato de imagem (jpg, png, etc.)"}
                    required
                />
                <IsLoading />
            </InputWrapper>
            <Text><Link to="/" data-identifier="back-to-login-action">Já tem uma conta? Faça login</Link></Text>
        </Container>)
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    margin-top: 12vh;
`

const Logo = styled.img`
`

const InputWrapper = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 3vh 5vh;
    box-sizing: border-box;
    input {
        display: flex;
        pointer-events: ${ ({ interact }) => !interact ? 'auto' : 'none' };
        background-color: ${ ({ interact }) => !interact ? '#FFFFFF' : '#F2F2F2' };
        color: ${ ({ interact }) => !interact ? '#666666' : '#AFAFAF' };
        width: 100%;
        height: 40px;
        margin: 5px 0;
        padding: 4px 12px;
        border: 1px solid #D4D4D4;
        border-radius: 5px;
        box-sizing: border-box;
        &::placeholder {
            font-family: 'Lexend Deca';
            font-size: 20px;
            color: #DBDBDB
        }
    }
`

const Button = styled.button`
	font-family: 'Lexend Deca';
    font-size: 21px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    background-color: ${ ({ interact }) => interact ? '#52B6FF' : '#52B6FF70' }; ;
    color: #FFFFFF;
    width: 100%;
    height: 40px;
    margin: 5px 0;
    padding: 4px 16px;
    border: 1px solid #D4D4D4;
    border-radius: 5px;
    box-sizing: border-box;
`

const Text = styled.p`
    font-size: 14px;
    color: #52B6FF;
    text-decoration: underline;
    a {
        font-size: 14px;
        color: #52B6FF;
        text-decoration: underline;
    }
`