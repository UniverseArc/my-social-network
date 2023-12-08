import Dialogs from './Dialogs';
import withComponentRedirect from '../Utils/High Order Component/withAuthRedirect';
import { compose } from 'redux';

// let mapStateToProps = (state) => {
//     return {
//         isAuth: state.authUser.isAuth,
//     }
// }
// const DialogsContainer = connect(mapStateToProps, {})(Dialogs);
// | | |
// v v v
// #Before Compose пишем всего лишь vvv
// const DialogsContainer = withComponentRedirect(Dialogs)

// #After Compose vvv
export default compose(
    withComponentRedirect
)(Dialogs);