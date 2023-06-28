import React from 'react'
import { useAppState } from "../Context";

const MessageComponent = () => {
  let { message } = useAppState("messages");
  return (
    <div>
      {message}
    </div>
  )
}

export default MessageComponent