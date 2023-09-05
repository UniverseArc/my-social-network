import { NavLink } from 'react-router-dom';
import classes from './FriendUserInSideBar.module.css'
const FriendUserInSideBar = (props) => {
    return (
        <div className={classes.userListOfContacts}>
            <div className={classes.imgContainer}>
                <img className={classes.userAvatarInListOfFriends} src={props.userAvatarFriends}></img>
            </div>
            <NavLink to={"/friends/" + props.id}>{props.name}</NavLink>
        </div>

    );
}

export default FriendUserInSideBar;