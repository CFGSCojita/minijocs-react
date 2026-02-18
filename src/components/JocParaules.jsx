// Importación de componentes y otras funciones de React:
import { useState } from "react";
import { paraules } from "../data/paraules";
import { useNavigate } from "react-router-dom";
import Header from "./Header";

export default function JocParaules() {
    const navigate = useNavigate(); // Declaramos un hook para poder navegar.

    // Declaración de variables de estado:
    const [intentosRestantes, setIntentosRestantes] = useState(3);
    const [puntos, setPuntos] = useState(0);
    const [indicePalabra, setIndicePalabra] = useState(0);
    const [input, setInput] = useState("");
    const [mensajeError, setMensajeError] = useState("");

    // Obtenemos el objeto actual del array (contiene 'paraula' y 'pista'):
    const actual = paraules[indicePalabra];

    // Creamos una función para comprobar el resultado del input y manejar la lógica del juego de palabras:
    function comprovar() {
        // Estructura de control 'if'.
        // Si la longitud del input no coincide con la longitud de la palabra correcta, mostramos error, restamos intento y limpiamos.
        if (input.length > actual.paraula.length) {
            setMensajeError("Massa lletres!");
            setIntentosRestantes(intentosRestantes - 1); // Restamos un intento.
            setInput(""); // Limpiamos el input.

            // Estructura de control 'if'.
            // Si no quedan intentos, terminamos el juego:
            if (intentosRestantes === 1) {
                localStorage.setItem("punts", puntos);
                navigate("/resultat");
            }
            return; // Detenemos aquí, NO avanzamos a la siguiente palabra
        } else if (input.length < actual.paraula.length) {
            setMensajeError("Falten lletres!");
            setIntentosRestantes(intentosRestantes - 1); // Restamos un intento.
            setInput(""); // Limpiamos el input.

            // Estructura de control 'if'.
            // Si no quedan intentos, terminamos el juego:
            if (intentosRestantes === 1) {
                localStorage.setItem("punts", puntos);
                navigate("/resultat");
            }
            return; // Detenemos aquí, NO avanzamos a la siguiente palabra
        }

        // Si llegamos aquí, la longitud es correcta, así que limpiamos cualquier error previo:
        setMensajeError("");

        // Estructura de control 'if'.
        // Comparamos el input con la palabra correcta. Si es correcta, sumamos puntos y avanzamos. Si no, restamos intentos:
        if (input.toUpperCase() === actual.paraula) {
            setPuntos(puntos + 2); // Incrementamos dos puntos al estar correcta.

            // Estructura de control 'if'.
            // Verificamos que haya más palabras disponibles comparando el índice con la longitud. Si existen más palabras, avanzaremos a las siguientes, si no, guardamos
            // la puntuación en un localStorage:
            if (indicePalabra + 1 < paraules.length) {
                setIndicePalabra(indicePalabra + 1); // Incrementamos el índice.
                setIntentosRestantes(3); // Reiniciamos los intentos a 3.
                setInput(""); // Limpiamos el campo de input.
            } else {
                localStorage.setItem("punts", puntos + 2); // Guardamos la puntuación usando localStorage.
                navigate("/resultat"); // Navegamos a la página de resultados.
            }
        } else {
            // La longitud es correcta pero la palabra es incorrecta:
            setMensajeError("Paraula incorrecta!");
            setIntentosRestantes(intentosRestantes - 1); // Decrementamos un intento.

            // Estructura de control 'if'.
            // Si no quedan intentos, guardamos los puntos que el usuario haya conseguido en el localStorage y navegamos a la página de resultados.
            if (intentosRestantes === 1) {
                localStorage.setItem("punts", puntos);
                navigate("/resultat");
            }
            setInput(""); // Limpiamos el campo de input.
        }
    }

    // Creamos una función para manejar el cambio en el input:
    function handleInputCambiar(e) {
        setInput(e.target.value); // Actualizamos el valor del input.
        setMensajeError(""); // Limpiamos el error cada vez que el usuario escribe.
    }

    return (
        <div className="min-h-screen bg-[#0A0A0A]">
            <Header />
            <div className="p-8 text-center text-[#FCFCFC]">
                <h2 className="mt-4 text-3xl">Joc de Paraules</h2>
                <h3 className="underline">Adivina la paraula corresponent!</h3>
                <p className="inline-block border border-[#00CCFF] px-4 py-1 rounded-lg mt-4">
                    Paraula {indicePalabra + 1} de {paraules.length}
                </p>

                {/* Mostramos la pista al usuario: */}
                <p className="mt-8 text-amber-200">Pista: {actual.pista}</p>

                {/* Mostramos las letras ocultas (guiones bajos repetidos según la longitud de la palabra): */}
                <p
                    style={{ fontSize: "2rem", letterSpacing: "0.5rem" }}
                    className="mt-4 mb-4"
                >
                    {"_ ".repeat(actual.paraula.length)}
                </p>

                <div className="flex flex-col sm:flex-row justify-center gap-3 mt-4">
                    <input
                        className="p-3 bg-[#1A1A1A] text-[#FCFCFC] border border-[#FF3366] rounded-lg outline-none"
                        type="text"
                        value={input}
                        onChange={handleInputCambiar}
                        placeholder="Escriu la paraula..."
                    />
                    <button
                        className="px-6 py-3 bg-[#FF3366] text-[#FCFCFC] rounded-lg cursor-pointer hover:bg-[#00CCFF]"
                        onClick={comprovar}
                    >
                        Comprovar Resposta
                    </button>
                </div>

                {/* Mostramos el mensaje de error si existe: */}
                {mensajeError && (
                    <p className="text-[#FF3366] font-bold mt-2">
                        {mensajeError}
                    </p>
                )}

                <p className="mt-4">
                    Intents restants:{" "}
                    <span className="text-[#FF3366] font-bold text-xl">
                        {intentosRestantes}
                    </span>
                </p>

                <p className="inline-block border border-[#FF3366] px-4 py-1 rounded-lg mt-2">
                    Punts:{" "}
                    <span className="text-[#00CCFF] font-bold text-xl">
                        {puntos}
                    </span>
                </p>
            </div>
        </div>
    );
}
