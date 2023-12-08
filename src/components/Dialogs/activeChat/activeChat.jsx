// import { createRef } from 'react';
import { TextArea } from '../../Utils/TuningForms/TuningForms';
import { maxLengthValueCreator, requiredField } from '../../Utils/Validation/validation';
import ChatKeeper from './ChatKeeper/ChatKeeper';
import classes from './activeChat.module.css'
import { Field, reduxForm } from 'redux-form';

const ActiveChat = (props) => {

    // Redux-form убирает:
    // const getRefMessageToChat = createRef();

    // const liftOffMessageToChatLocal = () => {
    //     props.liftOffMessageToChatCB()
    // };

    // const getActionOfUserInTextareaLocal = () => {
    //     let textOfMessageFromTextarea = getRefMessageToChat.current.value
    //     props.watchForActionsInChatTextareaCB(textOfMessageFromTextarea)
    // };

    const onSubmitChat = (values) => {
        props.liftOffMessageToChatCB(values.UserInput)
    }

    return (
        <div className={classes.activeChatWithUser}>
            <ChatKeeper messagesData={props.TransferMessagesData} />
            <FormedTextAreaComponent onSubmit={onSubmitChat}
            //Благодаря Redux-form это всё не нужно.
            // liftOffMessageToChatLocal={props.liftOffMessageToChatLocal} 
            // getActionOfUserInTextareaLocal={props.getActionOfUserInTextareaLocal}
            />
        </div>
    );
}

const maxLength50 = maxLengthValueCreator(50) 

const TextAreaComponent = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={classes.textareaBlock}>
            <Field 
                // onChange={props.getActionOfUserInTextareaLocal}

                // ref={props.getRefMessageToChat}
                
                name={"UserInput"}

                component={TextArea}
                
                validate={[requiredField, maxLength50]}>
            </Field>

            <button className={classes.textareaButton}>
                Добавить сообщение
            </button>
        </form>
    )
}

const FormedTextAreaComponent = reduxForm({
    form: 'ChatUserInput'
})(TextAreaComponent)

export default ActiveChat;