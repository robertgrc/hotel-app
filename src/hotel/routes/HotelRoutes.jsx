import {Navigate, Routes, Route} from "react-router-dom"
import Contact from "../../Components/Contact/Contact"
import FormReserva from "../../Components/FormReserva/FormReserva"
import FormContact from "../../Components/Forms/FormContact"
import FormTarjetaRegistro from "../../Components/FormTarjetaRegistro/FormTarjetaRegistro"
import { HotelPage } from "../pages/HotelPage"

export const HotelRoutes = () => {
  return (
    <Routes>

        <Route path="/" element={<HotelPage />} />
        <Route path="/reserva" element={<Contact />} />
        <Route path="/registroUsuario" element={<FormContact />} />
        <Route path="/registroReserva" element={<FormReserva />} />
        <Route path="/registroTarjeta" element={<FormTarjetaRegistro />} />
        <Route path="/hotelpage" element={<HotelPage />} />
        

        <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  )
}
