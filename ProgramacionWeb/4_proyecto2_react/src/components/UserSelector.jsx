const UserSelector = ({users, newUser}) =>{
    return(
        <ul className="flex w-full justify-center gap-4 flex-wrap border border-cyan-800 rounded text-cyan-800">
            {
                users.map(
                    (user)=>{
                        return (
                            <li key={user.id} onClick={
                                () => newUser(user.id)
                            }> {user.username}</li>
                        )
                    })
            }
        </ul>
    )
}

export default UserSelector;