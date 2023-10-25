const UserList=(props)=>{
    const{list,onDeleteUser}=props
    const{name,uniqueNo}=list
    
    const deleteUser=()=>{
        onDeleteUser(uniqueNo)
    }

    return(
        <li>
            <p>{name}</p>
            <button type="button" onClick={deleteUser()}>x</button>
        </li>
    )
}

export default UserList