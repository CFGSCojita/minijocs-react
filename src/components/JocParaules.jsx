// Importación de componentes y otras funciones de React:
import { useState } from "react"
import { paraules } from '../data/paraules'
import { useNavigate } from "react-router-dom"
import Header from "./Header"

export default function JocParaules() {

  const navigate = useNavigate(); // Declaramos un hook para poder navegar.

  // Declaración de variables de estado:
  const [intentosRestantes, setIntentosRestantes] = useState(3);
  const [puntos, setPuntos] = useState(0);
  const [indicePalabra, setIndicePalabra] = useState(0);
  const [input, setInput] = useState('');

  // Obtenemos el objeto actual del array (contiene 'paraula' y 'pista'):
  const actual = paraules[indicePalabra];

  // Creamos una función para comprobar el resultado del input y manejar la lógica del juego de palabras:
  function comprovar() {
    // Estructura de control 'if'.
    // Si la longitud del input no coincide con la longitud de la palabra correcta, no hacemos nada.
    if (input.length !== actual.paraula.length) {
      return;
    }

    // Estructura de control 'if'.
    // Si la longitud es válida (pueden ser minúsculas o mayúsculas), compararemos el input convertido con la palabra correcta, cuando la respuesta es correcta,
    // sumamos puntos. En caso contrario, restamos intentos:
    if (input.toUpperCase() === actual.paraula) {
      setPuntos(puntos + 2); // Incrementamos dos puntos al estar correcta.
      
      // Estructura de control 'if'.
      // Verificamos que haya más palabras disponibles comparando el índice con la longitud. Si existen más palabras, avanzaremos a las siguientes, si no, guardamos
      // la puntuación en un localStorage:
      if (indicePalabra + 1 < paraules.length) {
        setIndicePalabra(indicePalabra + 1); // Incrementamos el índice.
        setIntentosRestantes(3); // Reiniciamos los intentos a 3.
        setInput(''); // Limpiamos el campo de input.
      } else {
        localStorage.setItem('punts', puntos + 2); // Guardamos la puntuación usando localStorage.
        navigate('/resultat'); // Navegamos a la página de resultados.
      }
    } else {
      setIntentosRestantes(intentosRestantes - 1); // Decrementamos un intento.

      // Estructura de control 'if'.
      // Si no quedan intentos, guardamos los puntos que el usuario haya conseguido en el localStorage y navegamos a la página de resultados.
      if (intentosRestantes === 1) {
        localStorage.setItem('punts', puntos);
        navigate('/resultat');
      }
      setInput(''); // Limpiamos el campo de input.
    } 
  }

  return (
    <div>
      <Header />
      <h2>Joc de Paraules</h2>
      
      {/* Mostramos la pista al usuario: */}
      <p>Pista: {actual.pista}</p>
      
      {/* Mostramos las letras ocultas (guiones bajos repetidos según la longitud de la palabra): */}
      <p style={{ fontSize: '2rem', letterSpacing: '0.5rem' }}>
        {'_ '.repeat(actual.paraula.length)}
      </p>
      
      <input 
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)} 
        placeholder="Escriu la paraula..."
      />
      <button onClick={comprovar}>Comprovar Resposta</button>
      
      <p>Intents restants: {intentosRestantes}</p>
      <p>Punts: {puntos}</p>
    </div>
  )
}