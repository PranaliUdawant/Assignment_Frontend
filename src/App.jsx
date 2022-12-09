import React, { useState } from 'react'
import AdminDashBoard from './components/AdminDashBoard'
import SideBar from './components/SideBar'
import StudentDashboard from './components/StudentDashboard'

export default function App() {
  const [show, setshow] = useState(true)
  const [close, setclose] = useState(false)
  const handleClick = () => {
    setclose(!close)
  }
  return (
    <>
      <div className="container-fluid" id="main">
        <div className="row row-offcanvas row-offcanvas-left">
          <div className='d-flex'>
            <SideBar close={close} setshow={setshow} show={show} />
            {
              show ? <AdminDashBoard handleClick={handleClick} /> : <StudentDashboard handleClick={handleClick} />
            }


          </div>
        </div>
      </div>
    </>
  )
}
