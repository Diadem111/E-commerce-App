import React from 'react'
export default function ListStudent({allStudents,deleteStudent,editStudent}) {
  return (
    <>
    <div className="col-6">
            <h1 className="text-center">List Of Student</h1>
            <table className="table table-striped table-border">
              <tr>
                <th>S/N</th>
                <th>Firstname</th>
                <th>lastname</th>
                <th>email</th>
                <th>Actions</th>
              </tr>
              </table>
            {allStudents.map((val,index)=>(
              <tr key={index}>
                <td>{index+1}</td>
                <td>{val.firstname}</td>
                <td>{val.lastname}</td>
                <td>{val.email}</td>
                <td>
                  <button className="btn btn-danger" onClick={()=>deleteStudent(index)}>Delete</button>
                  <button className="btn btn-warning" onClick={()=>editStudent(index)}>Edit</button>
                </td>
              </tr>
               
            ))}
            </div>

    </>
  )
}
