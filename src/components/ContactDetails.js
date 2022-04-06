import React from 'react';
import { useParams } from 'react-router-dom';
import { useState } from 'react';

export default function ContactDetails() {
    const [allStudents,setallStudents] = useState([
        {name:'kunle'},
        {name:'kola'},
        {name:'dolapo'},
        {name:'femi'}
    ])
    let {id} = useParams()
  return (
    <div>ContactDetails {allStudents[id]}</div>
  )
}
