
// Importación de componentes y otras funciones de React:
import { useState } from "react"
import { paraules } from '../data/paraules'
import { useNavigate } from "react-router-dom";

export default function JocParaules() {

  const navigate = useNavigate(); // Declaramos un hook para poder navegar.

  // Declaración de variables de estado:
  const [intentsRestants, setIntentosRestantes] = useState(3);
  const [punts, setPunts] = useState(0);
  const [indexParaula, setIndexParaula] = useState(0);
  const [input, setInput] = useState('');

  // Creamos una función para comprobar el resultado del input y manejar la lógica del juego de palabras:
  function comprovar() {
    // Estructura de control 'if'.
    // Si la longitud del input no coincide con la longitud de la palabra correcta, no hacemos nada.
    if (input.length !== paraules[indexParaula].length) {
      return;
    }

    // Estructura de control 'if'.
    // Si la longitud es válida (pueden ser minúsculas o mayúsculas), compararemos el input convertido con la palabra correcta, cuando la respuesta es correcta,
    // sumamos puntos. En caso contrario, restamos intentos:
    if (input.toUpperCase() === paraules[indexParaula]) {
      setPunts(punts + 2); // Incrementamos dos puntos al estar correcta.
      
      // Estructura de control 'if'.
      // Verificamos que haya más palabras disponibles comparando el índice con la longitud. Si existen más palabras, avanzaremos a las siguientes, si no, guardamos
      // la puntuación en un localStorage:
      if (indexParaula + 1 < paraules.length) {
        setIndexParaula(indexParaula + 1); // Incrementamos el índice.
        setIntentosRestantes(3); // Reiniciamos los intentos a 3.
        setInput(''); // Limpiamos el campo de input.
      } else {
        localStorage.setItem('punts', punts + 2); // Guardamos la puntuación usando localStorage.
        navigate('/resultat'); // Navegamos a la página de resultados.
      }
    } else {
      setIntentosRestantes(intentsRestants - 1); // Decrementamos un intento.

      // Estructura de control 'if'.
      // Si no quedan intentos, guardamos los puntos que el usuario haya conseguido en el localStorage y navegamos a la página de resultados.
      if (intentsRestants === 1) {
        localStorage.setItem('punts', punts);
        navigate('/resultat');
      }
      setInput(''); // Limpiamos el campo de input.
    } 
  }

  return (
    <div>
      <p>{'_ ' .repeat(paraules[indexParaula].length)}</p>
      <input 
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)} 
      />
      <button onClick={comprovar}>Comprovar Resposta</button>
      <p>Intents restants: {intentsRestants}</p>
      <p>Punts: {punts}</p>
    </div>
  )
}