import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-computed-signal',
  standalone: true,
  imports: [],
  templateUrl: './computed-signal.component.html',
  styleUrl: './computed-signal.component.css',
})
export class ComputedSignalComponent {
  length = signal(20);
  width = signal(40);

  // When one of the signals is changed, the computed signal is re-evaluated
  area = computed(() => this.length() * this.width());

  changeLength() {
    this.length.update((value) => value + 20);
  }
}
