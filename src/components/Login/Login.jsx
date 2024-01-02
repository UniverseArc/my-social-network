import React from "react";
import { reduxForm } from "redux-form";
import { Input, customField } from "../Utils/TuningForms/TuningForms";
import { requiredField } from "../Utils/Validation/validation";
import styles from "./Login.module.css"
import { Navigate } from "react-router-dom";

const LoginForm = ({handleSubmit, error, captchaUrl}) => {
    debugger
    // TO-DO: Redux-Form устарел, заменить на что-то иное.
    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}> 
                {customField("email", "email", Input, [requiredField], "")}
                {customField("password", "password", Input, [requiredField], "", {type: "password"})}
                {/* Пример рефактора */}
                {/* <div className={styles.checkbox}>
                    <Field name="rememberMe" type={"checkbox"} component={Input} /><div>Remember Me</div>
                </div> */}
                {customField("rememberMe", "", Input, "", styles.checkbox, {type: "checkbox"}, "Remember me")}
                {error && <div className={styles.formError}>
                    <span>{error}</span>
                </div>
                }
                {captchaUrl && <img src={captchaUrl} alt="CaptchaPic"/>}
                {captchaUrl && customField("captcha", "Enter symbols here: ", Input, [requiredField], "")}
                <div>
                    <button>Отправить</button>
                </div>
            </form>
        </div>
    )
}

const ReduxLoginForm = reduxForm({
    form: 'login'
})(LoginForm) 

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe, formData.captcha) //
    }

    if(props.isAuth) return <Navigate to="/profile" />

    return (<ReduxLoginForm  captchaUrl={props.captchaUrl} onSubmit={onSubmit}/>)
}

export default Login