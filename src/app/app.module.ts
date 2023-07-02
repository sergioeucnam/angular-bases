import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CotadorModule } from './cotador/cotador.module';
import { HeroesModule } from './heroes/heroes.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, CotadorModule, HeroesModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
