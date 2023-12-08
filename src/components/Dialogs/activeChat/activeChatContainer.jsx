import { connect } from 'react-redux';
import { addMessageInChatActionCreate, watchForActionsInChatTextareaActionCreate } from '../../Redux/dialogsReducer';
import ActiveChat from './activeChat';


    // return <StoreContext.Consumer>
    //     { store => {
    //         let liftOffMessageToChat = () => {
    //             store.dispatch(addMessageInChatActionCreate());
    //         }
    //         let getActionOfUserInTextarea = (textOfMessageFromTextarea) => {
    //             store.dispatch(watchForActionsInChatTextareaActionCreate(textOfMessageFromTextarea))
    //         }
    //         return <ActiveChat liftOffMessageToChatCB={liftOffMessageToChat} watchForActionsInChatTextareaCB={getActionOfUserInTextarea} TransferMessagesData={store.getState().chattingPage.messagesData} copyedAnswerOfActionFromUserInChat={store.getState().chattingPage.copyedAnswerOfActionFromUserInChat}/>
    //     }
    // }
    // </StoreContext.Consumer>

    let mapStateToProps = (state) => {
        return {
            TransferMessagesData: state.chattingPage.messagesData,
            copyedAnswerOfActionFromUserInChat: state.chattingPage.copyedAnswerOfActionFromUserInChat
        }
    }

    let mapDispatchToProps = (dispatch) => {
        return {
            liftOffMessageToChatCB: (newMessageBody) => {
                dispatch(addMessageInChatActionCreate(newMessageBody))
            },
            watchForActionsInChatTextareaCB: (textOfMessageFromTextarea) => {
                dispatch(watchForActionsInChatTextareaActionCreate(textOfMessageFromTextarea))
            }
        }
    }
    const ActiveChatContainer = connect(mapStateToProps, mapDispatchToProps)(ActiveChat);

export default ActiveChatContainer;