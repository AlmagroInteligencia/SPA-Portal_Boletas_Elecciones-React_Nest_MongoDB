import { Schema } from "mongoose"

export const BoletaSchema = new Schema({
   numero: String, 
   partido: String, 
   presi: String,
   vice: String,
   descripcion: String
})