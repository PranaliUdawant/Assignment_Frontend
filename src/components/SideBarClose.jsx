import React, { useState } from 'react'

export default function SideBarClose({ handleClick }) {

    return (
        <>
            <button onClick={handleClick} className='btn'><i style={{ cursor: "pointer" }} className="fs-2 mt-1 bi bi-list"></i></button>
        </>
    )
}
