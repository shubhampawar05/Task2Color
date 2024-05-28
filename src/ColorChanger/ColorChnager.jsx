import React, { useState } from 'react'
import Card from './Card';

const ColorChnager = () => {
    const [color, setColor0]=useState(false);
  return (
    <div className=' max-w-screen-lg mx-auto my-20 '>
        <div className=' flex flex-wrap gap-4'>
          
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
        </div>

    </div>
  )
}

export default ColorChnager