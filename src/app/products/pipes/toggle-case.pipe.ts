import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name:'toggleCase',
  standalone: false
})
export class ToggleCasePipe implements PipeTransform {

  transform(value: string, toUpper: boolean = false) {
    return toUpper ? value.toUpperCase() : value.toLowerCase();
  }

}
