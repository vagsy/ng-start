import { Injectable } from '@angular/core';

@Injectable()
export class HeroService  {
  heros: Array<{ id: number; name: string }> = [
    { id: 11, name: 'Mr.Nice' },
    { id: 12, name: 'Narco' },
    { id: 13, name: 'Bombasto' },
    { id: 14, name: 'Celeritas' },
    { id: 15, name: 'Magneta' }
  ];

  getHeros() {
    return this.heros;
  }
}
