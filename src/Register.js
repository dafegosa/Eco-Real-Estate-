//import React, {useState} from 'react'
import styled from 'styled-components'

///////////////////////////////////////////////////////////////////////////////
/////////////////////////////// STYLES ///////////////////////////////////////
const Contenedor = styled.form`
    text-align: center;
    margin-top: 0vh;
    width: 45%;
    margin-left: 0%;
    box-shadow: 0 5px 10px 0 white;
    border-radius: 5px;
`;

const Input = styled.input`
    color:blue;
    border-top: 0;
    border-left: 0;
    border-right:0;
    background:#282c34;
    border-color:#90A4AE;
    width:60%;
    color: #90A4AE;
    font-size:20px;
`;

const Radio__label = styled.label`
 // background: ${props => props.primary ? 'greenyellow' : 'firebrick'};
 color: #90A4AE;
  &:hover {
    color: white;
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
        <Contenedor onSubmit={createUser}> 
            <div onChange={handleInputChange}>
            <input 
                type='radio'
                id='admin'
                name='user'
                value={user}
                required
            />
            <Radio__label htmlFor='admin'>Administrador</Radio__label>

            <input 
                type='radio'
                id='resident'
                name='user'
                value={user}
            />
            <Radio__label htmlFor='resident'>Residente</Radio__label>
            </div>

            <label htmlFor='email'></label>
            <br/>
            <Input
                type='email' 
                id='email' 
                name='email'
                value={email}
                onChange={handleInputChange}
                placeholder='email'
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
                placeholder='Password'
                required
            />

            <br/>
            <br/>
            <Boton>Registrarme</Boton>
        </Contenedor>
     )
    
} 
export default Register
