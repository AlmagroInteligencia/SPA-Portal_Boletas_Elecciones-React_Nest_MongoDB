import { Controller, Get, Post, Put, Delete, Res, HttpStatus, Body, Param, NotFoundException } from '@nestjs/common';
import { CreateBoletaDTO } from './dto/boletas.dto';
import { BoletaService } from './boleta.service'; 

@Controller('boleta')
export class BoletaController {

    constructor(private boletaService:BoletaService) {}
    
    @Get('/:boletaId')
    async getBoleta(@Res() res, @Param('boletaId') boletaId) {
        const boleta = await this.boletaService.getBoleta(boletaId);
        if (!boleta) throw new NotFoundException('This boleta does not exists'); 
        return res.status(HttpStatus.OK).json({
            message: "Success",
            boleta: boleta
        });
    }
    
    @Get('/')
    async getBoletas(@Res() res) {
        const boletas = await this.boletaService.getBoletas();
        return res.status(HttpStatus.OK).json({
            message: "Success",
            boletas: boletas
        });
    }
    
    @Post('/')
    async createBoleta(@Res() res, @Body() createBoletaDTO:CreateBoletaDTO) {
        const boleta = await this.boletaService.createBoleta(createBoletaDTO);
        return res.status(HttpStatus.OK).json({
            message: "Success",
            boleta: boleta
        });
    }

    @Put('/:boletaId')
    async updateBoleta(@Res() res, @Body() createBoletaDTO:CreateBoletaDTO, @Param('boletaId') boletaId) {
        const updatedBoleta = await this.boletaService.updateBoleta(boletaId, createBoletaDTO);
        if (!updatedBoleta) throw new NotFoundException('This boleta does not exists'); 
        return res.status(HttpStatus.OK).json({
            message: "Success",
            updatedboleta: updatedBoleta
        });
    }

    @Delete('/:boletaId')
    async deleteBoleta(@Res() res, @Param('boletaId') boletaId) {
        const deletedBoleta = await this.boletaService.deleteBoleta(boletaId);
        if (!deletedBoleta) throw new NotFoundException('This boleta does not exists'); 
        return res.status(HttpStatus.OK).json({
            message: "Success",
            deletedboleta: deletedBoleta
        });
    }

}
