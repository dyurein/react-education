import React from 'react';
import {sendMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
        newMessageText: state.dialogsPage.newMessageText
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageText: (text) => {
            let action = updateNewMessageTextActionCreator(text);
            dispatch(action);

        },
        sendMessage: () => {
            dispatch(sendMessageActionCreator());
        }
    }
}

const dialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default dialogsContainer;