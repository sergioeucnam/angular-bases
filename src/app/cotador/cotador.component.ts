import { Component } from '@angular/core';

@Component({
  selector: 'app-cotador',
  templateUrl: './cotador.component.html',
  styleUrls: ['./cotador.component.css'],
})
export class CotadorComponent {
  public contador: number = 0;

  increaseCounter(value: number): void {
    this.contador += value;
  }

  decreaseCounter(value: number): void {
    if (this.contador > 0) {
      this.contador -= value;
    }
  }

  resetCounter(): void {
    this.contador = 0;
  }
}
