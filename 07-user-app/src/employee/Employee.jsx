function Employee({employeeName, employeeId, position }){
    return(
        <>
        <li>
            employeeName = {employeeName};
            <br />
            employeeId = {employeeId};
            <br />
            position = {position};
        </li>
        </>
    )
}

export default Employee;