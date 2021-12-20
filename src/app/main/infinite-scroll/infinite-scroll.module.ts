import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfiniteScrollComponent } from './infinite-scroll.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { InfiniteScrollModule as NgxInfiniteScrollModule } from 'ngx-infinite-scroll';
import { LightboxModule } from 'ngx-lightbox';

// Material
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  declarations: [InfiniteScrollComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    FormsModule,
    NgxInfiniteScrollModule,
    LightboxModule,

    // Material
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatDividerModule,
    MatSnackBarModule,
  ],
  exports: [InfiniteScrollComponent],
})
export class InfiniteScrollModule {}
