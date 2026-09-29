import { Get, Injectable, Query } from '@nestjs/common';

@Injectable()
export class JuegosService {
  private readonly juegos = [
    { id: 1, nombre: 'Super Mario', genero: 'Plataformas'},
    { id: 2, nombre: 'Minecraft', genero: 'Sandbox'},
    { id: 3, nombre: 'Tetris', genero: 'Puzzle'},
    { id: 4, nombre: 'Atari', genero: 'Arcade'}
  ];

findAll(genero?: string) {
    if (genero) {
      return this.juegos.filter(
        (juego) => juego.genero.toLowerCase() === genero.toLowerCase()
      );
    }
    return this.juegos;
  }

findOne(id: number) {
    return this.juegos.find((juego) => juego.id === id);
  }

}







