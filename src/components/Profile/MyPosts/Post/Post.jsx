import React from 'react';
import cls from './Post.module.css'
import Like from './Like/Like'

const Post = (props) => {
  return (
    <div className={cls.item}>
      <div className={cls.post_wrap}>
        <img className={cls.avatar} src="https://previews.123rf.com/images/triken/triken1608/triken160800029/61320775-male-avatar-profile-picture-default-user-avatar-guest-avatar-simply-human-head-vector-illustration-i.jpg" alt="avatar"/>
        <span className={cls.msg}>{props.message}</span>
      </div>
      <div className={cls.like_wrap}>
        <img className={cls.likeIcon} src="https://image.flaticon.com/icons/svg/813/813365.svg" alt="like" />
        <div className={cls.likesCount}>{props.likesCount}</div>
      </div>
    </div>
  )
}

export default Post;
