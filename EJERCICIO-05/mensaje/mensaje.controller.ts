import { Controller, Get } from '@nestjs/common';

@Controller('mensaje')
export class MensajeController {

@Get()
    mensajear() {
        return { mensaje: '¡Conexión conseguida! ' };
    }

}
