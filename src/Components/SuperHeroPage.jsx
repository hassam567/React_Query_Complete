import axios from 'axios';
import React, { useEffect, useState } from 'react'

const SuperHeroPage = () => {
  const [data,setData]=useState([]);
  const [isLoading,setLoading]=useState(true)
  useEffect(()=>{
     axios.get("http://localhost:4000/superheroes").then((res)=>{
      setData(res.data)
      setLoading(false)
     })
  },[])

  if(isLoading)
  {
    <h1>Loading</h1>
  }
  return (
    <>
    { data.map((hero)=>{
    return <h1 key={hero.name}>{hero.name}</h1>
    })

      
    }
    </>
    
  );
}

export default SuperHeroPage
