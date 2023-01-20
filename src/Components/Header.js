import React from 'react'

function Header() {
  const Change = () =>{
    // const mode = document.querySelector('mode');
    const head = document.querySelector('head');
    head.style.backgroundColor= "black";
    console.log('click')

 

  }


  return (
    <div className='head'>
        <img src="/logo192.png" width={50} alt="" />
        <h1>This is React. Our Skill</h1>
        <button className='mode' onClick={Change}>color</button>
    </div>
  )
}

export default Header