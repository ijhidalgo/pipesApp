import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'canFly',
  standalone: false
})
export class FlyPipe implements PipeTransform {

  transform(value: boolean): 'Yes'|'No' {
    return value ? 'Yes' : 'No';
  }

}
