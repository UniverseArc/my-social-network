import React from "react";

class MyStatus extends React.Component {
    state = {
        editMode: false,
        status: this.props.status
    }
    activeEditMode = () => { // Правильнее писать так
        this.setState({
            editMode: true
        })
    }
    deactiveEditMode(){
        this.setState({
            editMode: false
        })
        this.props.updateStatus(this.state.status)
    }
    onChangeUpdateStatus = (e) => {
        this.setState({
            status: e.currentTarget.value
        })
    }

    componentDidUpdate(prevProps, prevState){
        // if(prevProps.status !== this.props.status){
        //     this.setState({
        //         status: this.props.status
        //     })
        // }
    }
    render() {
        return (
            <div>
                {this.state.editMode === false &&
                    <span onDoubleClick={this.activeEditMode}>{this.props.status || "Установить статус?"}</span>
                }
                {this.state.editMode === true &&
                    <input onChange={this.onChangeUpdateStatus} autoFocus={true} onBlur={this.deactiveEditMode.bind(this)} type="text" value={this.state.status} />
                }
            </div>
        )
    }
}

export default MyStatus;