import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import * as BoletaServer from "./BoletaServer";

const BoletaForm = () => {
    
    const navigate = useNavigate();
    const params = useParams();
    console.log(params);
    
    const initialState = {_id:"", numero:"", partido:"", presi:"", vice:"", descripcion:"" };
    
    const [boleta,setBoleta] = useState(initialState);

    const handleInputChange = (e) => {
        setBoleta({...boleta, [e.target.name]: e.target.value});
    };
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            let res;
            res = await BoletaServer.addBoleta(boleta);
            const data = await res.json();
            if (data.message === "Success") {   
                setBoleta(initialState);
            }
            navigate('/');
            setBoleta(initialState);
        } catch (error) {
            console.log(error);
        }
    }; 
    
    const getBoleta = async (boletaId) => {
        try {
            const res = await BoletaServer.getBoleta(boletaId);
            const data = await res.json();
            const {numero, partido, presi, vice, descripcion} = data.boleta;
            setBoleta({numero, partido, presi, vice, descripcion});
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(()=>{
        if(params.id){
            getBoleta(params.id);
        } 
    },[]);
    
    return (

            <div>
                
                <div>
                    <p className="text-white" >Bienvenidos al Portal De Boletas de las elecciones de Voto Joven 
                       de la Escuela pública N°20 de Camet (Mar del Plata). Aquí podrán cargar sus Boletas y leer todas las demás. Así
                       podrán tomar su decisión acerca del Voto a emitir. ¡Buena suerte!
                    </p>
                </div>
                
                <div className="card text-white bg-primary mb-4">
                    <div className="card-body">
                        <form id="tarea-form">
                            <input type="hidden" id="id-boleta"/>
                            <div className="form-group">
                                <label for="numero-boleta">N° de Boleta: </label>
                                <input type="text" className="form-control" id="numero-boleta" name="numero" value={boleta.numero} onChange={handleInputChange} placeholder="Número de Boleta"/>
                                <br/>
                            </div>
                            <div className="form-group">
                                <label for="partido-boleta">Partido Político: </label>
                                <input type="text" className="form-control" id="partido-boleta" name="partido" value={boleta.partido} onChange={handleInputChange} placeholder="Nombre del Partido Político"/>
                                <br/>
                            </div>
                            <div className="form-group">
                                <label for="presi-boleta">Candidato a Presidente: </label>
                                <input type="text" className="form-control" id="presi-boleta" name="presi" value={boleta.presi} onChange={handleInputChange} placeholder="Nombre completo del candidato a Presidente"/>
                                <br/>
                            </div>
                            <div className="form-group">
                                <label for="vice-boleta">Candidato a Vicepresidente: </label>
                                <input type="text" className="form-control" id="vice-boleta" name="vice" value={boleta.vice} onChange={handleInputChange} placeholder="Nombre completo del candidato a Presidente"/>
                                <br/>
                            </div>
                            <div className="form-group">
                                <label for="cuerpo-boleta">Descripción: </label>
                                <textarea id="cuerpo-boleta" className="form-control" name="descripcion" value={boleta.descripcion} onChange={handleInputChange} placeholder="Nombre de los candidatos a legisladores (si los hay) y una breve descripción de las propuestas" cols="60" rows="4"></textarea>
                                <br/>
                            </div>
                            <div className="d-grid gap-2">
                                <button onClick={handleSubmit} className="btn btn-dark text-center">Guardar Boleta</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

    )

};

export default BoletaForm;