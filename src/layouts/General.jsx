import React from 'react'
import { Outlet } from 'react-router'
import NavBar from '../components/NavBar'

const General = () => {
    return (
      <div>
        <NavBar />
        <Outlet />
      </div>
    );
}

export default General
