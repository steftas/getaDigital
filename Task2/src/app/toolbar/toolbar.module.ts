import { NgModule } from '@angular/core';
import { ToolbarComponent } from './toolbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
    declarations: [
        ToolbarComponent
    ],
    imports: [
        MatToolbarModule
    ],
    exports: [
        ToolbarComponent
    ]
})
export class ToolbarModule { }
