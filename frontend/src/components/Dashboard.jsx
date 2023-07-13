import React from 'react';
import {useState} from 'react';
import Navbar from './Navbar';
import Carousel from './Carousel';
import background from '../img/wp3537548.png';

function Dashboard({ username }) {
  const slides = [
    { image: background, caption: 'Slide 1' },
    { image: background, caption: 'Slide 2' },
    { image: background, caption: 'Slide 3' },
  ];

  function handleClick() {
     return <h1>hello</h1>;
  }
   
  const [val,setVal] =useState(0);

  const increment = () =>{
  setVal(val +1);
  }
const decrement = () => {
    setVal(() => val-1);
  }
  
  return (
    <div>
      <Navbar username={username} />

      <h1 className="text-center mt-8 text-2xl font-bold">Welcome {username}!</h1>
      <button onClick={handleClick()}>click me </button>

      <h1>counter app</h1>
      <button onClick={increment}>+</button>
      <p>{val}</p>
      <button onClick={() => decrement()}>-</button>

      <div className="mx-auto w-3/4 mt-8">
        {/* <Carousel slides={slides} interval={4000} /> */}

        
      </div>
    </div>
  );
}

export default Dashboard;
