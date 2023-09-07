import React from "react";
import { useState } from "react";
import ModalBox from "./TeamModalbox";



function TeamCall(props) {
  
  return (
    <div className=" font-dm-sans flex flex-col">
        <div  onClick={() => props.toggler()} className=" text-center text-[15px] self-center">
        Developed by IEDC CET
        </div>
    </div>
  );
}

export default function Team() {

  function useToggle() {
    const [on, setOn] = useState(false);
  
    const toggler = () => {
      setOn((on) => !on);
    };
  
    return { on, toggler };
  }

  const { on, toggler } = useToggle();

  return (
    <>
  <TeamCall toggler={toggler} />
  {on && <ModalBox toggler={toggler} />}
  </>
  );
}

