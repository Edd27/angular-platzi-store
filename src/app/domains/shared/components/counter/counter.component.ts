
import { Component, Input, signal, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css',
})
export class CounterComponent {
  @Input({ required: true }) duration = 0;
  @Input({ required: true }) message = '';
  counter = signal(0);
  interval: number | undefined;

  /**
   * Runs before render and only once
   * Cannot be async
   */
  constructor() {
    console.log('constructor');
    console.log('-'.repeat(15));
  }

  /**
   * Runs before and during render of component
   * Detect component changes
   */
  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges');
    console.log(changes);
    const duration = changes['duration'];
    console.log(duration);
    if (duration && duration.currentValue !== duration.previousValue) {
      this.doSomething();
    }
    console.log('-'.repeat(15));
  }

  /**
   * Runs after render and only once
   * Can be async
   */
  ngOnInit() {
    console.log('ngOnInit');
    console.log('duration =>', this.duration);
    console.log('message =>', this.message);
    this.interval = window.setInterval(() => {
      console.log('run interval');
      this.counter.update((prevCounter) => prevCounter + 1);
    }, 1000);
    console.log('-'.repeat(10));
  }

  /**
   * Runs after render and only once
   * Ask if the children have already been rendered
   */
  ngAfterViewInit() {
    console.log('ngAfterViewInit');
    console.log('-'.repeat(10));
  }

  /**
   * Component cycle ends
   */
  ngOnDestroy() {
    console.log('ngOnDestroy');
    window.clearInterval(this.interval);
    console.log('-'.repeat(10));
  }

  doSomething() {
    console.log('change duration');
  }
}
