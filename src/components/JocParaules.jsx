
// Importación de componentes y otras funciones de React:
import { useState } from "react"
import { paraules } from '../data/paraules'
import { useNavigate } from "react-router-dom";

export default function JocParaules() {

  const navigate = useNavigate(); // Declaramos un hook para poder navegar.

  // Declaración de variables de estado:
  const [intentosRestantes, setIntentosRestantes] = useState(3);
  const [puntos, setPuntos] = useState(0);
  const [indicePalabra, setIndicePalabra] = useState(0);
  const [input, setInput] = useState('');

  // Creamos una función para comprobar el resultado
  function comprovar() {
    if (input.length !== paraules[indicePalabra].length) {
      return;
    }
    if (input.toUpperCase() === paraules[indicePalabra]) {
      setPuntos(puntos + 2);
      if (indicePalabra + 1 < paraules.length) {
        setIndicePalabra(indicePalabra + 1);
        setIntentosRestantes(3);
        setInput('');
      } else {
        localStorage.setItem('punts', puntos + 2);
        navigate('/resultat');
      }
    } else {
      setIntentosRestantes(intentosRestantes - 1);
      if (intentosRestantes === 1) {
        localStorage.setItem('punts', puntos);
        navigate('/resultat');
      }
      setInput('');
    } 
  }

  return (
    <div>
      <p>{'_ ' .repeat(paraules[indicePalabra].length)}</p>
      <input 
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)} 
      />
      <button onClick={comprovar}>Comprovar Resposta</button>
      <p>Intents restants: {intentosRestantes}</p>
      <p>Punts: {puntos}</p>
    </div>
  )
}