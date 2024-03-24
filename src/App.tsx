import { useEffect, useState } from "react";

function App() {
  const [ count, setCount ] = useState<number>(0);

  useEffect(()=>{

    fetch('https://api.kanye.rest/')
      .then((res)=> res.json())
      .then((res)=> setCount(res.length))
  },[])

  return (
    <>
      <h1>Hello World</h1>
      <h1>{count}</h1>
      <button onClick={()=> setCount(count+1)}>Increment</button>
    </>
  );
};

export default App
