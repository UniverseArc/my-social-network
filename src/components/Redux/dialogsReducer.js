const ADD_MESSAGE_IN_CHAT = "ADD-MESSAGE-IN-CHAT"
const WATCH_FOR_ACTIONS_IN_CHAT_TEXTAREA = "WATCH-FOR-ACTIONS-IN-CHAT-TEXTAREA"
const imgPath = "https://w7.pngwing.com/pngs/980/886/png-transparent-male-portrait-avatar-computer-icons-icon-design-avatar-flat-face-icon-people-head-cartoon.png"

let initialState = {
    
    usersData: [
        { id: 1, name: "Sveta", userAvatarContacts: imgPath },
        { id: 2, name: "Andrey", userAvatarContacts: imgPath },
        { id: 3, name: "Mathey", userAvatarContacts: imgPath },
        { id: 4, name: "Kuka", userAvatarContacts: imgPath },
    ],
    messagesData: [
        { text: "Привет!" },
        { text: "Когда в ДС?!" },
        { text: "Human Fall Flat!!" },
    ],
    // Redux-Form убирает:
    // copyedAnswerOfActionFromUserInChat: ':Type your shit here:',
}

const dialogsReducer = (State = initialState, action) => {
    switch (action.type) {
        // Redux-Form убирает:
        // case WATCH_FOR_ACTIONS_IN_CHAT_TEXTAREA:{
        //     let copyedState = {...State, copyedAnswerOfActionFromUserInChat: action.el}
        //     // copyedState.copyedAnswerOfActionFromUserInChat = action.el;
        //     return copyedState;
        // }
        case ADD_MESSAGE_IN_CHAT:{
            let copyedState = {...State, messagesData: [...State.messagesData, {text: action.payload}]}
            // copyedState.messagesData = [...State.messagesData]
            // Redux-Form убирает:
            // let newMessageToPublish = {
            //     text: copyedState.copyedAnswerOfActionFromUserInChat
            // }
            // copyedState.messagesData.push(newMessageToPublish);
            // copyedState.copyedAnswerOfActionFromUserInChat = "";
            // copyedState.messagesData.push({text: action.payload});

            return copyedState;
        }
        default:
            return State;
    }
}

export const addMessageInChatActionCreate = (newMessageBody) => ({type: ADD_MESSAGE_IN_CHAT, payload: newMessageBody })

export const watchForActionsInChatTextareaActionCreate = (textOfMessageFromTextarea) => ({type: WATCH_FOR_ACTIONS_IN_CHAT_TEXTAREA, el: textOfMessageFromTextarea})

export default dialogsReducer;