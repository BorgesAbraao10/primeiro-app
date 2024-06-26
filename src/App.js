import { useState, useEffect } from "react";

function App(){
  const [input, setInput] = useState('')
  const [tarefas, setTarefas] = useState([
    'Pagar a conta de Luz',
    'Estudar React JS',
    'Estudar JavaScript'
  ]);

  useEffect(() =>{
    const tarefasStorage = localStorage.getItem('@tarefa');
    
    if(tarefasStorage){
      setTarefas(JSON.parse(tarefasStorage))
    }
  }, []);

  useEffect(()=>{
    localStorage.setItem('@tarefa', JSON.stringify(tarefas))
  }, [tarefas]);

  function handleRegister(e) {
    e.preventDefault();

    setTarefas([...tarefas, input]);
    setInput('');

  }

    return(
        <div>
            <h1>Cadastrando Usuario</h1>

            <form onSubmit={handleRegister}>
                <label>Nome da tarefa:</label> <br/>
                <input 
                placeholder="Digite uma tarefa"
                value={input}
                onChange={ (e) => setInput(e.target.value)  }
                /><br />

                <button type="submit">Registrar</button>

            </form>
         
          <br /> <br />
          
          <ul>
            {
              tarefas.map( tarefas => (
                <li key={tarefas}>{tarefas}</li>
              ))
            }
          </ul>

        </div>
    )
}

export default App;