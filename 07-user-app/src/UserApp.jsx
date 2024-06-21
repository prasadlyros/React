import { USERS } from "./data"
import User from "./users/User"
import Header from "./users/Header"

function UserApp(){
  return(
    <>
    <Header />
    <main>
      <ul>
        <User {...USERS[0]}/>
        <User {...USERS[1]}/>
        <User {...USERS[2]}/>
        <User {...USERS[3]}/>
      </ul>
    </main>
    </>
  )
}

export default UserApp;