import "./App.css";
import { GameField } from "./components/GameField/GameField";

function App() {
  return (
    <>
      <div className="container">
        <h1>Duel Game</h1>
        <GameField />
      </div>
    </>
  );
}

export default App;
