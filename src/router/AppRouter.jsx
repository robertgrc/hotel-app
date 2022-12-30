import React from 'react'
import{Route, Routes} from "react-router-dom"
import { AuthRoutes } from '../auth/routes/AuthRoutes'
import { HotelRoutes } from '../hotel/routes/HotelRoutes'


export const AppRouter = () => {
  return (
    <Routes>
        {/*Login y registro */}
        <Route path="/auth/*" element={<AuthRoutes/>}/>
        
        {/*HotelApp */}
        <Route path='*' element={<HotelRoutes/>}/>
    </Routes>
  )
}
