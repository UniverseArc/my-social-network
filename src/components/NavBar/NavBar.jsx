import { NavLink } from "react-router-dom";
import classes from "./NavBar.module.css"
import FriendUserInSideBar from "./FriendsInSideBar/FriendUserInSideBar";
const NavBar = (props) => {
    let arrayOfFriendList = props.friendsInSidebarData.map(el => <FriendUserInSideBar name={el.name} id={el.id} userAvatarFriends={el.userAvatarFriends}/>)
    return (
        <nav className={classes.nav}>
            <div className={`${classes.item} ${classes.active}`}>
                <NavLink to="/profile">Profile</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="/dialogs">Messages</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="/news">News</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="/music">Music</NavLink>
            </div>
            <div className={`${classes.item} ${classes.settingsInNav}`}>
                <NavLink to="/settings">Settings</NavLink>
            </div>

            <div className={classes.friendsContainer}>
                <p>Friends</p>
                <div className={classes.userInFriendsListNavbar}>
                    {arrayOfFriendList}
                </div>
            </div>
        </nav>
    )
}

export default NavBar;