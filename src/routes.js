import React from 'react'
import { useRoutes } from 'react-router-dom'
import Dashboard from './component/dashboard/Dashboard'
import Dest from './component/destination/Dest'

export default function Router() {
    const routes = useRoutes([
        {
            path: '/',
            element: <Dashboard />
        },
        {
            path: '/dest',
            element: <Dest />
        }
    ])
  return routes
}
