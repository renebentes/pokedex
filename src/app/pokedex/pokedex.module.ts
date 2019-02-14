import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ListItemComponent } from './components/list-item/list-item.component';
import { MyNumberPipe } from './pipes/my-number.pipe';
import { PokedexRoutingModule } from './pokedex-routing.module';
import { ListComponent } from './views/list/list.component';
import { InformationComponent } from './views/information/information.component';

const components = [ListComponent, ListItemComponent];

@NgModule({
  declarations: [...components, MyNumberPipe, InformationComponent],
  imports: [CommonModule, PokedexRoutingModule, FormsModule],
  exports: [components]
})
export class PokedexModule {}
