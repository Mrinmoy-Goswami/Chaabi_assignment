import { useState, useRef, useEffect, useMemo } from "react";
import { Task } from "./Tasks.js";
import { memo } from "react";
import  ".//App.css"

function App() {
  const [input, setInput] = useState("");
  const [level, setLevel] = useState(1);
  const [index, setIndex] = useState(0);
  const [accuracy, setAccuracy] = useState(100);
  const [time,setTime] = useState(0);
  const [speed,setSPeed] = useState(0);
  const [startCounting,setStartCounting] = useState(false);
  const [words, setWords] = useState(Task[index]);
  const [done,setDone] = useState(false);
  const [count,setCount] = useState(0);
  


// useEffect(()=>{
//  setTyped(input);
// },[input])


// useEffect(()=>{
//   if(startCounting){
//     setInterval(()=>{
//      setTime((time)=>time+1);  
//     },1000)
//   }
// })
const handleType = (e)=> {
  e.preventDefault();
  setStartCounting(true);
    setInput(e.target.value);
    
    setCount((count)=>count+1);
    console.log(input);
    
    
    const accuracyPercent = Math.round(
      (input.length/count)*100
      )
      if(isNaN(accuracyPercent)){
        setAccuracy(0);
      }
      else{
        setAccuracy(accuracyPercent)
      }
      if(input === words && index !== Task.length-1){
        setIndex((index)=>index+1);
        setLevel((lev)=>lev+1)
        setWords(Task[index+1])
      setInput("");
      setAccuracy(accuracy);
      setCount(0);
      setStartCounting(false);
    }
    if(input === words && index === Task.length-1){
      setWords("Hurray you have nailed it !");
      setInput("");
      e.preventDefault();
      setDone(true);
    }

    }
    
   
    const Results = ()=>{
      setSPeed(input.length/time);
    }
    


  // const correctTyped = () => {
    
 
  // };
    // const calculateAccuracy = (e)=>{
      // const correctWords = correctTyped();
    
    // }

  return (
    <div className="flex items-center bg-gray-500 flex-col w-screen  h-screen">
      <h1 className="mt-5 mb-10 text-xl font-bold text-white">Touch Typer</h1>
      <h3 className="mb-4 text-lg text-white font-semibold">Level {level}/10</h3>
      <div className="mb-5 border-solid border-2 border-white bg-emerald-400 w-1/2 p-4 rounded-xl">
        <p id="para" className="text-lg text-white"  >{words}</p>
      </div>
      <textarea
        onChange={handleType}
        // onFocus={Speed}
        onBLur={Results}
        className="border-solid border-2 border-white w-1/2 p-5 text-lg rounded-xl"
        value={input}
      ></textarea>
      <p className="text-xl mt-5 text-white ">{  done ? `Go`:`Accuracy : ${accuracy}%`}</p>
    
    </div>
  );
}

export default App;
