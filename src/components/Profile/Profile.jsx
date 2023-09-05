import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo />
            <MyPosts postsData={props.TransferState.postsData} 
            recievedActionOfUser={props.TransferState.recievedActionOfUser} 
            seeTheActionsOfUserInTextarea={props.seeTheActionsOfUserInTextarea} 
            addPostOnWall={props.addPostOnWall}/> 
        </div>
    )
}

export default Profile;