import React from 'react'
import "./Intro.css"
import { useNavigate } from 'react-router-dom'
// import { Button } from 'react-bootstrap'

const Intro = () => {
  const navigate=useNavigate()
  function handlemember() {
    navigate('/home#contact');
    setTimeout(() => {
      const methodsElement = document.getElementById("contact");
      if (methodsElement) {
        methodsElement.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  }
  function handlebook(){
    navigate('/home#contact');
    setTimeout(() => {
      const methodsElement = document.getElementById("contact");
      if (methodsElement) {
        methodsElement.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  }
  return (
    <div>
            <div className='introSetup'>
            <h1>Train Insane or Remain same</h1>
            <h5><strong>Time</strong> to Get <strong>Fit</strong></h5>
            <div className='introBtn'>
            <button className='button1' onClick={handlemember}>Become a Member</button>
            <button className='button2' onClick={handlebook}>Book now</button>
            </div>
            

            </div>
    </div>
  )
}

export default Intro