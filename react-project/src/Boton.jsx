import React from 'react'

export function Boton(){
    const alerta=()=>{
        alert("Alerta pls");
    }

    return (
        <>
        <div className="d-grid gap-2 col-6 mx-auto">
        <button onClick={()=>alerta()} className="btn btn-dark" type="button" id='ALERTA'>ENVIAR</button>
        </div>
        </>
        
    )
}