import React, { useState } from 'react'

function Notify({ type, text }) {
    const [timeOut, setTimeOut] = useState(null)

    setTimeout(() => {
        setTimeOut(1)
    }, 3000)
    return (
        timeOut !== 1 && <div className="z-10 bg-green-400 border-l-4 border-white text-white p-4 fixed right-0 top-[200px]" role="alert">
            <p className="font-bold">{type}</p>
            <p>{text}</p>
        </div>
    )
}

export default Notify