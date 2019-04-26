import React from 'react'
import cls from './Friends.module.css'
import FriendItem from './FriendItem/FriendItem'


const Friends = (props) => {
    let friendsElements = props.friendsData.map
        ( friend => <FriendItem name={friend.name} id={friend.id} avatar={friend.avatar}/>)

    return (
        <div className={cls.wrap}>
            <h2 className={cls.title}>Friends</h2>
            <div className={cls.list}>
                {friendsElements}
            </div>
        </div>
    )
}

export default Friends;
