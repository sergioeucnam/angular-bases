import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-character-create',
  templateUrl: './character-create.component.html',
  styleUrls: ['./character-create.component.css'],
})
export class CharacterCreateComponent {
  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();
  public character: Character = {
    name: '',
    power: 0,
  };

  resetForm(): void {
    this.character = {
      name: '',
      power: 0,
    };
  }
  emitCharacter(): void {
    if (this.character.name.trim().length === 0) return;
    this.onNewCharacter.emit(this.character);
    this.resetForm();
  }
}
