import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [data,setData]=useState('');
  useEffect(()=>{
  },[])

  async function getData(){
    const result=await axios.post("https://lumen-testing-production.up.railway.app/register",{
      name:"sahil",
      email:"sahil@123",
      password:"sahil@123"});
    setData(result.data);
  }
  return (
    <div>
      <button className="p-2 " onClick={getData}>KLIK</button>
      <h1>{data}</h1>
    </div>
  );
}

export default App;
