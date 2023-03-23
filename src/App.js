export function App() {
  function mostrarAlerta(e){
    e.preventDefault();
    const text = e.target.word.value;
    alert(`La palabra ingresada fue: ${text}`);
  }

  return (
    <div>
      <form onSubmit={mostrarAlerta}>
        <p>Ingrese un texto: </p>
        <input type="text" name="word"></input>
        <input type="submit" value="enviar"></input>
      </form>
    </div>
  );
}
