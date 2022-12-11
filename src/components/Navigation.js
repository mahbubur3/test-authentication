import React from 'react'
import { NavLink } from 'react-router-dom'

const Navigation = () => {
    return (
        <div className='d-flex sticky-top position-absolute m-3'>
            <div>
                <h4><NavLink to='/' style={({ isActive }) => {
                    return isActive ? { fontWeight: "bold", color: '#65806E' } : { color: '#65806E' }
                }} className='text-decoration-none me-3'>Register</NavLink>
                </h4>
            </div>
            <div>
                <h4><NavLink to='/login' style={({ isActive }) => {
                    return isActive ? { fontWeight: "bold", color: '#65806E' } : { color: '#65806E' }
                }} className='text-decoration-none'>Login</NavLink>
                </h4>
            </div>
        </div>
    )
}

export default Navigation