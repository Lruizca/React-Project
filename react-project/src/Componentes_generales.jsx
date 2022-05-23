import React from 'react';
import {Encabezado} from './Encabezado';
import {Tabla} from './Tabla';
import {Formulario} from './Formulario';
import {Boton} from './Boton';
import {Footer} from './Footer';
import 'bootstrap/dist/css/bootstrap.min.css';


export function Aplicacion(){

    return (
        <React.Fragment>
            <Encabezado/>
            <br />
            <br />
            <Tabla/>
            <br />
            <br />
            <Formulario/>
            <br />
            <br />
            <Boton/>
            <br />
            <br />
            <Footer/>      
        </React.Fragment>
    )
}