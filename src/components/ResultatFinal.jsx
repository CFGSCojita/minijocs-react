
import Header from "./Header"

export default function ResultatFinal() {

  // Declaramos una variable donde almacenamos los puntos obtenidos, recuperándolos del localStorage. Si no hay puntos almacenados, asignaremos un valor de 0.
  const punts = Number(localStorage.getItem('punts')) || 0

  // Creamos una función para generar un mensaje personalizado según la cantidad de puntos obtenidos:
  function getMissatge() {
    // Estructura de control 'if'.
    // Si los puntos son 9 o más, se muestra un mensaje de felicitación y se indica que se aplicará un descuento del 10% en la próxima compra.
    // Si los puntos son entre 5 y 8, se muestra un mensaje de buen resultado y se indica que se aplicará un descuento del 5% en la próxima compra.
    // Si los puntos son menos de 5, se muestra un mensaje de ánimo para mejorar y se invita a intentar nuevamente en el futuro para obtener un descuento.
    if (punts >= 9) {
      return "Excel·lent! S'aplicará un descompte del 10% a la teva pròxima compra!"
    } else if (punts >= 5) {
      return "Bon resultat! S'aplicará un descompte del 5% a la teva pròxima compra."
    } else {
      return "Millora molt! Torna-ho a intentar en el futur per obtendre un descompte."
    }
  }

  return (
    <div>
      <Header />
      <h1>Puntuació</h1>
      <h2>Taula de premis:</h2>
      <table>
        <tr>
          <th>Punts</th>
          <th>Premis</th>
        </tr>
        <tr>
          <td>De 0 a 4</td>
          <td>No hi ha premi</td>
        </tr>
        <tr>
          <td>De 5 a 8</td>
          <td>Descompte del 5%</td>
        </tr>
        <tr>
          <td>De 9 a 10</td>
          <td>Descompte del 10%</td>
        </tr>
      </table>
      <p>Punts obtinguts: {punts}</p>
      <p>{getMissatge()}</p>
    </div>
  )
}