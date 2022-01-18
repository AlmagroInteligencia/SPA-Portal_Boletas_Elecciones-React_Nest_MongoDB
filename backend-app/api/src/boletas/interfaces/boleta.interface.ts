import { Document } from "mongoose";

export interface Boleta extends Document{
    readonly numero: string;
    readonly partido: string;
    readonly presi: string;
    readonly vice: string;
    readonly descripcion: string;
}