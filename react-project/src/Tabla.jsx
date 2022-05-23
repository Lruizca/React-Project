import React from 'react'

export function Tabla(){
    return (
        <div className='container'>
        <table className="table table-info table-striped">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Nombre</th>
      <th scope="col">Apellido</th>
      <th scope="col">Ciudad</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Laura</td>
      <td>Ruiz</td>
      <td>Manizales</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacobo</td>
      <td>Thornton</td>
      <td>Cali</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Maria</td>
      <td>Cardona</td>
      <td>Palmira</td>
    </tr>
  </tbody>
</table>
</div>
    )
}