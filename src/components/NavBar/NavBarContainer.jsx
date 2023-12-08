import { connect } from "react-redux";
import NavBar from "./NavBar";
// return <StoreContext.Consumer>
//     {store => {
//         return (<NavBar friendsInSidebarData={store.getState().SideBar.friendsInSidebarData} />)
//     }
//     }
// </StoreContext.Consumer>

let mapStateToProps = (state) => {
    return {
        friendsInSidebarData: state.SideBar.friendsInSidebarData,
    }
}
const NavBarContainer = connect(mapStateToProps, {})(NavBar);


export default NavBarContainer;