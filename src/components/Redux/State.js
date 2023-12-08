// import dialogsReducer from "./dialogsReducer"
// import profileReducer from "./profileReducer"
// import sidebarReducer from "./sidebarReducer"

// const imgPath = "https://w7.pngwing.com/pngs/980/886/png-transparent-male-portrait-avatar-computer-icons-icon-design-avatar-flat-face-icon-people-head-cartoon.png"

// const ADD_POST_ON_WALL = "ADD-POST-ON-WALL"
// const ADD_MESSAGE_IN_CHAT = "ADD-MESSAGE-IN-CHAT"
// const WATCH_FOR_ACTIONS_IN_CHAT_TEXTAREA = "WATCH-FOR-ACTIONS-IN-CHAT-TEXTAREA"
// const SEE_THE_ACTIONS_IN_DIALOGS_TEXTAREA = "SEE-THE-ACTIONS-IN-DIALOGS-TEXTAREA"

// let store = {
//     _forseAdviseSubscriber() {
//         console.log("xd");
//     },
//     _State: {
//         profilePage: {
//             postsData: [
//                 { text: 'Hi, how are you?', valueOfLikes: 2 },
//                 { text: 'It"s my second post', valueOfLikes: 5 },
//                 { text: 'It"s my first post', valueOfLikes: 20 },
//             ],
//             recievedActionOfUser: ':Type your shit here:',
//         },
//         chattingPage: {
//             usersData: [
//                 { id: 1, name: "Sveta", userAvatarContacts: imgPath },
//                 { id: 2, name: "Andrey", userAvatarContacts: imgPath },
//                 { id: 3, name: "Mathey", userAvatarContacts: imgPath },
//                 { id: 4, name: "Kuka", userAvatarContacts: imgPath },
//             ],
//             messagesData: [
//                 { text: "Привет!" },
//                 { text: "Когда в ДС?!" },
//                 { text: "Human Fall Flat!!" },
//             ],
//             copyedAnswerOfActionFromUserInChat: ':Type your shit here:',
//         },
//         SideBar: {
//             friendsInSidebarData: [
//                 { id: 2, name: "Andrey", userAvatarFriends: imgPath },
//                 { id: 3, name: "Mathey", userAvatarFriends: imgPath },
//                 { id: 4, name: "Kuka", userAvatarFriends: imgPath },
//             ]
//         },
//     },

//     getState() {
//         return this._State
//     },

//     subscribe(observer) {
//         this._forseAdviseSubscriber = observer;
//     },

//     dispatch(action) {
//         this._State.profilePage = profileReducer(this._State.profilePage, action)
//         this._State.chattingPage = dialogsReducer(this._State.chattingPage, action)
//         this._State.SideBar = sidebarReducer(this._State.SideBar, action)

//         this._forseAdviseSubscriber(this._State);
//     }

// };

// export const addPostOnWallActionCreate = () => ({type: ADD_POST_ON_WALL})

// export const seeTheActionsInDialogsTextareaActionCreate = (textOfMessageFromTextarea) => ({type: SEE_THE_ACTIONS_IN_DIALOGS_TEXTAREA, el: textOfMessageFromTextarea})

// export const addMessageInChatActionCreate = () => ({type: ADD_MESSAGE_IN_CHAT })

// export const watchForActionsInChatTextareaActionCreate = (textOfMessageFromTextarea) => ({type: WATCH_FOR_ACTIONS_IN_CHAT_TEXTAREA, el: textOfMessageFromTextarea})


// export default store;