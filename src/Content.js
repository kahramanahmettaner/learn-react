import React from 'react'
import { useState } from 'react';

const Content = () => {
    const [name, setName] = useState('Dave');
    const [count, setCount] = useState(0);
    
    const handleNameChange = () => {
        const names = ["Bob","Kevin","Dave"];
        const int = Math.floor(Math.random() * 3);
        setName(names[int]);
    }

    const handleClick = () => {
        // something to consider 
        setCount(count+1)
        setCount(count+1)
        console.log(count) // output is not count+2 but count
        // after function executed count = count + 1
    }

    return (
        <main>
            <p onDoubleClick={handleClick}>
            Hello {name}
            </p>
            <button onClick={ () => { handleNameChange() } }>
                Change Name
            </button>
        </main>
  )
}

export default Content