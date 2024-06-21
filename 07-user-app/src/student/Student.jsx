function Student({sudentName, studentId, university}){
    return(
        <>
          <li>
            studentName = {sudentName}
            <br />
            studentId = {studentId}
            <br />
            university = {university}
            <br />
          </li>
        </>
    )
}

export default Student;