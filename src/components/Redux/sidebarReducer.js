// чтобы избежать попадания undefined в State - объявлеяем пока пустой obj
const imgPath = "https://w7.pngwing.com/pngs/980/886/png-transparent-male-portrait-avatar-computer-icons-icon-design-avatar-flat-face-icon-people-head-cartoon.png"

let initialState = {
    friendsInSidebarData: [
        { id: 2, name: "Andrey", userAvatarFriends: imgPath },
        { id: 3, name: "Mathey", userAvatarFriends: imgPath },
        { id: 4, name: "Kuka", userAvatarFriends: imgPath },
    ]
}

const sidebarReducer = (State = initialState, action) => {
    return State
}

export default sidebarReducer;