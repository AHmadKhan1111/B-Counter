import { useState } from "react";

export default function Count({ count, setCount }) {
  return (
    <>
      <p className="count" onClick={() => {setCount(count + 1)}}>
        {count}
      </p>
    </>
  );
}
