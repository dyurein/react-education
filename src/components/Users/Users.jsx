import React from 'react';
import cls from "./Users.module.css";
import userPhoto from "../../assets/images/user.png";
import {NavLink} from "react-router-dom";

let Users = (props) => {

    let pagesCount = Math.ceil(props.usersTotalCount / props.pageSize);

    let usersPagesArray = [];

    for (let i = 1; i <= pagesCount; i++) {
        usersPagesArray.push(i);
    }

    return <div>
        <div>
            {usersPagesArray.map(usersPage => {
                return <span onClick={(e) => {
                    props.onPageChanged(usersPage)
                }} className={props.currentPage === usersPage ? cls.currentPage : undefined}>{usersPage}</span>
            })}
        </div>
        {
            props.usersData.map(user =>
                <div key={user.id}>
                    <div className={cls.users_wrap}>
                        <div className={cls.left_side}>
                            <div>
                                <NavLink to={'/profile/' + user.id}>
                                    <img className={cls.user_avatar}
                                         src={user.photos.small != null ? user.photos.small : userPhoto}
                                         alt="user-avatar"/>
                                </NavLink>
                            </div>
                            <div>
                                {user.followed
                                    ? <button disabled={props.followingInProgress.some(id => id === user.id)}
                                              onClick={() => {props.unfollow(user.id)}}>Unfollow</button>
                                    : <button disabled={props.followingInProgress.some(id => id === user.id)}
                                              onClick={() => {
                                        props.follow(user.id)}}>Follow</button>}
                            </div>
                        </div>
                        <div className={cls.right_side}>
                            <div className={cls.left_col}>
                                <span className={cls.name}>{user.name}</span>
                                <span className={cls.user_status}>{user.status}</span>
                            </div>
                            <div className={cls.right_col}>
                                <span className={cls.user_location}>{"user.location.city"}</span>
                                <span className={cls.user_location}>{"user.location.country"}</span>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    </div>
}

export default Users;