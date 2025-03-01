import Die from "./components/Die";
import { useState, useEffect } from "react";

function App() {
  const [dice, setDice] = useState(generateAllNewDice());

  function generateAllNewDice() {
    const diceNumbers = [];

    for (let i = 0; i < 10; i++) {
      diceNumbers[i] = Math.round(Math.random() * (6 - 1) + 1);
    }
    return diceNumbers;
  }

  const dieElement = dice.map((value) => {
    return <Die value={value} />;
  });

  return (
    <>
      <main>
        <div className="dice">{dieElement}</div>
      </main>
    </>
  );
}

export default App;
