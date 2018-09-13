import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TypeName} from './typeName.pipe'
@NgModule({
    declarations: [TypeName],
    imports: [ CommonModule ],
    exports: [TypeName],
    providers: [],
})
export class PipesModule {}