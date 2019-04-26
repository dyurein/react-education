import React from 'react';
import cls from './Like.module.css'

const Like = (props) => {
  return (
    <div className={cls.item}>
      <img className={cls.icon} src="https://image.flaticon.com/icons/svg/813/813365.svg" alt="like" />
      <div className={cls.count}>{props.likesCount}</div>
    </div>
  )
}

export default Like;
