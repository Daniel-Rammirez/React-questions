import { useEffect, useState } from "react";

export function useCatImage({ fact }) {
  const [catImage, setCatImage] = useState();

  useEffect(() => {
    if (!fact) return;
    const threWordsFact = fact.split(" ", 3).join(" ");
    fetch(`https://cataas.com/cat/says/${threWordsFact}?json=true`)
      .then((response) => response.json())
      .then((data) => setCatImage(data.url));
  }, [fact]);

  return { catImage };
}
