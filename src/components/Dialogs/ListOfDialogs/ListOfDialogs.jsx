import UserListOfContacts from './UserListOfContacts/UserListOfContacts';
const ListOfDialogs = (props) => {
        let arrayOfListUsers = props.usersData.map(el => <UserListOfContacts name={el.name} id={el.id} userAvatarContacts={el.userAvatarContacts}/>)
    return (
        <div>
            {arrayOfListUsers}
        </div>
    );
}

export default ListOfDialogs;