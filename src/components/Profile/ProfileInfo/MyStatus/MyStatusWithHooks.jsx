import React, { useEffect, useState } from "react";
import styles from "./MyStatusWithHooks.module.css";

const MyStatusWithHooks = (props) => {
    const [editMode, setEditMode] = useState(false)
    const [status, setStatus] = useState(props.status)
    useEffect(() => {
        setStatus(props.status)
    }, [props.status])
    const activeEditMode = () => {
        setEditMode(true)
    }
    const deactiveEditMode = () => {
        setEditMode(false)
        props.updateStatus(status)
    }
    const onChangeUpdateStatus = (e) => {
        setStatus(e.currentTarget.value)
    }
    return (
        <div>
            {!editMode &&
                <span className={styles.statusCursor} onDoubleClick={activeEditMode}>{props.status || "Установить статус?"}</span>
            }
            {editMode &&
                <input onChange={onChangeUpdateStatus} autoFocus={true} onBlur={deactiveEditMode} type="text" value={status}></input>
            }
        </div>
    )
}

export default MyStatusWithHooks;