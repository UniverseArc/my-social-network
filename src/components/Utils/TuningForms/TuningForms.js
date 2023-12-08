import styles from "./TuningForms.module.css"
export const TextArea = ({input, meta, ...props}) => {
    let isError = meta.touched && meta.error
    return(
        <div className={isError ? styles.textareaBorder : ""}>
            <div className={styles.textareaFix}>
                <textarea {...input} {...props} />
            </div>
            {isError && <span className={styles.errorMessage}>{meta.error}</span>}
        </div>
    )
}

export const Input = ({input, meta, ...props}) => {
    let isError = meta.touched && meta.error
    return(
        <div className={isError ? styles.inputBorder : ""}>
            <div>
                <input {...input} {...props} />
            </div>
            {isError && <span className={styles.errorMessage}>{meta.error}</span>}
        </div>
    )
}