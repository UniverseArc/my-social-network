import { NavLink } from "react-router-dom";
import classes from "./Header.module.css"
import userDefaultAvatar from "../../img/userDef.png"
const Header = (props) => {
    return (
        <header className={classes.header}>
            <img src='https://i.pinimg.com/originals/b9/05/3d/b9053d873e9f69058997913e0fffca2e.png' alt="Logo"></img>
            <div className={classes.header_login}>
                {props.isAuth === true ?
                    <div className={classes.usernameStyles}>
                        <button className={classes.buttonLogoutStyles} onClick={props.logout}>Logout</button>
                        <p>Welcome back, {props.login}!</p>
                        <img
                            className={classes.userAvatarInLogoArea}
                            src={props.userAvatar == null ? userDefaultAvatar : props.userAvatar}
                            alt="User avatar" />
                    </div>
                    :
                    <NavLink to='/login'>Login</NavLink>}
            </div>
        </header>
    )
}

export default Header;