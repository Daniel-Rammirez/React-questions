import { useEffect, useState } from "react";
import { getRandomFact } from "./services/fact";
import { useCatImage } from "./hooks/useCatImage";

export function App() {
  const [fact, setFact] = useState();

  const PREFIX_URL = "https://cataas.com";

  function setNewFact() {
    getRandomFact().then((newFact) => setFact(newFact));
  }

  useEffect(() => {
    setNewFact();
  }, []);

  const { catImage } = useCatImage({ fact });

  return (
    <main>
      <h1>App for cat lovers</h1>
      <button onClick={setNewFact}>Get new fact</button>
      {fact && <p>{fact}</p>}
      {catImage && (
        <img
          src={`${PREFIX_URL}${catImage}`}
          alt={`Image extracted using first three words of ${fact}`}
        />
      )}
    </main>
  );
}
