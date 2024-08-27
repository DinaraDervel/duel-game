import "./App.css";
import { GameField } from "./components/GameField/GameField";

function App() {
  return (
    <>
      <div className="container">
        <h1>Duel Game</h1>
        <GameField width={700} height={500} />
      </div>
    </>
  );
}

export default App;
