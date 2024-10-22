import { useReducer, useState } from "react";
import {appReducer} from "../appreducer"
import LeftSection from "../components/leftSection"
import RightSection from "../components/rightSection"
import Title from "../components/title"
import '../style/Commun.css'
export default function ContactUs() 
{
  const initialState = {
    principal: 1000000,
    tenure: 5,
    roi: 9
  };

  const [state, dispatch] = useReducer(appReducer, initialState);

  return (
    <div className="app-wrapper">
      <Title />
      <div className="app-container">
        <LeftSection state={state} dispatch={dispatch} />
        <RightSection state={state} />
      </div>
    </div>
  );
}


