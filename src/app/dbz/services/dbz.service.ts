import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid';

@Injectable({
  providedIn: 'root',
})
export class DbzService {
  constructor() {}

  public characters: Character[] = [
    {
      id: uuid(),
      name: 'Goku',
      power: 15000,
    },
    {
      id: uuid(),
      name: 'Vegeta',
      power: 7500,
    },
    {
      id: uuid(),
      name: 'Trunks',
      power: 5000,
    },
    {
      id: uuid(),
      name: 'Gohan',
      power: 4000,
    },
  ];

  addNewCharacter(character: Character): void {
    const newCharacter = {
      id: uuid(),
      ...character,
    };
    this.characters.push(newCharacter);
  }
  deleteCharacterById(id: string): void {
    this.characters = this.characters.filter(
      (character) => character.id !== id
    );
  }
}
