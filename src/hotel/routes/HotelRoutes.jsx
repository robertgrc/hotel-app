import {Navigate, Routes, Route} from "react-router-dom"
import Contact from "../../Components/Contact/Contact"
import FormReserva from "../../Components/FormReserva/FormReserva"
import FormContact from "../../Components/Forms/FormContact"
import { HotelPage } from "../pages/HotelPage"

export const HotelRoutes = () => {
  return (
    <Routes>

        <Route path="/" element={<HotelPage />} />
        <Route path="/reserva" element={<Contact />} />
        <Route path="/registroUsuario" element={<FormContact />} />
        <Route path="/registroReserva" element={<FormReserva />} />

        <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  )
}
