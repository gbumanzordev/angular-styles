import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'styles';
  yourName = 'Erick Rivera';
  money = 23456;
  obj = {
    name: 'Jose',
    lastName: 'Soto',
    age: 26,
    height: 1.54,
  };
  private observable$ = new BehaviorSubject<boolean>(false);

  ngOnInit(): void {
    setTimeout(() => this.observable$.next(true), 5000);
  }

  get myObservable$() {
    return this.observable$.asObservable();
  }
}
