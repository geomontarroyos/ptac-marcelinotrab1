'use client'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "../../global.css"

const Formulario = () => {

  const handlerLogin = async (e) => {
    e.preventDefault();
    toast.success('Alterado com sucesso')
  }
  return (
    <div className="body">
      <h1>Login</h1>
      <form onSubmit={handlerLogin}>

  <div className= "input">
      <input  placeholder='nome' type="nome" className= "inputs" >
        </input>
        </div>

        <div className= "input">
        <input  placeholder='E-mail' type="email" className= "inputs">
        </input>
  </div>

  <div className= "input">
        <input placeholder='Senha'  type='password' className= "inputs" >
        </input>
        </div>

        <button className='botaopvolt'>Entrar</button>
        <button className='botaopvolt'><a className='apvolt' href="/pages/dashboard">Voltar</a></button>
      </form>
      <ToastContainer/>
    </div>
  )
}

export default Formulario;

