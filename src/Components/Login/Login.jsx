import { useState } from "react";
import "./Login.css";

const Login = () => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  //função para fazer o envio do formulário - (e) evento
  const handleSubmit = (event) => {
    event.preventDefault();

    //depois de captar os dados do formulario fazer com que ele envie esses dados para o back-end/servidor
    alert("Enviando os dados:" + username + " - " + password);
    //aqui eu poderia ter validações mais complexas
  }

  return (
    <div className='container'>
      <form onSubmit={handleSubmit}>
        <h1>Acesse o Sistema</h1>

        <div className="input-field">
          <label htmlFor="email">Email</label>
          <input 
            id="email"
            type="email"
            placeholder='exemplo@mail.com'
            required
            onChange={(e) => setUsername(e.target.value)} />
        </div>

        <div className="input-field">
          <label htmlFor="password">Senha</label>
          <input 
          id="password"
          type="password" 
          placeholder="Sua senha" 
          onChange={(e) => setPassword(e.target.value)} />
        </div>

        <button type="submit">Entrar</button>

      </form>
    </div>
  )
}

export default Login
