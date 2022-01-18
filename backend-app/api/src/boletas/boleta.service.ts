import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CreateBoletaDTO } from './dto/boletas.dto';
import { Boleta } from './interfaces/boleta.interface';

@Injectable()
export class BoletaService {
 
    constructor(@InjectModel('Boleta') private readonly boletaModel:Model<Boleta>) {}
    
    async getBoleta(boletaId: string):  Promise<Boleta> {
        const boleta = await this.boletaModel.findById(boletaId);
        return boleta;
    }

    async getBoletas(): Promise<Boleta[]> {
        const boletas = await this.boletaModel.find();
        return boletas;
    }

    async createBoleta(createBoletaDTO:CreateBoletaDTO): Promise<Boleta> {
        const boleta = new this.boletaModel(createBoletaDTO);
        await boleta.save();
        return boleta;
    }

    async updateBoleta(boletaId:string, createBoletaDTO:CreateBoletaDTO): Promise<Boleta> {
        const updatedBoleta = await this.boletaModel.findByIdAndUpdate(boletaId, createBoletaDTO, {new:true});
        return updatedBoleta;
    }

    async deleteBoleta(boletaId:string): Promise<Boleta> {
        const deletedBoleta = await this.boletaModel.findByIdAndDelete(boletaId);
        return deletedBoleta;
    }

}
