import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WritableSignalComponent } from './components/writable-signal/writable-signal.component';
import { ComputedSignalComponent } from './components/computed-signal/computed-signal.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, WritableSignalComponent, ComputedSignalComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angular-signals';
}
