// Importaciones necesarias:
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { preguntes } from "../data/preguntes";
import "./Questionari.scss";
import Header from "./Header";

export default function Questionari() {
    const navigate = useNavigate(); // Creamos el hook para navegar entre rutas.

    // Declaración de variables de estado:
    const [indexPregunta, setIndexPregunta] = useState(0);
    const [punts, setPunts] = useState(0);

    const preguntaActual = preguntes[indexPregunta]; // Obtenemos la pregunta actual a mostrar según el índice.

    // Creamos una función para seleccionar una opción y actualizar los puntos y el índice de la pregunta:
    function seleccionarOpcio(opcio) {
        // Declaramos una variable para calcular los nuevos puntos, sumando 2 si la opción seleccionada es la correcta:
        const nousPunts = opcio == preguntaActual.resposta ? punts + 2 : punts;

        // Estructura de control 'if'.
        // Si el índice de la pregunta actual más uno es menor que la longitud total de preguntas, actualizamos los puntos y el índice para mostrar la siguiente pregunta.
        // En caso contrario, guardamos los puntos en el almacenamiento local y navegamos a la página de resultados.
        if (indexPregunta + 1 < preguntes.length) {
            setPunts(nousPunts); // Actualizamos los puntos.
            setIndexPregunta(indexPregunta + 1); // Actualizamos el índice para mostrar la siguiente pregunta.
        } else {
            localStorage.setItem("punts", nousPunts); // Guardamos los puntos en el almacenamiento local para que puedan ser accedidos en la página de resultados.
            navigate("/resultat"); // Navegamos a la página de resultados utilizando el hook 'useNavigate'.
        }
    }

    return (
        <div className="questionari-contenedor">
            <Header />
            <div className="questionari-main">
                <h2>Questionari de Preguntes</h2>
                <h3>Tria una resposta correcta!</h3>
                <p className="badge-pregunta">Pregunta {indexPregunta + 1} de {preguntes.length}</p>
                <h2>{preguntaActual.pregunta}</h2>

                <div className="opcions-contenedor">
                    {preguntaActual.opcions.map((opcio) => (
                        <button
                            className="opcio-btn"
                            key={opcio}
                            onClick={() => seleccionarOpcio(opcio)}
                        >
                            {opcio}
                        </button>
                    ))}
                </div>

                <p className="badge-punts">Punts: <span>{punts}</span></p>
            </div>
        </div>
    );
}
