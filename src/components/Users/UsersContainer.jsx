import { connect } from "react-redux";
import {followThunkCreator, getUsersThunkCreator, nullUsersData, unFollowThunkCreator } from "../Redux/usersReducer";
import React from "react";
import UsersFC from "./UsersFC";
import { getCount, getCurrentPage, getData, getFollowingProcess, getPageSize, getisAxiosing } from "../Redux/Selectors/usersSelectors";

class UsersClassComponent extends React.Component {
    componentDidMount() {
        // getUsers - это коллбек. Просто напоминаю. И уже передавая параметры в колбек, тот, по вызову componentDidMount - засунет их в getUsersThunkCreator.
        // И так для всех остальных санок.
        this.props.getUsers(this.props.currentPage, this.props.pageSize) 
        // | | |
        // V V V
        // this.props.togglerIsAxiosing(false)
        // usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
        //     this.props.togglerIsAxiosing(true)
        //     this.props.sendUsersCB(data.items)
        // })
    }

    onChangedPage = (steppedPage) => {
        this.props.nullUsersData();
        this.props.getUsers(steppedPage, this.props.pageSize)
        // | | |
        // V V V
        // usersAPI.getUsers(steppedPage, this.props.pageSize).then(data => {
        //     this.props.togglerIsAxiosing(true)
        //     this.props.sendUsersCB(data.items)
        // })
    }

    render() {
        return (
            <>
                <UsersFC TotalUsersCount={this.props.TotalUsersCount}
                    pageSize={this.props.pageSize}
                    currentPage={this.props.currentPage}
                    usersData={this.props.usersData}
                    followOnUserCB={this.props.followOnUserCB}
                    unFollowFromUserCB={this.props.unFollowFromUserCB}
                    onChangedPage={this.onChangedPage}
                    followingInProgress={this.props.followingInProgress}
                />
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        usersData: getData(state),
        currentPage: getCurrentPage(state),
        pageSize: getPageSize(state),
        TotalUsersCount: getCount(state),
        isAxiosing: getisAxiosing(state),
        followingInProgress: getFollowingProcess(state),
    }
}
// const mapDispatchToProps = (dispatch) => {
//     return {
//         followOnUserCB: (userId) => {
//             dispatch(followOnUserAC(userId))
//         },
//         unFollowFromUserCB: (userId) => {
//             dispatch(unFollowFromUserAC(userId))
//         },
//         sendUsersCB: (users) => {
//             dispatch(sendUsersAC(users))
//         },
//         getSteppedPageFromUserCB: (steppedPage) => {
//             dispatch(getSteppedPageFromUserAC(steppedPage))
//         },
//         togglerIsAxiosingCB: (isAxiosing) => {
//             dispatch(togglerIsAxiosingAC(isAxiosing))
//         }
//     }
// }
const UsersContainer = connect(mapStateToProps,
    {
        // followOnUserCB: followOnUser,
        // unFollowFromUserCB: unFollowFromUser,
        // | | |
        // v v v
        followOnUserCB: followThunkCreator,
        unFollowFromUserCB: unFollowThunkCreator,
        getUsers: getUsersThunkCreator, 

        nullUsersData, //Так максимально правильно, но переписывать остальные долго и много, оставил для примера.
    })(UsersClassComponent)

export default UsersContainer