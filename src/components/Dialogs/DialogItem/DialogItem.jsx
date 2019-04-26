import React from 'react';
import cls from './DialogItem.module.css'
import {NavLink} from 'react-router-dom'

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className={cls.dialog + ' ' + cls.active}>
            <img src={props.avatar} className={cls.dialog_avatar}/>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

export default DialogItem;
