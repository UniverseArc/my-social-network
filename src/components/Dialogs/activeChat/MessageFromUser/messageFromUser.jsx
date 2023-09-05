import classes from './messageFromUser.module.css'
const MessageFromUser = (props) => {
    return (
        <div className={classes.messageFromActiveChat}>
            {props.message}
        </div>
    );
}

export default MessageFromUser;