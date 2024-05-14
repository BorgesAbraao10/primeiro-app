import { useState } from 'react';


function App(){
  const [aluno, setAluno] = useState('Sujeito Programador')

  function mudarNome(nome) {
    setAluno(nome)
  }

  return(
    <div>
      <h1>Componente App</h1> <br/>
      <h2>Olá: {aluno} </h2>
      <button onClick={ ()=> mudarNome ('Abraão Borges') }>
        Mudar Nome
      </button>
      <br />
      <br />
      
    
    </div>
    
  );
}

export default App;


