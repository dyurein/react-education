import React from 'react';
import cls from './ProfileInfo.module.css'

const ProfileInfo = () => {
  return (
    <div>
      <div className={cls.bar}>
        <img className={cls.img} src="https://cdn.theculturetrip.com/wp-content/uploads/2015/11/New-Zealand-%C2%A9-vichie81-Shutterstock.jpg" alt=""/>
      </div>
      <div className={cls.posts_wrapper}>
        <div className={cls.user}>
          <img className={cls.user_avatar} src="https://cdn2.iconfinder.com/data/icons/avatar-2/512/Fred_man-512.png" alt="user-avatart"/>
          <div className={cls.descr}>
            <span className={cls.name}>Sergei G.</span>
            <span className={cls.user_info}>Date of Birth: 14 September</span>
            <span className={cls.user_info}>City: Volgograd</span>
            <span className={cls.user_info}>Education: VSTU`17</span>
            <span className={cls.user_info}>Web-site: https://dyurein.github.io/</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileInfo;
