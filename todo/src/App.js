import './App.css';
import React,{useState} from 'react';
// import Input from "./components/input.js"
function App() {
   const [name,setName]=useState("Dipesh");
   const [Flag,setFlag] = useState(false);
  const [Steps,setStep] = useState(0);
  const [names,setNames] = useState([]);
  function changeName(){
    return setFlag("Nikesh");
  }
  function increment(){
  return setStep(Steps+1);
  }
  function decrement(){
    return setStep(Steps-1);
  }
  function addnames(e){
        e.preventDefault();
        setNames([...names,{id:names.length,name}]);
        setNames("");
  }
  return (
    <>
     <div className='tbody'>
     <h1>hello, {Flag ? name :"nope"}</h1>
     <button onClick={changeName}>Click me</button>
     <hr></hr>
     <button onClick={increment}>+</button>
     <div>{Steps}</div>
     <button onClick={decrement}>-</button>
     <hr></hr>
<form onSubmit={addnames}>
  <input type='text' value={name} placeholder="add names.." onChange={(e)=> setName(e.target.value)} />
  <button >Submit</button>
  
</form>
<ul>
    {names.map((item)=>(
      <li key={item.id}>{item.name}</li>
    ))}
    
  </ul>
     </div>
    </>
  );
}

export default App;
