import { useCatImage } from "../hooks/useCatImage";

export function Otro() {
  const { catImage } = useCatImage({ fact: "I love cats" });

  return (
    <>
      <img src={catImage} />
    </>
  );
}
