import React from "react";
import styles from "../Users.module.css";
import userAvatar from "../../../img/userDef.png"
import { NavLink } from "react-router-dom";
const UsersMapHelper = (el) => {

    let onClickUnFollowFromUserCB = () => {
        
        el.unFollowFromUserCB(el.id)
        // | | |
        // v v v
        // ДО САНОК
        // el.toogleFollowingProcessCB(true, el.id)
        // // axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${el.id}`, { withCredentials: true, headers: { "API-KEY": "e861c4af-275c-4aad-889e-cfadcd67407a" } })
        // // | | |
        // // v v v
        // usersAPI.deleteFollowOnUser(el.id).then(response => {
        //     if (response.data.resultCode === 0) {
        //         el.unFollowFromUserCB(el.id)
        //     }
        //     el.toogleFollowingProcessCB(false, el.id)
        // })
    }
    let onClickFollowOnUserCB = () => {
        
        el.followOnUserCB(el.id)
        // | | |
        // v v v
        // ДО САНОК
        // el.toogleFollowingProcessCB(true, el.id)
        // // axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${el.id}`, {}, { withCredentials: true, headers: { "API-KEY": "e861c4af-275c-4aad-889e-cfadcd67407a" } })
        // // | | |
        // // v v v
        // usersAPI.postFollowOnUser(el.id).then(response => {
        //     if (response.data.resultCode === 0) {
        //         el.followOnUserCB(el.id)
        //     }
        //     el.toogleFollowingProcessCB(false, el.id)
        // })
    }
    return (
        <div key={el.id} className={styles.userInfo_wrapper}>
            <div className={styles.userAvatarAndButton}>
                <NavLink to={"/profile/" + el.id}>
                    <img className={styles.userAvatar} src={el.photos.small ? el.photos.small : userAvatar} alt="Avatar" />
                </NavLink>
                <br />
                {el.followed ?
                    <button disabled={el.followingInProgress.some(id => id === el.id)} onClick={onClickUnFollowFromUserCB}>Unfollow</button> :
                    <button disabled={el.followingInProgress.some(id => id === el.id)} onClick={onClickFollowOnUserCB}>Follow</button>}

            </div>

            <div className={styles.userInfo_inside}>

                <div className={styles.userInfo_inside_name_status}>
                    <div><b>{el.name}</b></div>
                    <div className={styles.userInfo_inside_name_status_div2}>{el.status}</div>
                </div>

                <div className={styles.userInfo_inside_location}>
                    {/* <div>{el.location.city},</div> */}
                    {/* <div>{el.location.country}</div> */}
                </div>

            </div>
        </div>
    )
}

export default UsersMapHelper;