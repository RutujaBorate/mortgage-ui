import React, { useState } from 'react'
import './ExpandableImage.css';

const ExpandableImage = () => {
  const [isOpen , setIsOpen] = useState(false);

  return (
    <div className='expand-container'>
      <button onClick={()=>setIsOpen(!isOpen)}>
        {isOpen ? "Hide Contract Images" : "Show Contract Images"}
      </button>
      {isOpen && (
        <img 
        //src="/mortgage-ui/src/real-estate.jpg"
        src='/real-estate.jpg'
        alt="Mortgage Contract" 
        className='contract-images'/>
      )}
    </div>
  )
}

export default ExpandableImage
