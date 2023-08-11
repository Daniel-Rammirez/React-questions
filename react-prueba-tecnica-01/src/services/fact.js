const RANDOM_FACT_API = "https://catfact.ninja/fact";

export function getRandomFact() {
  return fetch(RANDOM_FACT_API)
    .then((response) => response.json())
    .then((data) => {
      const { fact } = data;
      return fact;
    });
}
