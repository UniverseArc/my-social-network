// import { createRef } from "react";
import React from "react";
import classes from "./MyPosts.module.css"
import Post from "./Post/Post";
import { Field, reduxForm } from "redux-form";

const MyPosts = (props) => {
    const arrayOfMessagesUsers = [...props.postsData].reverse().map((el) => <Post key={el.id} message={el.text} likes={el.valueOfLikes} />)

    // Redux-Form убирает:
    // const getRefFromTextarea = createRef();
    // const addPost = () => {
    //     props.addPostOnWallCB()
    // };
    // const getActionOfUserInTextareaLocal = (e) => {
    //     const textOfMessageFromTextarea = e.target.value
    //     props.seeTheActionsInDialogsTextareaCB(textOfMessageFromTextarea)
    // };

    const onSubmitPost = (values) => {
        props.addPostOnWallCB(values.userPostInput)
    }
    
    return (
        <div className={classes.posts}>
            <b><font size='5'>My posts</font></b>
            <br />

            {// Redux-Form убирает:
            /* <div className={classes.textareaBlock}>
                <textarea onChange={getActionOfUserInTextareaLocal} ref={getRefFromTextarea} className={classes.textareaHerself} value={props.recievedActionOfUser}></textarea>
                <button onClick={addPost} className={classes.textareaButton}>add post</button>
            </div> */}
            <FormedTextAreaComponent onSubmit={onSubmitPost} />
            <div>
                {arrayOfMessagesUsers}
            </div>
        </div>
    )
}

const TextAreaComponent = (props) => {
    return (
        /* handleSubmit - оберточка, которая пишет e.preventDefault.. и другие подготовительные вещи, предоставляется Redux-Form из коробки по пропсам, при обертке
        компоненты через reduxForm({form: "userPostOnWall"})(TextAreaComponent) */
        <form onSubmit={props.handleSubmit} className={classes.textareaBlock}>
            {/* <textarea onChange={getActionOfUserInTextareaLocal} ref={getRefFromTextarea}  value={props.recievedActionOfUser}></textarea> */}
            <Field className={classes.textareaHerself} component="textarea" name="userPostInput" placeholder=":Type your shit here:"></Field>
            <button className={classes.textareaButton}>
                add post
            </button>
        </form >
    )
}

const FormedTextAreaComponent = reduxForm({ form: "userPostOnWall" })(TextAreaComponent)

export default (MyPosts);