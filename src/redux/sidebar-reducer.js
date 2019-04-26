let initialState = {
    friendsData: [
        {
            id: 1,
            name: 'Pasha',
            avatar: 'https://versusb.ru/wp-content/uploads/2018/04/pasha-tehnik-biografiya-1-400x400.jpg'
        },
        {
            id: 2,
            name: 'Sasha',
            avatar: 'https://yt3.ggpht.com/a-/AAuE7mBSCVhyuVpXUQ0p9LyImPNWPsY_59QzP8e8dg=s900-mo-c-c0xffffffff-rj-k-no'
        },
        {
            id: 3,
            name: 'Alena',
            avatar: 'https://developer.microsoft.com/ru-ru/advocates/media/profiles/alena-hall.png'
        }
    ]
};

export const sidebarReducer = (state = initialState, action) => {
    return state;
}

export default sidebarReducer;