import React, {useState} from 'react';
import OrdenesDeVentaTable from './OrdenesDeVentaTable';
import { Link } from 'react-router-dom'

export default function OrdenesDeVenta()  {

return (
        <div>
            <div className="bg-secondary row justify-content-center mb-4">
                <h3 className="text-white"> Ordenes de Venta</h3>
            </div>
            <div className="container padding-top">
                <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '80vh'}}>
                    <OrdenesDeVentaTable/>
                </div>
                <Link to="/venta" className="btn btn-primary">Cargar orden</Link>
            </div>
         </div>
        );
    }
