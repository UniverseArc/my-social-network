import classes from "./ProfileInfo.module.css"
let imgPath = 'https://mobimg.b-cdn.net/v3/fetch/91/91ab23cdc35b6b44d15f1f5ebeb1cfdf.jpeg';
const ProfileInfo = (props) => {
    return (
        <div className={classes.profileInfoContainer}>
            <div className={classes.profileInfoImgContainer}>
                <img className={classes.BackgroundImgOfMain} src={imgPath} alt="ЗАЕБАЛА ТУПАЯ ДЛИННА АДРЕСА!!" />
            </div>
            <div className={classes.avatarPlusDescriptionZone}>
                ava + desc
            </div>
        </div>
    )
}

export default ProfileInfo;