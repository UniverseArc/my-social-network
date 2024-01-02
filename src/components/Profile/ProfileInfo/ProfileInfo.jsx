import Preloader from "../../common/preloader/preloader";
import classes from "./ProfileInfo.module.css"
import userAvatar from "../../../img/userDef.png"
import { httpsCheck } from "../../Utils/ProfileUtil";
import MyStatusWithHooks from "./MyStatus/MyStatusWithHooks";
import { useState } from "react";
import ProfileInfoEditForm from "./ProfileInfoEdit/ProfileInfoEditForm";
let imgPath = 'https://mobimg.b-cdn.net/v3/fetch/91/91ab23cdc35b6b44d15f1f5ebeb1cfdf.jpeg';
const ProfileInfo = (props) => {
    let [editMode, setEditMode] = useState(false)

    if (!props.profile || props.isAxiosing) {
        return <div className={classes.preloaderStyles_Profile}><Preloader /></div>
    }

    
    const onSubmit = (formData) => {
        debugger
        props.sendProfileInfo(formData).then(
            () => {
                setEditMode(false)
            }
        )
    }

    return (
        <div className={classes.profileInfoContainer}>
            <div className={classes.profileInfoImgContainer}>
                <img className={classes.BackgroundImgOfMain} src={imgPath} alt="ЗАЕБАЛА ТУПАЯ ДЛИННА АДРЕСА!!" />
            </div>
            {editMode ? <ProfileInfoEditForm initialValues={props.profile} onSubmit={onSubmit} {...props} editMode={editMode} setEditMode={setEditMode}/> :
                <UserInfo {...props} editMode={editMode} setEditMode={setEditMode}/>}
        </div>
    )
}

const UserInfo = (props) => {
    const objectArray = Object.entries(props.profile.contacts);
    // В API - БАГА. 73 видос.
    //<div>About Me: {props.profile.aboutMe}</div>  - Запрашивается с адреса https://social-network.samuraijs.com/api/1.0/profile/30140
    //<div>Статус: </div> = Запрашивается с адреса https://social-network.samuraijs.com/api/1.0/profile/status/30140 (по факту берется с users как-то на серваке) 
    // см https://social-network.samuraijs.com/api/1.0/users/?page=1&count=100, alesiamanul - UserId 30140

    const handleSavePhoto = (e) => {
        if (e.target.files.length) {
            props.savePhoto(e.target.files[0]);
          }
    }
    return (
        <div className={classes.avatarPlusDescriptionZone}>
        <img className={classes.userAvatarStyle} src={props.profile.photos.large === null ? userAvatar : props.profile.photos.large} alt="Avatar of User"></img>
        <div className={classes.userInfoArea}>
            <div className={classes.userInfoAreaBlock}>
                <div className={classes.aboutMe && classes.fullNameUser}>{props.profile.fullName}</div>
            </div>

            <div className={classes.userInfoAreaBlock}>
                <div className={classes.aboutUserTitle}><b>О пользователе: </b></div>
                {props.profile.userId === props.authorizedUserId &&
                    <div className={classes.aboutMe}>
                        <div>{props.profile.aboutMe === null ? "Не указано." : props.profile.aboutMe}</div>
                        <div>Статус: </div>
                        <MyStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
                    </div>
                }
                {!(props.profile.userId === props.authorizedUserId) &&
                    <div className={classes.aboutMe}>
                        <div>{props.profile.aboutMe === null ? "Не указано." : props.profile.aboutMe}</div>
                        <div><b>Статус: </b></div>
                        <div>{props.status === null ? "Не указано." : props.status}</div>
                    </div>
                }
            </div>


            <div className={classes.userInfoAreaBlock}>
                <div className={classes.aboutUserTitle}><b>Контакты: </b></div>
                <div className={classes.aboutMe}>
                    {objectArray.map(([key, value]) => {
                        if (value) {
                            return <div key={key} > {key}: <a target="blank" key={`link_${key}`} href={httpsCheck(value)}>{value}</a></div>
                        }
                        return null;
                    })}
                </div>

                <div className={classes.lookingForAJob}>
                    <div><b>В поиске работы: </b></div>
                    <div>{props.profile.lookingForAJob === false ? "Не в поиске." : "В поиске."}</div>
                    {props.profile.lookingForAJob &&
                        <div>
                            <div>
                                <b>Примечание:</b>
                            </div>
                            <div>
                                {props.profile.lookingForAJobDescription === null ? "Не указано." : props.profile.lookingForAJobDescription}
                            </div>
                        </div>}
                    {props.isOwner && 
                        <div>
                            <input type="file" onChange={handleSavePhoto}></input>
                        </div>
                    }
                </div>
                
                {props.isOwner && <div className={classes.changeInfo}>
                    <button onClick={() => {props.setEditMode(true)}}>Изменить данные</button>
                </div>}

            </div>
        </div>
    </div>
    )
}

export default ProfileInfo;