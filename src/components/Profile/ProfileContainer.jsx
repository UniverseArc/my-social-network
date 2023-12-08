
import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { getProfileThunkCreator, getStatusThunkCreator, updateStatusThunkCreator } from "../Redux/profileReducer";
import { compose } from "redux";
import withRouter from "../Utils/High Order Component/withRouter";

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.router.params.profiled
        if(!userId) {
            userId = this.props.authorizedUserId
            if(!userId){   
                // СДЕЛАЛ!!!! https://stackoverflow.com/questions/58622844/unable-to-access-the-history-from-the-props-in-a-component-in-react
                this.props.router.navigate("/login")
                // this.props.history... 
                //не могу сделать "программный редирект", т.к. withRouter из хуков. И он в пропсы не кидает свойства history, location.. etc. См. 80. 33:17
            }
        }
        this.props.getProfile(userId)
        this.props.getStatus(userId)
        // | | |
        // v v v
        // let profiled = this.props.router.params.profiled;
        // if (!profiled){
        //     profiled = 30090; 
        //     // TO-DO: Пока что профиль захардкожен, поэтому даже неавторизованный буду на свой профиль попадать.
        // }
        // // axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${profiled}`)
        // // | | |
        // // v v v
        // profileAPI.getProfile(profiled).then(data => {
        //     this.props.setUserProfile(data)
        // })
    }
    render() {
        return (
            <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus} />
        )
    }
}


let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        authorizedUserId: state.authUser.userId,
        isAuth: state.authUser.isAuth,
    }
}

// #Compose-Optimisation vvv
// let checkOnAuthComponent = withComponentRedirect(ProfileContainer)
// export default connect(mapStateToProps, {getProfile: getProfileThunkCreator})(withRouter(checkOnAuthComponent))

export default compose(
    connect(mapStateToProps, { getProfile: getProfileThunkCreator, getStatus: getStatusThunkCreator, updateStatus: updateStatusThunkCreator }),
    withRouter,
    // Убрал защиту с целью отработать её через "Программный редирект, см. 80 видос 33:34"
    // withComponentRedirect, 
)(ProfileContainer)