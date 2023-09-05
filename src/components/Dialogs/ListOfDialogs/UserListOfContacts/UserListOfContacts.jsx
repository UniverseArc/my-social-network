import { NavLink } from 'react-router-dom';
import classes from './UserListOfContacts.module.css'
const UserListOfContacts = (props) => {
    return (
        <div className={classes.userListOfContacts}>
            <div className={classes.imgContainer}>
                <img className={classes.userAvatarInListOfContacts} src={props.userAvatarContacts}></img>
            </div>
            <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
        </div>
    );
}

export default UserListOfContacts;