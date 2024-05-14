import { useState } from "react";

function App(){
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [idade, setIdade] = useState('0');

  function handleRegister() {
    alert('TESTE')
  }


    return(
        <div>
            <h1>Cadastrando Usuario</h1>

            <form onSubmit={handleRegister}>
                <label>Nome:</label> <br/>
                <input 
                placeholder="Digite seu nome"
                value={nome}
                onChange={ (e) => setNome(e.target.value)  }/><br />

                <label>E-mail:</label> <br/>
                <input 
                placeholder="Digite seu e-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}/><br />

                <label>Idade:</label> <br/>
                <input placeholder="Digite sua idade"
                value={idade}
                onChange={(e) => setIdade(e.target.value)}/><br /> <br />

                <button type="Submit">Registrar</button>

            </form>
         
          <br /> <br />
          
          <div>
            <span> Bem vindo: Mateus </span> <br/>
            <span> Idade: 25 anos </span> <br/>
            <span> E-mail: test@test.com </span> <br/>
          </div>

        </div>
    )
}

export default App;