import React from 'react';
import cls from './Message.module.css'

const Message = (props) => {
  return (
    <div className={cls.msg}>{props.message}</div>
  )
}

export default Message;
