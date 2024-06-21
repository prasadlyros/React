import { EMPLOYEE } from "./data";
import Header from "./employee/Header";
import Employee from "./employee/Employee";

function EmployeeApp(){
    return(
      <>
      <Header/>
      <main>
        <ul>
          <Employee {...EMPLOYEE[0]}/>
          <Employee {...EMPLOYEE[1]}/>
          <Employee {...EMPLOYEE[2]}/>
          <Employee {...EMPLOYEE[3]}/>
        </ul>
      </main>
      </>
    )
  }
  
  export default EmployeeApp;