import { NgModule } from '@angular/core';
import { MatAutocompleteModule } from '@angular/material/autocomplete'
import { MatCardModule } from '@angular/material/card'
import { MatChipsModule } from '@angular/material/chips'
import { MatDialogModule } from '@angular/material/dialog'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatIconModule } from '@angular/material/icon'
import { MatGridListModule, MatGridTile } from '@angular/material/grid-list'
import { MatProgressSpinnerModule} from '@angular/material/progress-spinner'
import { MatInputModule } from '@angular/material/input'
import { MatSelectModule } from '@angular/material/select'
import { MatSnackBarModule } from '@angular/material/snack-bar'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatButtonModule } from '@angular/material/button'
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatListModule } from '@angular/material/list'




@NgModule({
  exports: [
    MatAutocompleteModule,
    MatButtonModule,
    MatCardModule,
    MatChipsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatGridListModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    MatSidenavModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatListModule
  ]
})
export class MaterialModule { }
