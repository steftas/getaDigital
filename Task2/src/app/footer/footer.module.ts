import { NgModule } from '@angular/core';
import { FooterComponent } from './footer.component';
import { MatGridListModule } from '@angular/material/grid-list';

@NgModule({
    declarations: [
        FooterComponent
    ],
    imports: [
        MatGridListModule
    ],
    exports: [
        FooterComponent
    ]
})
export class FooterModule { }
