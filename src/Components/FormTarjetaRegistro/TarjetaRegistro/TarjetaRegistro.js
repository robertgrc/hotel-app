// import React from 'react'

// const TarjetaRegistro = () => {
//   return (
//     <div>

//     </div>
//   )
// }

// export default TarjetaRegistro

// import * as React from "react";
// import Link from "@mui/material/Link";
// import Table from "@mui/material/Table";
// import TableBody from "@mui/material/TableBody";
// import TableCell from "@mui/material/TableCell";
// import TableHead from "@mui/material/TableHead";
// import TableRow from "@mui/material/TableRow";
// import { Typography } from "@mui/material";

// // Generate Order Data
// function createData(
//   id,
//   direccion,
//   edad,
//   estadoCivil,
//   motivoViaje,
//   nacionalidad,
//   nombreCompleto,
//   observaciones,
//   procedencia,
//   profesion
// ) {
//   return {
//     id,
//     direccion,
//     edad,
//     estadoCivil,
//     motivoViaje,
//     nacionalidad,
//     nombreCompleto,
//     observaciones,
//     procedencia,
//     profesion,
//   };
// }

// const rows = [
//   createData(
//     0,
//     "antezana",
//     "14",
//     "soltero",
//     "paseo",
//     "peruano",
//     "julio ",
//     "sin obs",
//     "peru",
//     "civil"
//   ),

//   createData(
//     1,
//     "mollemolle",
//     "35",
//     "soltero",
//     "paseo",
//     "chileno",
//     "Eduardo",
//     "sin obs",
//     "chile",
//     "civil"
//   ),
// ];

// function preventDefault(event) {
//   event.preventDefault();
// }

// export default function TarjetaRegistro() {
//   return (
//     <React.Fragment>
//       <Typography>Ultimos Registrados</Typography>
//       <Table size="small">
//         <TableHead>
//           <TableRow>
//             <TableCell>Nombre Completo</TableCell>
//             <TableCell>Edad</TableCell>
//             <TableCell>EstadoCivil</TableCell>
//             <TableCell>Motivo de Viaje</TableCell>
//             <TableCell>Nacionalidad</TableCell>
//             <TableCell>Direccion</TableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {rows.map((row) => (
//             <TableRow key={row.id}>
//               <TableCell>{row.nombreCompleto}</TableCell>
//               <TableCell>{row.edad}</TableCell>
//               <TableCell>{row.estadoCivil}</TableCell>
//               <TableCell>{row.motivoViaje}</TableCell>
//               <TableCell>{row.nacionalidad}</TableCell>
//               <TableCell>{row.direccion}</TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//       <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
//         See more orders
//       </Link>
//     </React.Fragment>
//   );
// }
