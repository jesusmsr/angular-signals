import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-writable-signal',
  standalone: true,
  imports: [],
  templateUrl: './writable-signal.component.html',
  styleUrl: './writable-signal.component.css',
})
export class WritableSignalComponent {
  count = signal(0);
  colors = signal(['Red', 'Blue']);

  increment() {
    // Set method
    //this.count.set(this.count() + 1);
    // Update method
    this.count.update((value) => value + 1);

    this.colors.update((value) => [...value, 'Green']);
    console.log(this.colors());
  }
}
