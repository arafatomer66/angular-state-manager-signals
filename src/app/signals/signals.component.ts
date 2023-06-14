import { NgFor } from '@angular/common';
import { Component, signal, computed, effect } from '@angular/core';

@Component({
  selector: 'app-signals',
  templateUrl: './signals.component.html',
  styleUrls: ['./signals.component.scss'],
  standalone: true,
  imports: [NgFor],
})
export class SignalsComponent {
  actions = signal<string[]>([] as string[]);
  public counter = signal(0);
  doubleCounter =  computed(() => this.counter() * 2);

  constructor() {
    effect(() => {
      console.log(this.counter());
    });
  }

  increment() {
    this.counter.update(ele => ele + 1);
    // this.counter.set(5);   take one value
    // this.counter.set(this.counter() + 1);   take one value

    this.actions.mutate((oldAction) => oldAction.push('Increment')); // possble with update
  }

  decrement() {
    this.counter.update(ele => ele - 1);

    this.actions.mutate((oldAction) => oldAction.push('Decrement'));
  }
}
