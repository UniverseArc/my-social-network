import { connect } from "react-redux";
import React from "react";
import { getAuthFromUserThunkCreator, loginThunkCreator,} from "../Redux/authReducer";
import Login from "./Login";
class LoginContainer extends React.Component {
    componentDidMount() {
        this.props.getAuthFromUserThunkCreator(this.props.UserId)
    }
    render() {
        return <Login isAuth={this.props.isAuth} login={this.props.login} />
    }
}

let mapStateToProps = (state) => {
    return {
        isAuth: state.authUser.isAuth,
    }
}
export default connect(mapStateToProps, { getAuthFromUserThunkCreator, login: loginThunkCreator })(LoginContainer);