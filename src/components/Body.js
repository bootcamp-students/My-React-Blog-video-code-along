import React, { useState } from 'react'

function Body() {

    const [paragraph, setParagraph] = useState('Hello World')
    const [number, setNumber] = useState(0)
    
    const buttonHandlerParagraph = () => {
        setParagraph('Goodbye world')
    }
    const buttonHandlerNumber = () => {
        setNumber(number + 1)
    }

    return (
        <div className='d-flex flex-column'>
            <button onClick={buttonHandlerNumber}>click me to update number</button>
            {number}
            <button onClick={buttonHandlerParagraph}>click for new paragraph</button>
            {paragraph}
        </div>
    )
}

export default Body
