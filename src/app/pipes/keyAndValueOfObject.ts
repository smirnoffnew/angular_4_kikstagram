import { PipeTransform, Pipe } from '@angular/core';
@Pipe({name: 'keyAndValueOfObject'})
export class KeyAndValueOfObject implements PipeTransform {
  transform(value, args:string[]) : any {
    let keys = [];
    for (let key in value) {
      if (key !== 'image') {
        keys.push({key: key, value: value[key]});
      }
    }
    return keys;
  }
}