import React from "react";
import UsersMapHelper from "./UsersMapHelper/UsersMapHelper";
import styles from "./Users.module.css";
import axios from "axios";
const Users = (props) => {
const getUsers = () => {
    if (props.usersData.length === 0) {
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            props.sendUsersCB(response.data.items)
        })
    }
}
    let arrayOfUsersList = props.usersData.map(el =>
        <UsersMapHelper
            id={el.id}
            photos={el.photos}
            follow={el.follow}
            name={el.name}
            // status={el.status}
            // location={el.location} 
            followOnUserCB={props.followOnUserCB}
            unFollowFromUserCB={props.unFollowFromUserCB}
        />)

    return (
        <div>
            <div>
                <p className={styles.usersTitle}>Users</p>
                <div>
                    <button onClick={getUsers}>Get Users</button>
                    {arrayOfUsersList}
                    <div className={styles.showMore}>
                        Show more
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Users;