import Die from "./components/Die";
import { useState } from "react";
import { nanoid } from "nanoid";

function App() {
  const [dice, setDice] = useState(generateAllNewDice());

  function generateAllNewDice() {
    return new Array(10).fill(0).map(() => ({
      value: Math.ceil(Math.random() * 6),
      isHeld: true,
      id: nanoid(),
    }));
  }

  const dieElement = dice.map((dieObj) => {
    return <Die key={dieObj.id} value={dieObj.value} isHeld={dieObj.isHeld} />;
  });

  return (
    <>
      <main>
        <div className="dice">{dieElement}</div>
        <button onClick={() => setDice(generateAllNewDice)}>Roll!</button>
      </main>
    </>
  );
}

export default App;
