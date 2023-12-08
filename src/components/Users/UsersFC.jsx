import React from "react";
import UsersMapHelper from "./UsersMapHelper/UsersMapHelper";
import styles from "./Users.module.css";
import Preloader from "../common/preloader/preloader";

const UsersFC = (props) => {
    let createPagesSelectRow = Math.ceil(props.TotalUsersCount / props.pageSize);
    console.log(props.TotalUsersCount);
    console.log(createPagesSelectRow);

    let placementPagesRow = [];
    for (let i = 1; i <= createPagesSelectRow; i++) {
        placementPagesRow.push(i)
    }

    let arrayOfUsers = props.usersData.map(el =>
        <UsersMapHelper
            id={el.id}
            photos={el.photos}
            followed={el.followed}
            name={el.name}
            status={el.status}
            // location={el.location} 
            followOnUserCB={props.followOnUserCB}
            unFollowFromUserCB={props.unFollowFromUserCB}
            followingInProgress={props.followingInProgress}
            toogleFollowingProcessCB={props.toogleFollowingProcessCB}
        />)

    return (
        (
            <div>
                <div>
                    <p className={styles.usersTitle}>Users</p>
                    <div>
                        {props.isAxiosing === false ?
                            <div className={styles.usersBody_preloader}><Preloader /></div> : null}
                        {arrayOfUsers}
                        <div className={styles.showMore}>
                            {placementPagesRow.map(page => (
                                <span className={props.currentPage === page ? styles.placementPagesSelectRow_currentSpan : undefined}
                                    onClick={() => { props.onChangedPage(page) }}>{page}</span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        )
    )
}

export default UsersFC;