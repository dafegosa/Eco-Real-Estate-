//import React, {useState} from 'react'
import React, {Component} from 'react'
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
let users = []
class Login extends Component{
    state = {
        email:'',
        password:'',
        user:'',
    }

    handleInputChange = e =>{
        const {name, value, id, type} = e.target
        this.setState({[name]: type === 'radio' ? id : value})
    }   

    createUser = e =>{
        const {email, password, user} = this.state
        const newUser = {
            email,
            password,
            user
        }
        users = users.concat(newUser)
        this.setState({message: '¡Usuario creado!'})
        console.log(users);
        e.preventDefault()
    }
    render(){
        const {email, password, user} = this.state
        return (
            <Contenedor onSubmit={this.createUser}> 
                <div onChange={this.handleInputChange}>
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
                    onChange={this.handleInputChange}
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
                    onChange={this.handleInputChange}
                    placeholder='Password'
                    required
                />

                <br/>
                <br/>
                <Boton>Ingresar</Boton>
            </Contenedor>
        )
    }
} 
// const Registro = () => {

//     const [state, setState] = useState({email:'', password:'', user:''})
    
//     const handleInputChange = e =>{
//         let {name, value, id, type} = e.target
//         setState({...state, [name]: type === 'radio' ? id : value}) 
//     }

//     const createUser = e =>{
//         const {email, password, user} = state
//         const newUser = {
//             email,
//             password,
//             user
//         }
//         users = users.concat(newUser)
//         console.log(users)
//         e.preventDefault()
//     }
    
//     const {email, password, user} = state
//     return (
//         <form onSubmit={createUser}> 
//             <div onChange={handleInputChange}>
//             <input 
//                 type='radio'
//                 id='admin'
//                 name='user'
//                 value={user}
//             />
//             <label htmlFor='admin'>Administrador</label>

//             <input 
//                 type='radio'
//                 id='resident'
//                 name='user'
//                 value={user}
//             />
//             <label htmlFor='resident'>Residente</label>
//             </div>

//             <br/>
//             <label htmlFor='email'>Email</label>
//             <br/>
//             <input
//                 type='email' 
//                 id='email' 
//                 name='email'
//                 value={email}
//                 onChange={handleInputChange}
//             />

//             <br/>
//             <label htmlFor='password'>Password</label>
//             <br/>
//             <input
//                 type='password'
//                 id='password'
//                 name='password'
//                 value={password}
//                 onChange={handleInputChange}
//             />

//             <br/>
//             <button>Registrarme</button>
//         </form>
//     )
// }




export default Login
