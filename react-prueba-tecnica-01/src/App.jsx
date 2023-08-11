import { useCatImage } from "./hooks/useCatImage";
import { useCatFact } from "./hooks/useCatFact";
// import { Otro } from "./Components/Otro";
import "./App.css";

export function App() {
  const { fact, setNewFact } = useCatFact();
  const { catImage } = useCatImage({ fact });

  return (
    <main>
      <h1>App for cat lovers</h1>
      <button onClick={setNewFact}>Get new fact</button>
      <section>
        {fact && <p>{fact}</p>}
        {catImage && (
          <img
            src={`${catImage}`}
            alt={`Image extracted using first three words of ${fact}`}
          />
        )}
      </section>
    </main>
  );
}
