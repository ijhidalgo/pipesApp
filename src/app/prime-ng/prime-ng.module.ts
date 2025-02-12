import { NgModule } from '@angular/core';

import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar'
// import { MenuModule } from 'primeng/menu';
import { providePrimeNG } from 'primeng/config';
import lara from '@primeng/themes/lara';
import { CardModule } from 'primeng/card'
import { FieldsetModule } from 'primeng/fieldset'
import { PanelModule } from 'primeng/panel'
import { ToolbarModule } from 'primeng/toolbar';
import { TableModule } from 'primeng/table';

@NgModule({
  exports: [
    MenubarModule,
    // MenuModule,
    ButtonModule,
    CardModule,
    FieldsetModule,
    PanelModule,
    TableModule,
    ToolbarModule
  ],
  providers: [
    providePrimeNG({
      theme: {
        preset: lara
      }
    })
  ]
})
export class PrimeNgModule { }
