import React from 'react';
import cls from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'

const Dialogs = (props) => {

  let state = props.dialogsPage;

  let dialogsElements = state.dialogsData.map
    ( dialog => <DialogItem name={dialog.name} id={dialog.id} key={dialog.id} avatar={dialog.avatar}/> );

  let messagesElements = state.messagesData.map
    ( message => <Message message={message.message} key={message.id}/> );

  let newMessage = React.createRef();

  let onSendMessage = () => {
    props.sendMessage();
  }

  let onMessageChange = () => {
    let text = newMessage.current.value;
    props.updateNewMessageText(text);
  }


  return (
    <div className={cls.dialogs_wrap}>
      <div className={cls.dialogs}>
        <div className={cls.dialog_items}>
          {dialogsElements}

        </div>
        <div className={cls.msgs}>
          {messagesElements}
          <div className={cls.chat}>
            <textarea placeholder="Write a message" ref={newMessage} onChange={onMessageChange} className={cls.input} value={props.newMessageText} />
            <button onClick={onSendMessage} className={cls.btn_send}>Send</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dialogs;
