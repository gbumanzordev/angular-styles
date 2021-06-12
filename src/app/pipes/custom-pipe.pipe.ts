import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse',
  pure: true,
})
export class ReversePipe implements PipeTransform {
  transform(value: any, ...args: unknown[]): string {
    console.log('calling reverse pipe');
    return value.toString().split('').reverse().join('');
  }
}
