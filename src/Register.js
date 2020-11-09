//import React, {useState} from 'react'
import logo from './logo.jpg';
import styled from 'styled-components'
import { Link } from 'react-router-dom';
import './Register.css';

///////////////////////////////////////////////////////////////////////////////
/////////////////////////////// STYLES ///////////////////////////////////////

const Container= styled.div`
    text-align: left;
    margin-top: 0vh;
    width: 100%;
    margin: 0;
    padding:0;
    position:relative;
    display: flex;
`;


const Half__50 = styled.div`
    align-items:center;
    text-align: center;
    margin-top: 0vh;
    width: 49%;
    margin: 0;
    padding:0;
    height: 100vh;
    background: #f7f7f7;
`;

const FormRegister = styled.form`
    text-align: right;
    width: 45%;
    border-radius: 5px;
    margin-left: 20%;
    padding-top:30%;
`;

const Input = styled.input`
    color:blue;
    border-top: 0;
    border-left: 0;
    border-right:0;
    background:#f7f7f7;
    border-color:#90A4AE;
    width:100%;
    color: #90A4AE;
    font-size:20px;
    margin-left: 0;
`;

const Radio__label = styled.label`
 // background: ${props => props.primary ? 'greenyellow' : 'firebrick'};
 color: #90A4AE;
  &:hover {
    color: black;
//opacity: 0.7;
    cursor: pointer;
  }
`;

const Boton = styled.button`
    padding: 5px 15px;
    border: none;
    background-color: #607D8B;
    color: #90A4AE;
    width: 100%;
    height: 8vh;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    font-size:16px;
    &:hover{
        box-shadow: 0 5px 10px 0 #333;
        background-color: #90A4AE;
        border-radius: 5px;
        color: white;
        font-size:16px;
    }
`;

const Paragraph = styled.p`
    font-size: 10px;
    color: #90A4AE;
    background:#f7f7f7;
`;


const Image = styled.img`
    height: 400px;
    pointer-events: none;
    margin-left: 5%;
    padding-top:10%;
`;

///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////


function Register ({
    email, 
    password, 
    user, 
    createUser,
    handleInputChange
}){ 
    return (
    <Container>    
        <Half__50>
            <FormRegister onSubmit={createUser}> 
                <div onChange={handleInputChange}>
                <input 
                    type='radio'
                    id='admin'
                    name='user'
                    value={user}
                    required
                />
                <Radio__label htmlFor='admin'>     Inversionista</Radio__label>
                <br/>
                <input 
                    type='radio'
                    id='resident'
                    name='user'
                    value={user}
                />
                <Radio__label htmlFor='resident'>    Gestor de Proyectos</Radio__label>
                </div>

                <label htmlFor='email'></label>
                <br/>
                <Input
                    type='email' 
                    id='email' 
                    name='email'
                    value={email}
                    onChange={handleInputChange}
                    placeholder='   email'
                    required
                />

                <br/>
                <label htmlFor='password'></label>
                <br/>
                <Input
                    type='password'
                    id='password'
                    name='password'
                    value={password}
                    onChange={handleInputChange}
                    placeholder='   Password'
                    required
                />

                <br/>
                <br/>
                <Boton>Registrarme</Boton>
                <Paragraph>¿Ya tienes una cuenta? <Link to="/login" className="Register-link">Ingresar</Link></Paragraph>
            </FormRegister>
        </Half__50>
        <Image src={logo} className="App-logo-r" alt="logo" />
    </Container> 
     )
    
} 
export default Register
