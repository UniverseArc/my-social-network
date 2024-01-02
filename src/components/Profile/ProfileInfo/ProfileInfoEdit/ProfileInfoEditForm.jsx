
import classes from "./ProfileInfoEdit.module.css"
import userAvatar from "../../../../img/userDef.png"
import { Field, reduxForm } from "redux-form";
import Preloader from "../../../common/preloader/preloader";
import { Input, TextArea, customField } from "../../../Utils/TuningForms/TuningForms";
const ProfileInfoEdit = ({ profile, isAxiosing, authorizedUserId, status, updateStatus, handleSubmit, initialValues, error }) => {
    if (!profile || isAxiosing) {
        return <div className={classes.preloaderStyles_Profile}><Preloader /></div>
    }
    const objectArray = Object.entries(profile.contacts);

    return (
        <form onSubmit={handleSubmit} className={classes.profileInfoContainer}>
            <div className={classes.avatarPlusDescriptionZone}>
                <img className={classes.userAvatarStyle} src={profile.photos.large === null ? userAvatar : profile.photos.large} alt="Avatar of User"></img>
                <div className={classes.userInfoArea}>
                    {error && <div className={classes.formError}>
                        <span>{error}</span>
                    </div>
                    }
                    <div className={classes.userInfoAreaBlock}>
                        <div className={classes.aboutMe && classes.fullNameUser}>Никнейм:</div>
                        {/* <div className={classes.aboutMe && classes.fullNameUser}>{profile.fullName}</div> */}
                        <div className={classes.aboutMe && classes.fullNameUser}>{customField("fullName", "", Input, [], "", {}, "")}</div>
                    </div>

                    <div className={classes.userInfoAreaBlock}>
                        <div className={classes.aboutUserTitle}><b>О пользователе:</b></div>
                        {profile.userId === authorizedUserId &&
                            <div className={classes.aboutMe}>
                                {/* <div>{profile.aboutMe === null ? "Не указано." : profile.aboutMe}</div> */}
                                {customField("aboutMe", "", TextArea, [], "", {}, "")}

                                {/* TO-DO - Решить, нужен статус в эдит или нет */}
                                {/* <div>Статус: </div> */}
                                {/* <MyStatusWithHooks status={status} updateStatus={updateStatus}/>  */}
                            </div>
                        }
                    </div>


                    <div className={classes.userInfoAreaBlock}>
                        <div className={classes.aboutUserTitle}><b>Контакты:</b></div>
                        <div className={classes.aboutMe}>
                            {objectArray.map(([key, value]) => {
                                return <div key={key} >{customField(`contacts.` + key, key, Input, [], "", {}, "")}</div>;
                                // return <div> {key}: <a target="blank" key={`link_${key}`} href={httpsCheck(value)}>{value}</a></div>
                            })}
                        </div>

                        <div className={classes.lookingForAJob}>
                            <div><b>В поиске работы:</b></div>
                            {/* <div>{profile.lookingForAJob === false ? "Не в поиске." : "В поиске."}</div> */}
                            {customField("lookingForAJob", "", Input, [], "", { type: "checkbox" }, "")}
                            <div>
                                <div>
                                   <b> Примечание:</b>
                                </div>
                                <div>
                                    {/* {profile.lookingForAJobDescription === null ? "Не указано." : profile.lookingForAJobDescription} */}
                                    {customField("lookingForAJobDescription", "", TextArea, [], "", {}, "")}
                                </div>
                            </div>
                        </div>

                    </div>
                    <div>
                        <button>Отправить</button>
                    </div>
                </div>
            </div>
        </form>
    )
}

let ProfileInfoEditForm = reduxForm({ form: 'edit-profile', enableReinitialize: true, keepDirtyOnReinitialize: true })(ProfileInfoEdit)

export default ProfileInfoEditForm; 