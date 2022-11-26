import React from 'react'
import Signup from './component/Signup';
import './App.css';
const App = () => {
  return (
    <div className='container mt-3'>
      <div className='row'>
        <div className='col-md-6 my-auto'>
          <img src='' />
        </div>
        <div className='col-md-6'>
          <Signup />
        </div>
      </div>
    </div>
  )
}

export default App