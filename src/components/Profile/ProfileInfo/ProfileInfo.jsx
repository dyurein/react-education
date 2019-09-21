import React from 'react';
import cls from './ProfileInfo.module.css'
import Preloader from "../../common/Preloader/Preloader";

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div>
            <div className={cls.bar}>
                <img className={cls.img}
                     src="https://cdn.theculturetrip.com/wp-content/uploads/2015/11/New-Zealand-%C2%A9-vichie81-Shutterstock.jpg"
                     alt=""/>
            </div>
            <div className={cls.posts_wrapper}>
                <div className={cls.user}>
                    <img className={cls.user_avatar} src={props.profile.photos.large} alt="user-avatart"/>
                    <div className={cls.descr}>
                        <span className={cls.name}>{props.profile.fullName}</span>
                        <span className={cls.user_info}>{props.profile.contacts.vk}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo;
