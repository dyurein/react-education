import React from 'react'
import cls from './FriendItem.module.css'

const Frienditem = (props) => {
    return (
        <div className={cls.wrap}>
            <img className={cls.avatar} src={props.avatar}/>
            <div className={cls.name}>{props.name}</div>
        </div>
    )
}

export default Frienditem;