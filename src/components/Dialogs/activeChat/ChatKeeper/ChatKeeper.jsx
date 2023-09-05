import MessageFromUser from '../MessageFromUser/messageFromUser';
const ChatKeeper = (props) => {
    let arrayOfUsersMessages = props.messagesData.map(el => <MessageFromUser message={el.text} />)
    return (
        <div>
            {arrayOfUsersMessages}
        </div>
    );
}

export default ChatKeeper;