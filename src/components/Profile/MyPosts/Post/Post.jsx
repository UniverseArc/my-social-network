import classes from "./Post.module.css"
const Post = (props) => {
    return (
        <div key={props.id} className={classes.item}>
            <img className={classes.avatarInPosts} alt="Logo" src="https://w7.pngwing.com/pngs/980/886/png-transparent-male-portrait-avatar-computer-icons-icon-design-avatar-flat-face-icon-people-head-cartoon.png" />
            {props.message}
            <div className={classes.likeOnPosts}>
                likes {props.likes}
            </div>
        </div>
    )
}

export default Post;