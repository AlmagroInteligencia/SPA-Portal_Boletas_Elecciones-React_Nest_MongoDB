import React, { useEffect, useState } from 'react';

import BoletaItem from './BoletaItem';

import * as BoletaServer from './BoletaServer';

const BoletaList=()=>{
    const [boletas,setBoletas]=useState([]);
    
    const listBoletas = async () => {
        try {
            const res = await BoletaServer.listBoletas();
            const data = await res.json();
            setBoletas(data.boletas);
        } catch (error) {
            console.log(error);
        }
    };

    listBoletas();

    return (
        <div className="row">
            {boletas.map((boleta) => (
                <BoletaItem key={boleta.id} boleta={boleta} listBoletas={listBoletas}/>
            ))}
        </div>

    )
};

export default BoletaList;