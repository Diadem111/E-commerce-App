// import { useState } from "react";
// import AddStudent from "./components/AddStudent";
// import ListStudent from "./components/ListStudent";
// import { useEffect } from "react";
// import FormikForm from "./components/FormikForm";
// import { Navigate } from "react-router-dom";
// import {Routes} from "react-router-dom";
// import {Route} from "react-router-dom"
// import About from "./components/About";
// import Contact from "./components/Contact";
// import Transfer from "./components/Transfer";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
// import ContactDetails from "./components/ContactDetails";
// import Effect from "./components/Effect";
const App = ()=>{
  
  // const [allStudents, setallStudents] = useState([])
  // const [editMode, seteditMode] = useState(false)
  // const [currentIndex, setcurrentIndex] = useState('')
  // // const handlefirstname = (e)=>{
  //   setfirstname(e.target.value)
  //   console.log(firstname);
  // }
//   useEffect(() => {
//     if(localStorage.allStudents){
//       setallStudents(JSON.parse(localStorage.allStudents))
//     }else{
//       setallStudents([])
//     }
  
//   }, [])
  
//   const addStudent = (newStudent)=>{
//     setallStudents(()=>{
//       let newAllStudents = [...allStudents,newStudent]
//       localStorage.allStudents = JSON.stringify(newAllStudents)
//       return newAllStudents;
//     })
//     console.log(allStudents);
    
    
//   }
//   const deleteStudent = (index)=>{
//     let newAllStudents = [...allStudents]
//     let updatedStudent = newAllStudents.filter((val,ind)=>(index!=ind))
//     setallStudents(updatedStudent)
//   }
//   const editStudent = (index)=>{
// seteditMode(true)
// let newAllStudent = [...allStudents]
//  let currentStudent = newAllStudent[index];
//  let {firstname,lastname,email,password} = currentStudent
 
//   }
//   const updateDetails =(newStudent)=>{
//     let newAllStudent = [...allStudents]
//     newAllStudent[currentIndex]=newStudent
//     setallStudents(newAllStudent)
//     seteditMode(false)
    
//   }
  return (
    <>
    <NavBar/>
    <Home/>
    {/* <h1>dolapo</h1> */}
    {/* <FormikForm/> */}
    {/* <Effect/>
  
    <Routes>
      <Route path="/about/*" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/transfer" element={<Transfer/>}/>
      <Route path="*" element={<Navigate to="/about"/>}/>
      <Route path="/contact/:id" element={<ContactDetails/>}/>
    </Routes> */}
    {/* <Button title="Edit" color='btn btn-success'/>
    <Button title="Delete" color='btn btn-danger'/>
    <Button title="Rusticate" color='btn btn-primary'/> 
     */}
      {/* <div className="container-fluid">
        <div className="row">
        <div className="col-6 border-right">
          <AddStudent addStudent={addStudent} />
        </div>
        <div className="col-6 border-right">
          <ListStudent allStudents={allStudents} deleteStudent={deleteStudent} editStudent={editStudent}/>
          </div>
            </div>
       </div>  */}
      </>
    
   
  )
  }
  
export default App;
