let rerenderEntireTree = () => {
    console.log("xd");
}


let imgPath = "https://w7.pngwing.com/pngs/980/886/png-transparent-male-portrait-avatar-computer-icons-icon-design-avatar-flat-face-icon-people-head-cartoon.png"
let State = {
    profilePage: {
        postsData: [
            { text: 'Hi, how are you?', valueOfLikes: 2 },
            { text: 'It"s my second post', valueOfLikes: 5 },
            { text: 'It"s my first post', valueOfLikes: 20 },
        ],
        recievedActionOfUser: ':Type your shit here:',
    },
    chattingPage: {
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
        copyedAnswerOfActionFromUserInChat: ':Type your shit here:', 
    },
    SideBar: {
        friendsInSidebarData: [
            { id: 2, name: "Andrey", userAvatarFriends: imgPath },
            { id: 3, name: "Mathey", userAvatarFriends: imgPath },
            { id: 4, name: "Kuka", userAvatarFriends: imgPath },
        ]
    },
};

export let addPostOnWall = () => {
    let newPostToPublish = {
        text: State.profilePage.recievedActionOfUser, valueOfLikes: 0
    }
    State.profilePage.postsData.push(newPostToPublish);
    State.profilePage.recievedActionOfUser = "";
    rerenderEntireTree(State);
}

export let seeTheActionsOfUserInTextarea = (el) => {
    State.profilePage.recievedActionOfUser = el;
    rerenderEntireTree(State);
    console.log(el);
    console.log(rerenderEntireTree(State));
}

//функции для textarea Dialogs
export let addMessageInChat = () => {
    let newMessageToPublish = {
        text: State.chattingPage.copyedAnswerOfActionFromUserInChat
    }
    State.chattingPage.messagesData.push(newMessageToPublish);
    State.chattingPage.copyedAnswerOfActionFromUserInChat = "";
    rerenderEntireTree(State);
}

export let watchForInputUserInTexteareOfChats = (el) => {
    State.chattingPage.copyedAnswerOfActionFromUserInChat = el;
    rerenderEntireTree(State);
}

export const subscribe = (observer) => {
    debugger
    rerenderEntireTree = observer;
}

export default State;