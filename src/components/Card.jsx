import { useState } from "react";
import Count from "./Count";
import CountButtons from "./CountButtons";
import Reset from "./reset";
import Title from "./Title";

export default function Card() {
  const [count, setCount] = useState(0);
  return (
    <>
      <div className="card">
        <Title />
        <Count count={count} setCount={setCount} />
        <Reset setCount={setCount} count={count} />
        <CountButtons setCount={setCount} count={count} />
      </div>
    </>
  );
}
