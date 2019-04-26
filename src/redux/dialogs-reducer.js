const SEND_MESSAGE = 'SEND-MESSAGE'
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'

let initialState = {
    dialogsData: [
        {
            id: 1,
            name: 'Alena',
            avatar: 'https://developer.microsoft.com/ru-ru/advocates/media/profiles/alena-hall.png'
        },
        {
            id: 2,
            name: 'Mark',
            avatar: 'https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTQyMDA0NDgwMzUzNzcyNjA2/mark-zuckerberg_gettyimages-512304736jpg.jpg'
        },
        {
            id: 3,
            name: 'Diman',
            avatar: 'https://vignette.wikia.nocookie.net/battleraprus/images/9/9e/Dima_KEX.jpg/revision/latest?cb=20180628100746&path-prefix=ru'
        },
        {
            id: 4,
            name: 'Sasha',
            avatar: 'https://yt3.ggpht.com/a-/AAuE7mBSCVhyuVpXUQ0p9LyImPNWPsY_59QzP8e8dg=s900-mo-c-c0xffffffff-rj-k-no'
        },
        {
            id: 5,
            name: 'Victor',
            avatar: 'http://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/2527963.png&w=350&h=254'
        },
        {
            id: 6,
            name: 'Pasha',
            avatar: 'https://versusb.ru/wp-content/uploads/2018/04/pasha-tehnik-biografiya-1-400x400.jpg'
        }
    ],
    messagesData: [
        {id: 1, message: 'I did not hit her'},
        {id: 2, message: 'It`s not truth'},
        {id: 3, message: 'it`s BULLSHIT'},
        {id: 4, message: 'I DID NOT HIT HER'},
        {id: 5, message: 'I DID NOT!'},
        {id: 6, message: 'Oh, hi Nark!'}
    ],
    newMessageText: ''

};

const dialogsReducer = (state = initialState, action) => {

    let stateCopy;
    switch(action.type) {
        case UPDATE_NEW_MESSAGE_TEXT: {
            return {
                ...state,
                newMessageText: action.newText
            };
            return stateCopy;
        }
        case SEND_MESSAGE:
            let text = state.newMessageText;
            return {
                ...state,
                newMessageText: '',
                messagesData: [...state.messagesData, {id: 6, message: text}]
            };
        default: return state;
    }
}

export const sendMessageActionCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessageTextActionCreator = (text) =>
    ({type: UPDATE_NEW_MESSAGE_TEXT, newText: text})

export default dialogsReducer;