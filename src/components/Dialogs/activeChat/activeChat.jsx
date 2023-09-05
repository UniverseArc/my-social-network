import { createRef } from 'react';
import ChatKeeper from './ChatKeeper/ChatKeeper';
import classes from './activeChat.module.css'

const ActiveChat = (props) => {

    let getRefMessageToChat = createRef();
    let liftOffMessageToChat = () => {
        let getActionOfUser = getRefMessageToChat.current.value;
        props.addMessageInChat(getActionOfUser);
    };

    let getActionOfUserInTextarea = () => {
        let textOfMessageFromTextarea = getRefMessageToChat.current.value
        props.watchForInputUserInTexteareOfChats(textOfMessageFromTextarea)
    };

    return (
        <div className={classes.activeChatWithUser}>
            <ChatKeeper messagesData={props.TransferMessagesData} />

            <div className={classes.textareaBlock}>
                <textarea onChange={getActionOfUserInTextarea}

                    ref={getRefMessageToChat}

                    className={classes.textareaHerself}

                    value={props.copyedAnswerOfActionFromUserInChat}></textarea>

                <button onClick={liftOffMessageToChat}
                    className={classes.textareaButton}>add message</button>
            </div>
        </div>
    );
}

export default ActiveChat;