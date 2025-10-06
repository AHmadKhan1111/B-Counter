import { useState } from "react";
import Count from "./Count";
import CountButtons from "./CountButtons";
import Title from "./Title";
import ResetButtons from "./ResetButtons";

export default function Card() {
  const [count, setCount] = useState(0);
  return (
    <>
      <div className="card">
        <Title />
        <Count count={count} setCount={setCount} />
        <ResetButtons setCount={setCount} count={count} />
        <CountButtons setCount={setCount} count={count} />
      </div>
    </>
  );
}



