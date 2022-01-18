const API_URL="http://localhost:8000/boleta/";

export const listBoletas = async () => {
    return await fetch(API_URL);
};

export const getBoleta = async (boletaId) => {
    return await fetch(`${API_URL}${boletaId}`);
};

export const addBoleta = async (newBoleta) => {
    return await fetch(API_URL,{
        method:"POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "numero": String(newBoleta.numero).trim(),
            "partido": String(newBoleta.partido).trim(),
            "presi": String(newBoleta.presi).trim(),
            "vice": String(newBoleta.vice).trim(),
            "descripcion": String(newBoleta.descripcion).trim()
        })
        
    });
};

export const deleteBoleta = async (boletaId) => {
    return await fetch(`${API_URL}${boletaId}`,{
        method:"DELETE"        
    });
};