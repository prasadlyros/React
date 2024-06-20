const randomPerson = ["Prasad", "Phani", "Prem", "Pavan"];
const randomUserName = ["user1", "user2", "user3", "user4"];

import img from "./assets/react.svg";

function getRandomPerson(max){
    return Math.floor(Math.random() * (max+1));
}

function getRandomUserName(){
    return Math.floor(Math.random() * randomUserName.length);
}

function Header(){
    const person = randomPerson[getRandomPerson(3)];

    return(
        <>
      <header>
        <p><strong>{person}</strong> logged in</p>
        <img src={img} alt="image" />
      </header>

      <Main />
      </>  
    )
}

function Main(){
    const user = randomUserName[getRandomUserName(3)];

    return(
        <>
        <main>
            <p>User has been logged with username {user}</p>
        </main>

        <Footer />
        </>
    );
}
function Footer(){
    return(
        <footer>
            <p>&copy; All rights reserved</p>
        </footer>
    );
}
function App(){
    return(
    <>
    <Header />
    
    </>
    );
}

export default App;