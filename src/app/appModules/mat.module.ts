import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatToolbarModule } from '@angular/material/toolbar';


const material: any = [
    MatIconModule,
    MatButtonModule,
    MatTooltipModule,
    MatToolbarModule
]

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        material
    ], 
    exports: [
        material
    ]
})
export class MatModule { }