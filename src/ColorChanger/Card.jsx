import React, { useState } from 'react'

const Card = () => {
    const [toggle,setToggel]=useState(false);
  return (
    <div>
          <div onClick={()=>setToggel(!toggle)} className={`w-60 h-60 rounded ${toggle === true ? "bg-slate-400": "bg-slate-800"}  `}/>
    </div>
  )
}

export default Card