import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [data,setData]=useState('');
  useEffect(()=>{
    getData();
  },[])

  async function getData(){
    const result=await axios.get("http://localhost:8000/api");
    setData(result.data.message);
  }
  return (
    <div>
      <h1>{data}</h1>
    </div>
  );
}

export default App;
