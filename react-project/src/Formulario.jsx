import React from 'react'


export function Formulario() {
    return (
        <div className="container">
        <div className="row">
  <div className="col">
    <input type="text" className="form-control" placeholder="Nombres" aria-label="First name"/>
  </div>
  <div className="col">
    <input type="text" className="form-control" placeholder="Apellidos" aria-label="Last name"/>
  </div>
  <div className="col">
    <input type="text" className="form-control" placeholder="Ciudad" aria-label="City"/>
</div>
</div>
</div>
    )
}