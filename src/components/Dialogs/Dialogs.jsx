import classes from './Dialogs.module.css'
import ListOfDialogs from './ListOfDialogs/ListOfDialogs';
import ActiveChat from './activeChat/activeChat';
const Dialogs = (props) => {
    return (
        <div className={classes.imessagerContainer}>
            <div className={classes.imessagerH1}>IMessager</div>
            <ListOfDialogs usersData={props.TransferState.usersData} />
            <ActiveChat
                TransferMessagesData={props.TransferState.messagesData} 

                copyedAnswerOfActionFromUserInChat={props.TransferState.copyedAnswerOfActionFromUserInChat}
                
                addMessageInChat={props.addMessageInChat}

                watchForInputUserInTexteareOfChats={props.watchForInputUserInTexteareOfChats} />
        </div>
    );
}

export default Dialogs;