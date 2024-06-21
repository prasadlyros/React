function User({username, password, userId}){
    return(
        <>
          <li>
            username = {username}
            <br />
            password = {password}
            <br />
            userId = {userId}
            <br />
          </li>
        </>
    )
}

export default User;