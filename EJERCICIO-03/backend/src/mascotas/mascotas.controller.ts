import { Controller, Get, Param } from '@nestjs/common';
import { MascotasService } from './mascotas.service';

@Controller('mascotas')
export class MascotasController {
    constructor(
        private readonly mascotasService: MascotasService,
    ) {}

    @Get(':id')
    findOne(@Param('id') id: number) {
        return this.mascotasService.findOne(id);
    }
}