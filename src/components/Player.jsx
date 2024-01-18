import { useRef } from "react";
import { useState } from "react";

export default function Player() {
  const refPlayerName = useRef();
  const[playerName, setPlayerName] = useState(null);
 
  function setName(){
    setPlayerName(refPlayerName.current.value);
    refPlayerName.current.value= '';
  }
  
  return (
    <section id="player">
      <h2>Welcome {playerName ?? "Unkown Entity"}</h2>
      <p>
        <input
        ref={refPlayerName} 
        type="text" />
        <button onClick={setName} >Set Name</button>
      </p>
    </section>
  );
}
