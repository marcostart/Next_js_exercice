'use client';

import React from 'react'
import { useRef } from "react"

const Useref = () => {
    let ref = useRef(0);

  function handleClick() {
    ref.current = ref.current + 1;
    alert('You clicked ' + ref.current + ' times!');
  }
  return (
    <div>
        <button onClick={handleClick}>
            Click me!
        </button>
    </div>
  )
}

export default Useref;
