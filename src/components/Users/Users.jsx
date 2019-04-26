import React from 'react';
import cls from './Users.module.css'

const Users = (props) => {

    if (props.usersData.length === 0) {
        props.setUsers([
                {
                    id: 1, photoUrl: 'https://developer.microsoft.com/ru-ru/advocates/media/profiles/alena-hall.png',
                    followed: false, fullName: 'Alena', status: ')))))))', location: {city: 'Minsk', country: 'Belarus'}
                },
                {
                    id: 2,
                    photoUrl: 'https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTQyMDA0NDgwMzUzNzcyNjA2/mark-zuckerberg_gettyimages-512304736jpg.jpg',
                    followed: true,
                    fullName: 'Mark',
                    status: 'are you stupid?',
                    location: {city: 'Moscow', country: 'Russia'}
                },
                {
                    id: 3,
                    photoUrl: 'https://yt3.ggpht.com/a-/AAuE7mBSCVhyuVpXUQ0p9LyImPNWPsY_59QzP8e8dg=s900-mo-c-c0xffffffff-rj-k-no',
                    followed: true,
                    fullName: 'Sasha',
                    status: 'NOVAYA PYATEROCHKA OTKRILAS!',
                    location: {city: 'Sasha', country: 'Ukraine'}
                }
            ]
        )
    }

    return (
        <div>
            {
                props.usersData.map(user =>
                    <div key={user.id}>
                        <div className={cls.users_wrap}>
                            <div className={cls.left_side}>
                                <div>
                                    <img className={cls.user_avatar} src={user.photoUrl} alt="user-avatar"/>
                                </div>
                                <div>
                                    {user.followed
                                        ? <button onClick={() => {
                                            props.unfollow(user.id)
                                        }}>Unfollow</button>
                                        : <button onClick={() => {
                                            props.follow(user.id)
                                        }}>Follow</button>}

                                </div>
                            </div>
                            <div className={cls.right_side}>
                                <div className={cls.left_col}>
                                    <span className={cls.name}>{user.fullName}</span>
                                    <span className={cls.user_status}>{user.status}</span>
                                </div>
                                <div className={cls.right_col}>
                                    <span className={cls.user_location}>{user.location.city}</span>
                                    <span className={cls.user_location}>{user.location.country}</span>
                                </div>
                            </div>
                        </div>
                    </div>)
            }
        </div>
    )
}

export default Users;
