import React from 'react';
import { useNavigate } from 'react-router-dom';

import * as BoletaServer from './BoletaServer';

const BoletaItem = ({boleta, listBoletas}) => {
    
    const navigate=useNavigate();
    
    const handleDelete = async (boletaId) => {
        await BoletaServer.deleteBoleta(boletaId);
        listBoletas();
    };

    return (
        <div className="col-md-4 mb-2">
            <div className="card card-body text-white bg-success mb-3">
                <h3 className="card-title">Número de Boleta: {boleta.numero}</h3>
                <p className="card-text">Partido Político: {boleta.partido}</p>
                <p className="card-text">Candidato a Presidente: {boleta.presi}</p>
                <p className="card-text">Candidato a Vicepresidente: {boleta.vice}</p>
                <p className="card-text">Propuestas: {boleta.descripcion}</p>
                <br/>
                <button onClick={()=>boleta._id && handleDelete(boleta._id)} className="btn btn-danger">Eliminar Boleta</button>
            </div>
        </div>
    );
};

export default BoletaItem;