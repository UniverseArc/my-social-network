import React from "react";
import { Field, reduxForm } from "redux-form";
import { Input } from "../Utils/TuningForms/TuningForms";
import { requiredField } from "../Utils/Validation/validation";
import styles from "./Login.module.css"
import { Navigate } from "react-router-dom";

const LoginForm = (props) => {
    console.log(props);
    // TO-DO: Redux-Form устарел, заменить на что-то иное.
    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={props.handleSubmit}> 
                <div>
                    <Field name="email" placeholder="email" component={Input} validate={[requiredField]} />
                </div>
                <div>
                    <Field name="password" placeholder="password" component={Input} validate={[requiredField]} />
                </div>
                <div className={styles.checkbox}>
                    <Field name="rememberMe" type={"checkbox"} component={Input} /><div>Remember Me</div>
                </div>
                {props.error && <div className={styles.formError}>
                    <span>{props.error}</span>
                </div>
                }
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
        props.login(formData.email, formData.password, formData.rememberMe)
    }

    if(props.isAuth) return <Navigate to="/profile" />

    return (<ReduxLoginForm onSubmit={onSubmit}/>)
}

export default Login