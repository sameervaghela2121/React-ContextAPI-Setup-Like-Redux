
import React, { useState } from 'react'

const useMessageState = () => {
    const [message, setMessage] = useState("Hello world!");
    return { message, setMessage }
}

export default useMessageState