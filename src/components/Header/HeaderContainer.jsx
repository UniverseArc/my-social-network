import { connect } from "react-redux";
import Header from "./Header";
import React from "react";
import { getAuthFromUserThunkCreator, logoutThunkCreator,} from "../Redux/authReducer";
class HeaderContainer extends React.Component {
    componentDidMount() {
        
        // this.props.getAuthFromUserThunkCreator(this.props.UserId)
        // | | |
        // v v v
        
        // // axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, { withCredentials: true })
        // // | | |
        // // v v v 
        // headerAPI.getAuthFromCurrentUser().then(data => {
        //     if (data.resultCode === 0) {
        //         this.props.isUserLogin(data.data)
        //     }
        //     else {
        //         alert("Ошибка логина!")
        //     }
        // })
        //     .then(userAvatar => { //TO-DO: ! ЦЕПОЧКА ПЛОХО ПОЛУЧИЛАСЬ, ПЕРЕПИСАТЬ !
        //         if (this.props.UserId !== null) {
        //             // axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${this.props.UserId}`)
        //             // | | |
        //             // v v v
        //             headerAPI.getUserIdToIdentify(this.props.UserId).then(data => {
        //                 this.props.getUserAvatar(data.photos.small)
        //             })
        //         }
        //         else {
        //             alert("Не можем получить данные! Срочно залогиньтесь!")
        //         }
        //     })
    }
    render() {
        return <Header {...this.props} />
    }
}

let mapStateToProps = (state) => {
    return {
        email: state.authUser.email,
        login: state.authUser.login,
        isAuth: state.authUser.isAuth,
        userAvatar: state.authUser.userAvatar,
        userProfile: state.authUser.userProfile,
    }
}
export default connect(mapStateToProps, { getAuthFromUserThunkCreator, logout: logoutThunkCreator })(HeaderContainer);