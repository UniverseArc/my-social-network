import { connect } from "react-redux";
import ListOfDialogs from "./ListOfDialogs";

    // return <StoreContext.Consumer>
    //     {store => {
    //         return (<ListOfDialogs usersData={store.getState().chattingPage.usersData} />)
    //     }
    //     }
    // </StoreContext.Consumer>
    
    let mapStateToProps = (state) => {
        return {
            usersData: state.chattingPage.usersData
        }
    }
    const ListOfDialogsContainer = connect(mapStateToProps, {})(ListOfDialogs)


export default ListOfDialogsContainer;