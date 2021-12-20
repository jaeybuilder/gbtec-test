import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginatorComponent } from './paginator.component';
import { FlexLayoutModule } from '@angular/flex-layout';

// Material modules
import { MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
  declarations: [PaginatorComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,

    // Material
    MatPaginatorModule,
  ],
})
export class PaginatorModule {}
