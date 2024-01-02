import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
    // ПРОВЕРИТЬ ДОХОДИТ ЛИ SAVEPHOTO 
    return (
        <div>
            <ProfileInfo 
            profile={props.profile} 
            status={props.status} 
            updateStatus={props.updateStatus} 
            isAxiosing={props.isAxiosing} 
            isOwner={props.isOwner} 
            savePhoto={props.savePhoto} 
            authorizedUserId={props.authorizedUserId}
            sendProfileInfo={props.sendProfileInfo}/>
            <MyPostsContainer/> 
        </div>
    )
}
export default Profile;