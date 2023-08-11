import { useEffect, useState } from "react";
import { getRandomFact } from "../services/fact";

export function useCatFact() {
  const [fact, setFact] = useState();

  function setNewFact() {
    getRandomFact().then((newFact) => setFact(newFact));
  }

  useEffect(() => {
    setNewFact();
  }, []);

  return { fact, setNewFact };
}
