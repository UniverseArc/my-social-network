import { connect } from "react-redux";
import React from "react";
import { getAuthFromUserThunkCreator, loginThunkCreator, getCaptchaUrlThunkCreator} from "../Redux/authReducer";
import Login from "./Login";
class LoginContainer extends React.Component {
    componentDidMount() {
        debugger
        console.log(this.props.captchaUrl);
        this.props.getAuthFromUserThunkCreator(this.props.UserId)
    }
    render() {
        return <Login captchaUrl={this.props.captchaUrl} isAuth={this.props.isAuth} login={this.props.login} />
    }
}

let mapStateToProps = (state) => {
    return {
        isAuth: state.authUser.isAuth,
        captchaUrl: state.authUser.captchaUrl,
    }
}
export default connect(mapStateToProps, { getAuthFromUserThunkCreator, login: loginThunkCreator, getCaptcha: getCaptchaUrlThunkCreator })(LoginContainer);