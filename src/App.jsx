import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [data,setData]=useState('');
  useEffect(()=>{
  },[])

  async function getData(){
    const result=await axios.post("http://localhost:8000/login",{
      email:"sahil@gmail.com",
      password:"123"});
    setData(result.data.user);
  }
  return (
    <div>
      <button className="p-2 " onClick={getData}>KLIK</button>
      <h1>{data.email}</h1>
    </div>
  );
}

export default App;
