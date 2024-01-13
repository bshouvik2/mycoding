import { useState } from "react";

function BesantTechnologies() {
  const [Trainer] = useState("Sameer");
  const [Course] = useState("React");
  const [Fees] = useState("25000");
  const [Duration] = useState("1month");
   const [Institute] = useState("Besant");
  
  return (
    <>
      <h1>My Trainer is:{Trainer} and {Institute}</h1>
      <p>
        The Course is {Course} {Fees} and the  {Duration} {Institute}.
      </p>
    </>
  )
}

export default BesantTechnologies;
