import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-characters-list',
  templateUrl: './characters-list.component.html',
  styleUrls: ['./characters-list.component.css'],
})
export class CharactersListComponent {
  @Input('title') title: string = 'Main Characters';
  @Input('characters') characters: Character[] = [];
  @Output('onDeleteCharacter')
  public deleteCharacter: EventEmitter<string> = new EventEmitter<string>();

  onDeleteCharacter(id: string): void {
    this.deleteCharacter.emit(id);
  }
}
