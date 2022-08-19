import React from 'react'


const Image = (probs) => {
    
  return (
    <span><img src={probs.ImgName} alt={probs.Name} /></span>
  )
}

export default Image;