import "./App.css";

const Task = (value) => {
  return <li>{value}</li>;
};


function App() {
  const compromises = ['arrumar a casa', 'limpar a cozinha', 'lavar louca'];

  return (
    <div>
      <h1>Exercicios/10.1</h1>
      <ul>{compromises.map((element) => Task(element))}</ul>
    </div>
  );
}

export default App;
