import { Pipe, PipeTransform } from '@angular/core';
import {typeNames_short} from '../config'
@Pipe({name: 'tn'})
export class TypeName implements PipeTransform {
    transform(value: any): any {
        return typeNames_short[value]
    }
}