import React, { useState } from 'react'
import AdminDashBoard from './AdminDashBoard'
import StudentDashboard from './StudentDashboard'
import style from "./../style.css"
export default function SideBar({ setshow, show, close }) {
    return (
        <>
            <div className={close ? "sidebar collapse" : "sidebar  col-md-3 col-lg-2 sidebar-offcanvas pl-0"} role="navigation" style={{ backgroundColor: "#059862", height: "100vh" }}>

                <ul className="nav flex-column sticky-top pl-0 pt-5 p-3 mt-3 ">
                    <img style={{ height: "50px" }} className='' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-zO8VivXQEPOwrZhaEAXF5Z-zu09DNxM2h6R1VhiNwb61uDE5-9umYLOUah4CkE8i6eE&usqp=CAU" alt="" />
                    <hr />
                    <div class="dropdown">
                        <div>
                            <a class="btn text-light font-weight-bold dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                                Ashish Kumar
                            </a>

                            <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                <li><a class="dropdown-item" href="#">Admin</a></li>
                                <li><a class="dropdown-item" href="#">Student</a></li>
                            </ul>
                        </div>

                        <span className='p-3 text-light'>admin</span>
                    </div>

                    <hr />
                    <li className="nav-item mb-2 "><a className="nav-link text-light" href="#"><i className="fs-4  bi bi-house-door"></i> <button onClick={() => setshow(!show)} className="btn text-light ml-3 ">DashBoard</button></a></li>
                    <li className="nav-item mb-2"><a className="nav-link text-light" href="#"><i className="far fa-chart-bar font-weight-bold"></i> <button onClick={() => setshow(!show)} className="ml-3 btn text-light">Approvals</button></a></li>
                    <li className="nav-item mb-2"><a className="nav-link text-light" href="#"><i className="fas fa-file-export font-weight-bold"></i><button className="ml-3 btn text-light">Contact Us</button></a></li>
                    <li className="nav-item mb-2"><a className="nav-link text-light" href="#"><i className="fas fa-tablet-alt font-weight-bold"></i><button className="ml-3 btn text-light">Members</button></a></li>

                </ul>
            </div>
        </>
    )
}
