import { Controller, Get } from '@nestjs/common';
import type { PizzasService } from './pizzas.service';

@Controller('pizzas')
export class PizzasController {
    constructor(private readonly pizzasService: PizzasService) {}

    @Get()
    findAll() {
    return this.pizzasService.findAll();
}

}

