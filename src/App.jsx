import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [data,setData]=useState('');
  useEffect(()=>{
    getData();
  },[])

  async function getData(){
    const result=await axios.get("https://lumen-testing-production.up.railway.app/api");
    setData(result.data.message);
  }
  return (
    <div>
      <h1>{data}</h1>
    </div>
  );
}

export default App;
