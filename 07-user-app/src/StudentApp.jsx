import { STUDENT } from "./data";
import Header from "./student/Header";
import Student from "./student/Student";

function App(){
  return(
    <>
    <Header/>
    <main>
      <ul>
        <Student {...STUDENT[0]}/>
        <Student {...STUDENT[1]}/>
        <Student {...STUDENT[2]}/>
        <Student {...STUDENT[3]}/>
      </ul>
    </main>
    </>
  )
}

export default App;