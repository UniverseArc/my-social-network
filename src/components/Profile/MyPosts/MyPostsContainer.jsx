import { connect } from "react-redux";
import { addPostOnWallActionCreate, 
    // seeTheActionsInDialogsTextareaActionCreate 
} from "../../Redux/profileReducer";
import MyPosts from "./MyPosts";

    // return <StoreContext.Consumer>
    //     {store => {
    //         const addPost = () => {
    //             store.dispatch(addPostOnWallActionCreate())
    //         };

    //         const getActionOfUserInTextarea = (textOfMessageFromTextarea) => {
    //             store.dispatch(seeTheActionsInDialogsTextareaActionCreate(textOfMessageFromTextarea))
    //         };
    //         return (<MyPosts
    //             seeTheActionsInDialogsTextareaCB={getActionOfUserInTextarea}

    //             addPostOnWallCB={addPost}

    //             recievedActionOfUser={store.getState().profilePage.recievedActionOfUser}

    //             postsData={store.getState().profilePage.postsData} />)
    //     }
    //     }
    // </StoreContext.Consumer>

    let mapStateToProps = (state) => {
        return {
            postsData: state.profilePage.postsData,
            recievedActionOfUser: state.profilePage.recievedActionOfUser,
        }
    }
    let mapDispatchToProps = (dispatch) => {
        return {
            addPostOnWallCB: (newPostBody) => {
                dispatch(addPostOnWallActionCreate(newPostBody))
            },
            //Redux-Form убирает:
            // seeTheActionsInDialogsTextareaCB: (textOfMessageFromTextarea) => {
            //     dispatch(seeTheActionsInDialogsTextareaActionCreate(textOfMessageFromTextarea))
            // }
        }
    }

    const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)


export default MyPostsContainer;