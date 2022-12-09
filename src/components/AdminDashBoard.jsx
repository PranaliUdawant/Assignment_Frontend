import React from 'react'
import Card from './Card'
import SideBarClose from './SideBarClose'


export default function AdminDashBoard({ handleClick }) {
    return (
        <>
            <div className="container mt-5">
                <div className='d-flex gap-2'>
                    <SideBarClose handleClick={handleClick} />
                    <h1>Dashboard</h1>
                </div>
                <div className='d-flex gap-3 pt-3'>
                    <input type="text" className='form-control w-50 p-3' placeholder='Batch No.' />
                    <input type="text" className='form-control w-50 p-3' placeholder='Name' />
                    <input type="text" className='form-control w-50 p-3' placeholder='Designation' />
                    <button className='btn btn-success w-50 p-3'>Search</button>
                </div>
                <div className="row mt-5">
                    <Card count={"1000+"} heading={"Total Registered Number"} />
                    <Card count={"6"} heading={"Request Pending"} />
                    <Card count={"500+"} heading={"CA"} />
                    <Card count={"500+"} heading={"Lawyers"} />
                    <Card count={"100+"} heading={"Doctors"} />
                    <Card count={"100+"} heading={"Doctors"} />
                </div>
            </div>
        </>
    )
}
