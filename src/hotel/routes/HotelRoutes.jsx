import {Navigate, Routes, Route} from "react-router-dom"
import Contact from "../../Components/Contact/Contact"
import FormContact from "../../Components/Forms/FormContact"
import { HotelPage } from "../pages/HotelPage"

export const HotelRoutes = () => {
  return (
    <Routes>

        <Route path="/" element={<HotelPage />} />
        <Route path="/reserva" element={<Contact />} />
        <Route path="/registroHotel" element={<FormContact />} />

        <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  )
}
