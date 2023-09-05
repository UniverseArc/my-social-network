const nullAvatar = "https://w7.pngwing.com/pngs/980/886/png-transparent-male-portrait-avatar-computer-icons-icon-design-avatar-flat-face-icon-people-head-cartoon.png"

const store = {
    _rerenderEntireTree () {
        console.log();
    },
    _State: {
    profilePage: {
      postsData: [
        { text: "Hi, how are you?", valueOfLikes: 2 },
        { text: 'It"s my second post', valueOfLikes: 5 },
        { text: 'It"s my first post', valueOfLikes: 20 },
      ],
      recievedActionOfUser: ":Type your shit here:",
    },
    chattingPage: { 
      usersData: [
        { id: 1, name: "Sveta", userAvatarContacts: nullAvatar },
        { id: 2, name: "Andrey", userAvatarContacts: nullAvatar },
        { id: 3, name: "Mathey", userAvatarContacts: nullAvatar},
        { id: 4, name: "Kuka", userAvatarContacts: nullAvatar },
      ],
      messagesData: [
        { text: "Привет!" },
        { text: "Когда в ДС?!" },
        { text: "Human Fall Flat!!" },
      ],
      copyedAnswerOfActionFromUserInChat: ":Type your shit here:",
    },
    SideBar: {
      friendsInSidebarData: [
        { id: 2, name: "Andrey", userAvatarFriends: nullAvatar },
        { id: 3, name: "Mathey", userAvatarFriends: nullAvatar },
        { id: 4, name: "Kuka", userAvatarFriends: nullAvatar },
      ],
    },
  },
  getState() {
    return this._State;
  },
  addPostOnWall() {
    let newPostToPublish = {
      text: this._State.profilePage.recievedActionOfUser,
      valueOfLikes: 0,
    };
    this._State.profilePage.postsData.push(newPostToPublish);
    this._State.profilePage.recievedActionOfUser = "";
    this._rerenderEntireTree(this._State);
  },
  seeTheActionsOfUserInTextarea(el) {
    this._State.profilePage.recievedActionOfUser = el;
    this._rerenderEntireTree(this._State);
  },
  addMessageInChat() {
    let newMessageToPublish = {
      text: this._State.chattingPage.copyedAnswerOfActionFromUserInChat,
    };
    this._State.chattingPage.messagesData.push(newMessageToPublish);
    this._State.chattingPage.copyedAnswerOfActionFromUserInChat = "";
    this._rerenderEntireTree(this._State);
  },

  watchForInputUserInTexteareOfChats(el) {
    this._State.chattingPage.copyedAnswerOfActionFromUserInChat = el;
    this._rerenderEntireTree(this._State);
  },

  subscribe(observer) {
    this._rerenderEntireTree = observer;
  },
};


export default store;
