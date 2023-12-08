import React from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";

let mapStateToProps = (state) => {
    return {
        isAuth: state.authUser.isAuth
    }
}

const withComponentRedirect = (Component) => {
    class AuthRedirectCreator extends React.Component {
        render() {
            if (!this.props.isAuth) {
                return <Navigate to="/login" />
            }
            else{
                return <Component {...this.props} />
            }
        }
    }

    let ConnectedAuthRedirectComponent = connect(mapStateToProps, {})(AuthRedirectCreator)
    return ConnectedAuthRedirectComponent
}

export default withComponentRedirect;