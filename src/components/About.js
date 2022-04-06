import React from 'react';
import {Route,Routes} from 'react-router-dom';
import More from './More';

export default function About() {
  return (
    <div>
      <h1>About</h1>  
        <Routes>
      <Route path='/more' element={<More/>}/>
    </Routes>
    </div>

  )
}
