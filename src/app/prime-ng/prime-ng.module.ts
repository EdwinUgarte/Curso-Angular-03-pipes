import { NgModule } from '@angular/core';

//Prime Ng
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import {MenubarModule} from 'primeng/menubar';
import {FieldsetModule} from 'primeng/fieldset';

@NgModule({
  declarations: [],
  imports: [],
  exports: [ButtonModule, CardModule, MenubarModule, FieldsetModule],
})
export class PrimeNgModule {}

//? Los modulos no se importan porque no se utiliza en ningun componente de esta carpeta o modulo, solo los exporta
