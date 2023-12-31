'use client'
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import "../../global.css"

const Formulario = () => {

  const handlerLogin = async (e) => { // representa o evento de envio do formulário e evita que a pag seja recarregada.
    e.preventDefault();
    toast.success('registrado com sucesso')  
  }
  return (
    <div className="body">
      <h1>Página de registro</h1>
      <form onSubmit={handlerLogin }>   

  <div className= "sla">
      <input  placeholder='nome' type="nome" className= "inputs" >
        </input>
        </div>

        <div className= "sla">
        <input  placeholder='E-mail' type="email" className= "inputs">
        </input>
  </div>

  <div className= "sla">
        <input placeholder='Senha'  type='password' className= "inputs" >
        </input>
        </div>

        <button className='entrar'>Registrar</button>
        <button className='voltar'><a className='apvolt' href="/pages/dashboard">Voltar</a></button>
      </form>
      <ToastContainer/>
    </div>
  )
}

export default Formulario; 

