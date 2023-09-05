import { createRef } from "react";
import classes from "./MyPosts.module.css"
import Post from "./Post/Post";

const MyPosts = (props) => {
    const {postsData, recievedActionOfUser} = props;
    console.log(props);
    const arrayOfMessagesUsers = postsData.map(el => <Post message={el.text} likes={el.valueOfLikes} />)
    const getRefFromTextarea = createRef();
    
    const addPost = () => {
        const textOfMessageFromTextarea = getRefFromTextarea.current.value
        props.addPostOnWall(textOfMessageFromTextarea)
    };
    
    const getActionOfUserInTextarea = () => {
        const textOfMessageFromTextarea = getRefFromTextarea.current.value
        props.seeTheActionsOfUserInTextarea(textOfMessageFromTextarea)
    };
    return (
        <div className={classes.posts}>
            <b><font size='5'>My posts</font></b>
            <br />
            <div className={classes.textareaBlock}>
                <textarea onChange={ getActionOfUserInTextarea } ref={getRefFromTextarea} className={classes.textareaHerself} value={recievedActionOfUser}></textarea>
                <button onClick={ addPost } className={classes.textareaButton}>add post</button>
            </div>
            <div>
                {arrayOfMessagesUsers}
            </div>
        </div>
    )
}

export default MyPosts;