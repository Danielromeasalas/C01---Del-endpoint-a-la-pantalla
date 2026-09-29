import { Injectable, Get, Param } from '@nestjs/common';


@Injectable()
export class MascotasService {

    private readonly mascotas = [
        {id:1, nombre: 'Alberto'},
        {id:2, nombre: 'Diego'},
        {id:3, nombre: 'Natalia'}
    ];


findOne(id: number) {
  return this.mascotas.find(m => m.id === id);
}

}
