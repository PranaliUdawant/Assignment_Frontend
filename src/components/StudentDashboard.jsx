import React, { useEffect, useState } from 'react'
import axios from 'axios'
import SideBarClose from './SideBarClose'
export default function StudentDashboard({ handleClick }) {
    const [doctors, setdoctors] = useState([])
    const getAllDoctor = async e => {
        const result = await axios.get("http://localhost:5000/doctors")
        console.log(result);
        console.warn(result.data);
        setdoctors(result.data)
        console.log("doctors", doctors);
    }
    useEffect(() => {
        getAllDoctor()
    }, [])

    return (
        <>
            <div className="container mt-5">
                <div className='d-flex'>
                    <SideBarClose handleClick={handleClick} />
                    <h1>Doctors</h1>
                </div>
                <div className='d-flex justify-content-between'>
                    <div className='d-flex'>
                        <p className='d-flex gap-2'>Show <input type="number" className='form-control w-25' /> entries </p>
                    </div>
                    <div className='d-flex gap-4'>
                        <input type="text" placeholder='Search' className='form-control w-50 h-75' />
                        <button className='btn btn-success h-75'>+ Add New</button>
                    </div>
                </div>

                <table class="table">
                    <thead>
                        <tr>
                            <th>name</th>
                            <th>Batch No</th>
                            <th>Location</th>
                            <th>Experience</th>
                            <th>ContactNo</th>
                        </tr>
                    </thead>
                    <tbody>
                        {doctors.map((item) => (
                            <tr >
                                <td>{item.name}</td>
                                <td>{item.BatchNo}</td>
                                <td>{item.Location}</td>
                                <td>{item.Experience}</td>
                                <td>{item.ContactNo}</td>
                            </tr>
                        ))

                        }
                    </tbody>
                </table>
            </div>


        </>
    )
}
