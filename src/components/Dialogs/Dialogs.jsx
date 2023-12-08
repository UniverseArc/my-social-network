import classes from './Dialogs.module.css'
import ListOfDialogsContainer from './ListOfDialogs/ListOfDialogsContainer';
import ActiveChatContainer from './activeChat/activeChatContainer';
import { Navigate } from "react-router-dom";
const Dialogs = (props) => {
    if(!props.isAuth) return <Navigate to="/login" />
    return (
        <div className={classes.thismessagerContainer}>
            <div className={classes.thismessagerH1}>ThisMessager</div>
            <ListOfDialogsContainer />

            <ActiveChatContainer />
        </div>
    );
}

export default Dialogs;