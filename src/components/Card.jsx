import React from 'react'

export default function Card({ count, heading }) {
    return (
        <>
            <div style={{ height: "130px", width: "370px", backgroundColor: "white", borderRadius: "20px" }} className="container mt-5">
                <div className='mt-3 d-flex gap-5' style={{ height: "100px", width: "100px", backgroundColor: "rgb(228, 247, 228)", borderRadius: "10px" }}>
                    <i style={{ fontSize: "60px", color: "#059862" }} className="p-3  bi bi-person"></i>
                    <div className='mt-2'>
                        <h4>{count}</h4>
                        <h6>{heading}</h6>
                    </div>
                </div>

            </div>
        </>
    )
}
